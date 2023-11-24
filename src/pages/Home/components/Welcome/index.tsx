import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../../assets/images/ola-telecom-logo.png';

const Welcome = () => {
	const navigate = useNavigate();

	return (
		<Grid
			container
			spacing={{ xs: 2, md: 3 }}
			columns={{ xs: 4, sm: 8, md: 12 }}
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
		>
			<Grid
				xs={2}
				sm={4}
				md={4}
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="280px"
			>
				<img src={Logo} width="100%" />
			</Grid>

			<Grid xs={2} sm={4} md={4} pt="3rem">
				<Typography
					component="h1"
					variant="h5"
					fontSize="1.8rem"
					fontWeight={700}
					letterSpacing="0.1rem"
					color="HighlightText"
				>
					Seja bem-vindo!
				</Typography>
			</Grid>

			<Grid xs={2} sm={4} md={4} pt="0.6rem">
				<Typography
					component="text"
					variant="subtitle1"
					fontSize="1.1rem"
					fontWeight={500}
					color="HighlightText"
				>
					Tenha o melhor da Banda Larga e TV por Assinatura
				</Typography>
			</Grid>

			<Grid xs={2} sm={4} md={4} pt="3rem">
				<Button
					sx={{
						transition: 'ease-in-out 0.5s',
						background: 'rgba(255, 110, 0, 1)',
						color: '#fff',
						padding: '8px',
						'&:hover': {
							background: '#fff',
							color: 'rgba(255, 110, 0, 1)',
							fontWeight: '700',
						},
					}}
					onClick={() => navigate('/ola-telecom')}
				>
					Entrar
				</Button>
			</Grid>
		</Grid>
	);
};

export default Welcome;
