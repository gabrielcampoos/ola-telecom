import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { showNotification } from '../../../../../store/modules/Notification/notificationSlice';
import { loginUsuario } from '../../../../../store/modules/Usuario/usuarioSlice';

interface IFormDialog {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	username: string;
	setUsername: React.Dispatch<React.SetStateAction<string>>;
	senha: string;
	setSenha: React.Dispatch<React.SetStateAction<string>>;
}

export default function FormDialog({
	open,
	setOpen,
	username,
	setUsername,
	senha,
	setSenha,
}: IFormDialog) {
	const handleClose = () => {
		setOpen(false);
	};

	const user = useAppSelector((state) => state.usuario);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (user.usuario.isLogged) {
			setTimeout(() => {
				navigate('/home');
			}, 1000);
		}
	}, [dispatch, user, navigate]);

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		if (!username || !senha) {
			dispatch(
				showNotification({
					success: false,
					message: 'Usuário não cadastrado.',
				}),
			);
			return;
		}

		const login = {
			username: username,
			senha: senha,
		};

		dispatch(loginUsuario(login));
	};

	return (
		<React.Fragment>
			<Box component="form" onSubmit={handleSubmit}>
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle>Login</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="username"
							label="Username"
							type="text"
							fullWidth
							variant="standard"
							onChange={(ev) =>
								setUsername(ev.currentTarget.value)
							}
							value={username}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="password"
							label="Password"
							type="password"
							fullWidth
							variant="standard"
							onChange={(ev) => setSenha(ev.currentTarget.value)}
							value={senha}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button type="submit">Subscribe</Button>
					</DialogActions>
				</Dialog>
			</Box>
		</React.Fragment>
	);
}
