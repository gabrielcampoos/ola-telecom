import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import servicoAPI from '../../../configs/services/olaTelecom.api';
import { RespostaCadastro, RespostaLogin } from '../../types/RetornoRequests';
import { UsuarioDTO } from '../../types/Usuario';
import { showNotification } from '../Notification/notificationSlice';

const initialState = {
	usuario: {
		id: '',
		nome: '',
		isLogged: false,
	},
};

export const cadastrarUsuario = createAsyncThunk(
	'usuario/cadastro',
	async (novoUsuario: UsuarioDTO, { dispatch }) => {
		try {
			const resposta = await servicoAPI.post('/usuarios', novoUsuario);

			const respostaAPI = resposta.data as RespostaCadastro;

			dispatch(
				showNotification({
					success: respostaAPI.sucesso ? true : false,
					message: respostaAPI.mensagem,
				}),
			);

			return respostaAPI;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as RespostaCadastro;

				dispatch(
					showNotification({
						message: response.mensagem,
						success: response.sucesso,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const loginUsuario = createAsyncThunk(
	'usuario/login',
	async (login: Omit<UsuarioDTO, 'nome'>, { dispatch }) => {
		try {
			const resposta = await servicoAPI.post('/login', login);

			const respostaAPI = resposta.data as RespostaLogin;

			dispatch(
				showNotification({
					success: respostaAPI.sucesso,
					message: respostaAPI.mensagem,
				}),
			);

			return respostaAPI;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as RespostaLogin;

				dispatch(
					showNotification({
						success: response.sucesso,
						message: response.mensagem,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const usuariosSlice = createSlice({
	name: 'usuario',
	initialState: initialState,
	reducers: {
		setUser: (estadoAtual, action) => {
			return {
				...estadoAtual,
				usuario: {
					id: action.payload.id,
					nome: action.payload.nome,
					isLogged: true,
				},
			};
		},
		logoutUser: () => {
			return initialState;
		},
	},
	extraReducers: (builder) => {
		//cadastro
		builder.addCase(cadastrarUsuario.pending, (estadoAtual) => {
			return {
				...estadoAtual,
				loading: true,
			};
		});
		builder.addCase(cadastrarUsuario.fulfilled, (estadoAtual, action) => {
			const payload = action.payload as RespostaCadastro;

			if (payload.sucesso && payload.dadosCadastrados) {
				return {
					usuario: {
						id: payload.dadosCadastrados?.id,
						nome: payload.dadosCadastrados?.nome,
						isLogged: false,
					},
					loading: false,
				};
			}

			if (!payload.sucesso) {
				return {
					...estadoAtual,
					loading: false,
				};
			}
		});
		builder.addCase(cadastrarUsuario.rejected, (estadoAtual) => {
			return {
				...estadoAtual,
				loading: false,
			};
		});

		//Login
		builder.addCase(loginUsuario.pending, (estadoAtual) => {
			return {
				...estadoAtual,
				loading: true,
			};
		});

		builder.addCase(loginUsuario.fulfilled, (estadoAtual, action) => {
			const payload = action.payload as RespostaLogin;

			if (payload.sucesso && payload.dados) {
				localStorage.setItem(
					'userLogged',
					JSON.stringify(payload.dados),
				);

				return {
					usuario: {
						id: payload.dados.id,
						nome: payload.dados.nome,
						isLogged: true,
					},
					loading: false,
				};
			}

			if (!payload.sucesso) {
				return initialState;
			}
		});
		builder.addCase(loginUsuario.rejected, () => {
			return initialState;
		});
	},
});

export const { setUser, logoutUser } = usuariosSlice.actions;
export default usuariosSlice.reducer;
