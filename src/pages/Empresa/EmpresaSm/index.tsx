import { Box, Grid, Typography } from '@mui/material';

import Router from '../../../assets/images/router.png';
import ResponsiveAppBar from '../../OlaTelecom/components/AppBar';
import Footer from '../../OlaTelecom/components/Footer';

const EmpresaSm = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				background: 'rgb(250, 131, 0)',
			}}
		>
			<ResponsiveAppBar />
			<Grid
				container
				spacing={{ xs: 0, sm: 2, md: 0 }}
				columns={{ xs: 12, sm: 12, md: 12 }}
				sx={{
					height: '90%',
				}}
			>
				<Grid
					item
					xs={7}
					sm={6}
					md={6}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						background: '#2E4252',
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						fontSize="1rem"
						color="#fff"
						fontWeight="700"
						textAlign="center"
					>
						Referência em Qualidade e Expansão
					</Typography>
					<Typography
						color="#fff"
						lineHeight="1.5rem"
						textAlign="initial"
						pt={2}
						pb={2}
						pl={2}
						pr={2}
					>
						A Olá Telecom é uma empresa no seguimento de Internet,
						com experiência de 10 anos na área. Possuímos técnicos
						especializados em cada setor, com comprometimento com o
						trabalho. Possuímos a tecnologia de Fibra Óptica, Via
						Rádio, mantendo sempre qualidade e velocidade em nossa
						conexão. Contribuirmos de forma positiva em cada
						necessidade, com serviços realizados de acordo com as
						normas de qualidade que prezamos dentro da nossa
						empresa, incluindo garantia de todos os serviços
						prestados.
					</Typography>
				</Grid>

				<Grid
					item
					xs={5}
					sm={6}
					md={6}
					sx={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						position: 'relative',
						left: -25,
					}}
				>
					<Box component="img" src={Router} width="110%" />
				</Grid>
			</Grid>

			<Footer />
		</Box>
	);
};
export default EmpresaSm;
