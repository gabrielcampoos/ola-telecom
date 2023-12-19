import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import Atendente from '../../../../assets/images/atendente-bg.jpg';
import Boleto from '../../../../assets/images/boleto-bg.jpg';
import Provedor from '../../../../assets/images/provedor-bg.jpg';
import GridInfoSm from './GridInfoSm';

const GridInfo = () => {
	const theme = useTheme();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<GridInfoSm />
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, md: 4 }}
						columns={{ xs: 4, sm: 4, md: 12 }}
						display="flex"
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
						pt="3rem"
						pb="3rem"
					>
						<Grid
							xs={2}
							sm={4}
							md={3}
							height="300px"
							mr={4}
							sx={{
								backgroundImage: `url(${Provedor})`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
							}}
							borderRadius={5}
						>
							<Grid
								item
								width="100%"
								height="100%"
								display="flex"
								justifyContent="center"
								alignItems="center"
								flexDirection="column"
								sx={{
									transition: 'transform 0.2s',
									transform: 'translateX(0) ',
									'.visible': {
										visibility: 'hidden',
									},
									'&:hover': {
										transform: 'translateY(-30px) ',
										'.visible': {
											visibility: 'visible',
											transform: 'translateY(30px) ',
										},
									},
								}}
							>
								<Typography
									fontSize="1.8rem"
									color="white"
									fontWeight="700"
									textAlign="center"
								>
									O Melhor Provedor
								</Typography>
								<Typography
									fontSize="1rem"
									color="white"
									component="p"
									className="visible"
									textAlign="center"
								>
									Assista Filmes, Séries, jogue e acesse{' '}
									<br /> suas redes sociais, SEM LIMITES!
								</Typography>
							</Grid>
						</Grid>

						<Grid
							xs={2}
							sm={4}
							md={3}
							height="300px"
							mr={4}
							sx={{
								backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Atendente})`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
							}}
							borderRadius={5}
						>
							<Grid
								item
								width="100%"
								height="100%"
								display="flex"
								justifyContent="center"
								alignItems="center"
								flexDirection="column"
								sx={{
									transition: 'transform 0.2s',
									transform: 'translateX(0) ',
									'.visible': {
										visibility: 'hidden',
									},
									'&:hover': {
										transform: 'translateY(-30px)',
										'.visible': {
											visibility: 'visible',
											transform: 'translateY(30px)',
										},
									},
								}}
							>
								<Typography
									fontSize="1.8rem"
									color="white"
									fontWeight="700"
									textAlign="center"
								>
									O Melhor Atendimento
								</Typography>
								<Typography
									fontSize="1rem"
									color="white"
									component="p"
									className="visible"
									textAlign="center"
								>
									Uma equipe suportada com tecnologia <br />
									multichannel preparada para atender todas as
									<br /> suas dúvidas.
								</Typography>
							</Grid>
						</Grid>

						<Grid
							xs={2}
							sm={4}
							md={3}
							height="300px"
							mr={4}
							sx={{
								backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Boleto})`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
							}}
							borderRadius={5}
						>
							<Grid
								item
								width="100%"
								height="100%"
								display="flex"
								justifyContent="center"
								alignItems="center"
								flexDirection="column"
								sx={{
									transition: 'transform 0.2s',
									transform: 'translateX(0) ',
									'.visible': {
										visibility: 'hidden',
									},
									'&:hover': {
										transform: 'translateY(-30px)',
										'.visible': {
											visibility: 'visible',
											transform: 'translateY(30px)',
										},
									},
								}}
							>
								<Typography
									fontSize="1.8rem"
									color="white"
									fontWeight="700"
									textAlign="center"
								>
									2a Via de seus Boletos
								</Typography>
								<Typography
									fontSize="1rem"
									color="white"
									component="p"
									className="visible"
									textAlign="center"
								>
									Baixe a segunda via do seu boleto para
									<br />
									manter-se sempre com o melhor provedor da
									região.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
};

export default GridInfo;
