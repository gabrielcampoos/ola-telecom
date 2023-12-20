import { Box, Button, Typography } from '@mui/material';

export const Avisos = () => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				pt: 5,
			}}
		>
			<Typography
				sx={{
					fontSize: '40px',
					fontWeight: '700',
					flexGrow: 0.8,
					textAlign: 'center',
				}}
			>
				Avisos
			</Typography>
			<Button
				sx={{
					background: '#1976D2',
					color: '#fff',
					'&:hover': {
						background: '#175793',
					},
				}}
			>
				Adicionar Aviso
			</Button>
		</Box>
	);
};
