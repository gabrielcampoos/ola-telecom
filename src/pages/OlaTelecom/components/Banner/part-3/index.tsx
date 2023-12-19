import {
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import PersonaBgWomam from '../../../../../assets/images/persona-3-bg.jpg';
import PersonaWomam from '../../../../../assets/images/persona-3.png';
import BannerPersonaWomamSm from './part-3-sm';

const BannerPersonaWomam = () => {
	const theme = useTheme();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<BannerPersonaWomamSm />
				</>
			)) || (
				<>
					<Box
						width="100%"
						height="675px"
						display="flex"
						position="relative"
						pt={5}
						zIndex={2}
						sx={{
							backgroundImage: `url(${PersonaBgWomam})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					>
						<Container
							sx={{
								pt: 1,
								position: 'relative',
								display: 'flex',
							}}
						>
							<Box
								width="10%"
								display="flex"
								alignItems="center"
								flexDirection="column"
								justifyContent="center"
								color="#fff"
								zIndex={4}
								pb={20}
							>
								<Typography
									fontSize="4rem"
									fontWeight="700"
									noWrap
									position="relative"
									left="15rem"
									bottom="4rem"
								>
									Viva a experiência <br />
									de uma internet <br />
									ULTRA-RÁPIDA
								</Typography>
							</Box>

							<Box
								width="100%"
								height="100%"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<Box
									component="img"
									src={PersonaWomam}
									height="100%"
									position="absolute"
								/>
							</Box>
						</Container>
					</Box>
				</>
			)}
		</>
	);
};

export default BannerPersonaWomam;
