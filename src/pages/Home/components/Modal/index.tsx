import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { SetStateAction } from 'react';

interface IModal {
	context?: 'cancelar' | 'aceitar';
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
	link: string;
	setLink: React.Dispatch<SetStateAction<string>>;
}

export const Modal: React.FC<IModal> = ({ open, setOpen, link, setLink }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	// const btnPlus = document.getElementById('btnPlus');
	// const btnPremium = document.getElementById('btnPremium');
	// const btnPro = document.getElementById('btnPro');
	// const btnGold = document.getElementById('btnGold');
	// const plus =
	// 	'https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PLUS.&type=phone_number&app_absent=0';

	// const premium =
	// 	'https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PREMIUM.&type=phone_number&app_absent=0';

	// const pro =
	// 	'https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PRO.&type=phone_number&app_absent=0';

	// const gold =
	// 	'https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano GOLD.&type=phone_number&app_absent=0';

	return (
		<Dialog
			sx={{ zIndex: '9999999999' }}
			fullWidth
			maxWidth="xl"
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle
				id="alert-dialog-title"
				color="red"
				gutterBottom
				fontFamily="Khand, sans-serif"
				fontWeight={700}
				fontSize="2.3rem"
				letterSpacing="0.1rem"
				textAlign="center"
			>
				{'ATENÇÃO!'}
			</DialogTitle>
			<DialogContent>
				{(smDown && (
					<DialogContentText
						id="alert-dialog-description"
						color="#000"
						fontFamily="Khand, sans-serif"
						fontWeight="700"
						fontSize="1rem"
						// letterSpacing="0.1rem"
						textAlign="justify"
					>
						Em caso de cancelamento, pedimos que nos informe com no
						mínimo <span style={{ color: 'red' }}>TRÊS HORAS</span>{' '}
						de antecedência ou o serviço será debitado normalmente
						por falta de aviso.
					</DialogContentText>
				)) ||
					(mdDown && (
						<DialogContentText
							id="alert-dialog-description"
							color="#000"
							fontFamily="Khand, sans-serif"
							fontWeight="700"
							fontSize="1.1rem"
							// letterSpacing="0.1rem"
							textAlign="justify"
						>
							Em caso de cancelamento, pedimos que nos informe com
							no mínimo{' '}
							<span style={{ color: 'red' }}>TRÊS HORAS</span> de
							antecedência ou o serviço será debitado normalmente
							por falta de aviso.
						</DialogContentText>
					)) || (
						<DialogContentText
							id="alert-dialog-description"
							color="#000"
							fontFamily="Khand, sans-serif"
							fontWeight="700"
							fontSize="1.1rem"
							// letterSpacing="0.1rem"
							textAlign="justify"
						>
							Em caso de cancelamento, pedimos que nos informe com
							no mínimo{' '}
							<span style={{ color: 'red' }}>TRÊS HORAS</span> de
							antecedência ou o serviço será debitado normalmente
							por falta de aviso.
						</DialogContentText>
					)}
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => setOpen(false)}
					color="error"
					sx={{
						fontFamily: 'Khand, sans-serif',
						fontWeight: '600',
						fontSize: '1rem',
					}}
				>
					Voltar
				</Button>
				<Button
					href={link}
					autoFocus
					color="inherit"
					sx={{
						fontFamily: 'Khand, sans-serif',
						fontWeight: '600',
						fontSize: '1rem',
					}}
				>
					Continuar
				</Button>
			</DialogActions>
		</Dialog>
	);
};
