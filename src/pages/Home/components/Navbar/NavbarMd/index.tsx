import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Container, IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../../../../assets/images/douglascoiffeur-logo.png';
import Aviso from '../../Aviso';

const NavbarMd = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				backgroundColor: '#000',
				height: '20vh',
			}}
		>
			<Container>
				<AppBar
					position="static"
					sx={{
						backgroundColor: '#000',
						width: '100%',
					}}
				>
					<Toolbar
						sx={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '20vh',
							zIndex: '99999',
						}}
					>
						<Box width="25%">
							<img src={Logo} alt="Logo Barbearia" width="100%" />
						</Box>

						<Grid
							container
							spacing={{ xs: 3, md: 5, lg: 50 }}
							columns={{ xs: 5, sm: 15, md: 5, lg: 50 }}
							alignItems="center"
							justifyContent="center"
							textAlign="center"
							// padding="0 2rem"

							// sx={{
							// 	width: '75%',
							// 	display: 'flex',
							// 	justifyContent: 'space-between',
							// 	alignItems: 'center',
							// 	fontFamily: 'Khand, sans-serif',
							// 	fontWeight: '600',
							// 	letterSpacing: '0.09rem',
							// }}
						>
							<Grid item xs={5} sm={5} md={4} lg={12}>
								<Button
									sx={{ padding: '0' }}
									onClick={() => {
										const AssinaturasMd =
											document.getElementById(
												'AssinaturasMd',
											);
										AssinaturasMd?.scrollIntoView();
									}}
								>
									<Typography
										variant="button"
										fontSize="0.7rem"
										color="HighlightText"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'ASSINATURAS'}
									</Typography>
								</Button>
							</Grid>

							<Grid item xs={5} sm={4} md={4}>
								<Button
									onClick={() => {
										const MockupApp =
											document.getElementById(
												'MockupApp',
											);
										MockupApp?.scrollIntoView();
									}}
									sx={{ padding: '0' }}
								>
									<Typography
										variant="button"
										fontSize="0.7rem"
										color="HighlightText"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'BOOKSY'}
									</Typography>
								</Button>
							</Grid>

							<Grid item xs={5} sm={4} md={4}>
								<Button
									onClick={() => {
										const ComoChegarMd =
											document.getElementById(
												'ComoChegarMd',
											);
										ComoChegarMd?.scrollIntoView();
									}}
									sx={{ padding: '0' }}
								>
									<Typography
										variant="button"
										fontSize="0.7rem"
										color="HighlightText"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'UNIDADE'}
									</Typography>
								</Button>
							</Grid>

							<Grid item xs={5} sm={4} md={4}>
								<Button
									onClick={() => {
										const Servicos =
											document.getElementById('Servicos');
										Servicos?.scrollIntoView();
									}}
									sx={{ padding: '0' }}
								>
									<Typography
										variant="button"
										fontSize="0.7rem"
										color="HighlightText"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'SERVIÇOS'}
									</Typography>
								</Button>
							</Grid>

							<Grid item xs={5} sm={4} md={4}>
								<Button
									onClick={() => {
										const Servicos =
											document.getElementById('Servicos');
										Servicos?.scrollIntoView();
									}}
									sx={{ padding: '0' }}
								>
									<Typography
										variant="button"
										fontSize="0.7rem"
										color="HighlightText"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'ESTRUTURAS'}
									</Typography>
								</Button>
							</Grid>

							<Grid item xs={5} sm={4} md={4}>
								<Button
									onClick={() => {
										const MockupApp =
											document.getElementById(
												'MockupApp',
											);
										MockupApp?.scrollIntoView();
									}}
									sx={{
										padding: '0',
									}}
								>
									<Typography
										width="100%"
										variant="button"
										fontSize="0.7rem"
										sx={{
											lineHeight: '3vh',
											textAlign: 'center',
											backgroundColor: '#f6b332',
											color: '#000',
											fontWeight: 'bold',
											borderRadius: '0.5rem',
											'&:hover': {
												color: '#fff',
												backgroundColor:
													'darkslategrey',
												transition:
													'color 0.5s ease-out',
											},
										}}
									>
										{'AGENDAR'}
									</Typography>
								</Button>
							</Grid>
						</Grid>
						<Box
							width="10%"
							// padding="0 2%"
							sx={{
								display: 'flex',
								justifyContent: 'space-around',
							}}
						>
							<IconButton
								href="https://www.facebook.com/douglascoiffeurr/"
								aria-label="facebook"
								color="inherit"
								sx={{
									width: '20%',
									'&:hover': {
										color: '#ffde59',
									},
								}}
							>
								<FacebookIcon />
							</IconButton>
							<IconButton
								href="https://www.instagram.com/douglascoiffeursp/"
								aria-label="instagram"
								color="inherit"
								sx={{
									width: '20%',
									'&:hover': {
										color: '#ffde59',
									},
								}}
							>
								<InstagramIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			</Container>
			<Box
				width="100%"
				height="2vh"
				sx={{
					backgroundColor: 'red',
					zIndex: '2',
					position: 'relative',
				}}
			>
				<Typography
					gutterBottom
					color="whitesmoke"
					fontFamily="Khand, sans-serif"
					fontWeight={700}
					fontSize="0.6rem"
					letterSpacing="0.1rem"
					textAlign="center"
				>
					<Aviso />
				</Typography>
			</Box>
		</Box>
	);
};

export default NavbarMd;
