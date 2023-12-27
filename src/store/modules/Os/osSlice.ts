import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState } from '../..';
import servicoAPI from '../../../configs/services/olaTelecom.api';
import { OsDTO, OsState, PesquisaOs } from '../../types/OsState';
import { RespostaOs } from '../../types/RetornoRequests';
import { showNotification } from '../Notification/notificationSlice';

export const criarOs = createAsyncThunk(
	'os/criar',
	async (dadosOs: OsDTO, { dispatch }) => {
		try {
			const resposta = await servicoAPI.post('/os', dadosOs);

			dispatch(
				showNotification({
					success: resposta.data.sucesso,
					message: resposta.data.mensagem,
				}),
			);
			return resposta.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const retorno = error.response?.data as RespostaOs;
				dispatch(
					showNotification({
						success: retorno.sucesso,
						message: retorno.mensagem,
					}),
				);
				return retorno;
			}
			return {
				sucesso: false,
				mensagem: 'Algo de errado não está certo. A requisição falhou.',
			};
		}
	},
);

export const listarOs = createAsyncThunk(
	'os/listar',
	async (dados: PesquisaOs, { dispatch }) => {
		try {
			const resposta = await servicoAPI.get(
				`/os/${dados.id}` ||
					`/os/${dados.nomeCliente}` ||
					`/os/${dados.criadoPor}` ||
					`/os/${dados.criadoEm}` ||
					`/os/${dados.ordemDate}`,
				{
					params: {
						id: dados.id,
						nome_cliente: dados.nomeCliente,
						criado_por: dados.criadoPor,
						criado_em: dados.criadoEm,
						ordem_date: dados.ordemDate,
					},
				},
			);
			dispatch(
				showNotification({
					success: resposta.data.sucesso,
					message: resposta.data.mensagem,
				}),
			);
			return resposta.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const retorno: RespostaOs = {
					sucesso: error.response?.data.sucesso,
					mensagem: error.response?.data.mensagem,
				};
				dispatch(
					showNotification({
						success: false,
						message: error.response?.data.mensagem,
					}),
				);
				return retorno;
			}

			return {
				sucesso: false,
				mensagem: 'Algo de errado não está certo. A requisição falhou.',
			};
		}
	},
);

const osAdapter = createEntityAdapter<OsState>({
	selectId: (state) => state.id,
});

export const { selectAll: listarTodasOs } = osAdapter.getSelectors(
	(global: RootState) => global.os,
);

const osSlice = createSlice({
	name: 'os',
	initialState: osAdapter.getInitialState({
		mensagem: '',
		loading: false,
	}),
	reducers: {
		refresh(estadoAtual) {
			return { ...estadoAtual };
		},
	},
	extraReducers: (builder) => {
		builder.addCase(listarOs.pending, (estadoAtual) => {
			estadoAtual.mensagem = 'Carregando Os.';
			estadoAtual.loading = true;
		});

		builder.addCase(listarOs.fulfilled, (estadoAtual, acao) => {
			const { dadosRetornados, mensagem } = acao.payload;
			estadoAtual.mensagem = mensagem;
			estadoAtual.loading = false;

			if (!dadosRetornados || dadosRetornados.length === 0) {
				estadoAtual.mensagem = 'Nada encontrado.';
				return;
			}

			osAdapter.setAll(estadoAtual, dadosRetornados);
		});

		builder.addCase(criarOs.pending, (estadoAtual) => {
			estadoAtual.mensagem = 'Criando Os...';
			estadoAtual.loading = true;
		});

		builder.addCase(criarOs.fulfilled, (estadoAtual, acao) => {
			const { dadosCadastrados, mensagem } = acao.payload;
			estadoAtual.mensagem = mensagem;
			estadoAtual.loading = false;

			if (!dadosCadastrados?.id) {
				console.log(acao.payload);
				return;
			}
			osAdapter.addOne(estadoAtual, dadosCadastrados);
		});

		builder.addCase(criarOs.rejected, (estadoAtual) => {
			estadoAtual.mensagem = 'Os não criada.';
			estadoAtual.loading = false;
		});
	},
});

export default osSlice.reducer;
export const { refresh } = osSlice.actions;
