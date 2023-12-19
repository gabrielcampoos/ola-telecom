import {
	Box,
	Button,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import BannerGradient from '../../../../../assets/images/banner-gradient.png';
import BannerLayer from '../../../../../assets/images/banner-layer.png';
import BannerSm from './part-1-sm';

const Banner = () => {
	const theme = useTheme();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<BannerSm />
				</>
			)) || (
				<>
					<Box
						width="100%"
						height="675px"
						display="flex"
						position="relative"
						zIndex={2}
						sx={{
							backgroundImage: `url(${BannerGradient})`,
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
								width="50%"
								display="flex"
								alignItems="center"
								justifyContent="center"
								flexDirection="column"
								color="#fff"
								zIndex={4}
								lineHeight="5rem"
							>
								<Typography
									fontSize="2.8rem"
									fontWeight="500"
									pl={5}
									pt="4rem"
								>
									_CONECTANDO <br />
								</Typography>

								<span
									style={{
										fontSize: '5rem',
										fontWeight: '700',
										textAlign: 'center',
									}}
								>
									VOCÊ AO MUNDO!
								</span>
								<Box mt="4rem">
									<Button
										sx={{
											width: '130px',
											p: 1,
											borderRadius: 8,
											color: '#fff',
											fontSize: '1rem',
											fontWeight: '700',
											background: '#AD89E5',
											'&:hover': {
												background: ' #0EC6E5',
											},
										}}
									>
										<a
											href="https://api.whatsapp.com/send?phone=551832091200&text=Oi!%20Eu%20quero%20assinar%20esse%20plano%20de%20150Mb"
											style={{ textDecoration: 'none' }}
										>
											ASSINE JÁ!
										</a>
									</Button>
								</Box>
							</Box>

							<Box
								width="50%"
								height="675px"
								display="flex"
								alignItems="center"
								justifyContent="center"
								pt={8}
								position="relative"
								right="11rem"
								top="0.3rem"
							>
								<img src={BannerLayer} />
							</Box>
						</Container>
					</Box>
				</>
			)}
		</>
	);
};

export default Banner;
