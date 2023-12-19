import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import SpeedLogo from '../../../../assets/images/speed.png';
import VantagensSm from './VantagensSm';

const Vantagens = () => {
	const theme = useTheme();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<VantagensSm />
				</>
			)) || (
				<>
					<Box
						component="div"
						id="vantagens"
						width="100%"
						pb={10}
						sx={{
							background: '#294767',
						}}
					>
						<Grid
							container
							spacing={{ xs: 2, md: 4 }}
							columns={{ xs: 4, sm: 4, md: 20 }}
							display="flex"
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
							gap={5}
							pt={5}
						>
							<Grid
								item
								xs={12}
								md={12}
								display="flex"
								justifyContent="center"
								alignItems="center"
								flexDirection="column"
								borderBottom="1px solid #fff"
								width="50%"
							>
								<Typography
									fontSize="3rem"
									color="#fff"
									textAlign="center"
								>
									VANTAGENS DE <br />
									NOSSOS SERVIÇOS
								</Typography>
							</Grid>

							<Grid
								item
								xs={12}
								md={12}
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								flexDirection="row"
							>
								<Typography
									width="20rem"
									fontSize="2rem"
									color="#fff"
									textAlign="center"
									mr={7}
									sx={{
										background: '#7CC2DE',
										borderRadius: '3rem',
										fontWeight: '700',
										cursor: 'default',
									}}
								>
									VELOCIDADE 100%
								</Typography>
								<Typography
									width="20rem"
									fontSize="2rem"
									color="#fff"
									textAlign="center"
									mr={7}
									sx={{
										background: '#7CC2DE',
										borderRadius: '3rem',
										fontWeight: '700',
										cursor: 'default',
									}}
								>
									TECNOLOGIA 100%
								</Typography>
								<Typography
									width="20rem"
									fontSize="2rem"
									color="#fff"
									textAlign="center"
									mr={6}
									sx={{
										background: '#7CC2DE',
										borderRadius: '3rem',
										fontWeight: '700',
										cursor: 'default',
									}}
								>
									QUALIDADE 100%
								</Typography>
							</Grid>

							<Grid
								item
								xs={12}
								md={12}
								display="flex"
								justifyContent="center"
								alignItems="center"
								flexDirection="column"
								borderBottom="1px solid #fff"
								width="50%"
							>
								<Typography
									fontSize="3rem"
									color="#fff"
									textAlign="center"
									lineHeight="3rem"
									mb={3}
								>
									TESTE A <br />
									SUA CONEXÃO
								</Typography>
								<Typography
									fontSize="1rem"
									color="#fff"
									textAlign="center"
									pt={3}
								>
									DESCUBRA QUE A OLÁ TELECOM É A SUA MELHOR
									OPÇÃO
								</Typography>
							</Grid>
							<Grid
								item
								xs={12}
								md={12}
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								flexDirection="row"
							>
								<Button
									sx={{
										width: '100%',
									}}
								>
									<a
										href="https://fast.com/pt/"
										target="_blank"
										style={{ textDecoration: 'none' }}
									>
										<img src={SpeedLogo} width="50%" />
										<Typography
											color="#fff"
											fontSize="2rem"
										>
											SPEED TEST
										</Typography>
									</a>
								</Button>
								<Button
									sx={{
										width: '100%',
									}}
								>
									<a
										href="https://www.rjnet.com.br/"
										target="_blank"
									>
										<img
											src="https://olanet.com.br/wp-content/uploads/2023/09/logo_rjnet.svg"
											width="55%"
										/>
									</a>
								</Button>
							</Grid>
						</Grid>
					</Box>
				</>
			)}
		</>
	);
};

export default Vantagens;
