import { Box, Grid, Typography } from '@mui/material';

import Router from '../../assets/images/router.png';
import ResponsiveAppBar from '../OlaTelecom/components/AppBar';
import Footer from '../OlaTelecom/components/Footer';

const Empresa = () => {
	return (
		<>
			<ResponsiveAppBar />
			<Box
				width="100%"
				height="100vh"
				sx={{
					background: '#f98810',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Grid
					container
					spacing={{ xs: 4, md: 3 }}
					columns={{ xs: 1, sm: 8, md: 12 }}
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					width="100%"
					height="100%"
				>
					<Grid
						item
						xs={2}
						sm={3}
						md={6}
						sx={{
							background: '#2E4252',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box width="70%" padding="0 2rem">
							<Typography
								component="h1"
								variant="h4"
								color="#fff"
								fontWeight="700"
								whiteSpace="nowrap"
							>
								Referência em Qualidade e Expansão
							</Typography>
							<Typography
								color="#fff"
								lineHeight="2rem"
								textAlign="justify"
								pt={7}
								pb={7}
							>
								A Olá Telecom é uma empresa no seguimento de
								Internet, com experiência de 10 anos na área.
								Possuímos técnicos especializados em cada setor,
								com comprometimento com o trabalho. Possuímos a
								tecnologia de Fibra Óptica, Via Rádio, mantendo
								sempre qualidade e velocidade em nossa conexão.
								Contribuirmos de forma positiva em cada
								necessidade, com serviços realizados de acordo
								com as normas de qualidade que prezamos dentro
								da nossa empresa, incluindo garantia de todos os
								serviços prestados.
							</Typography>
						</Box>
						<Grid
							item
							xs={2}
							sm={3}
							md={6}
							sx={{
								background: '#2E4252',
							}}
						>
							<Box component="img" src={Router} width="150%" />
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</>
	);
};
export default Empresa;
