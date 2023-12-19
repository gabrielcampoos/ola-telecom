import { Box, Grid, Typography } from '@mui/material';

import Atendente from '../../../../../assets/images/atendente-bg.jpg';
import Boleto from '../../../../../assets/images/boleto-bg.jpg';
import Provedor from '../../../../../assets/images/provedor-bg.jpg';

const GridInfoSm = () => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Grid
				container
				spacing={{ xs: 3, md: 4 }}
				columns={{ xs: 3, sm: 4, md: 12 }}
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
					mb={2}
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
							fontSize="1.5rem"
							color="white"
							fontWeight="700"
							textAlign="center"
						>
							O Melhor Provedor
						</Typography>
						<Typography
							fontSize="0.8rem"
							color="white"
							component="p"
							className="visible"
							textAlign="center"
						>
							Assista Filmes, Séries, jogue e acesse <br /> suas
							redes sociais, SEM LIMITES!
						</Typography>
					</Grid>
				</Grid>

				<Grid
					xs={2}
					sm={4}
					md={3}
					height="300px"
					mb={2}
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
							fontSize="1.5rem"
							color="white"
							fontWeight="700"
							textAlign="center"
							pt={20}
						>
							O Melhor Atendimento
						</Typography>
						<Typography
							fontSize="0.8rem"
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
					mb={2}
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
							fontSize="1.5rem"
							color="white"
							fontWeight="700"
							textAlign="center"
							pt={15}
						>
							2a Via de seus Boletos
						</Typography>
						<Typography
							fontSize="0.8rem"
							color="white"
							component="p"
							className="visible"
							textAlign="center"
						>
							Baixe a segunda via do seu boleto para
							<br />
							manter-se sempre com o melhor provedor da região.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default GridInfoSm;
