import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
	Container,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../../../assets/images/douglascoiffeur-logo.png';
import FooterMobile from './FooterMobile';

export default function Footer() {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			{(!smDown && (
				<Box
					sx={{
						flexGrow: 1,
						backgroundColor: '#000',
						// height: '40vh',
					}}
				>
					<Container>
						<AppBar
							position="static"
							sx={{
								backgroundColor: '#000',
								boxShadow: 'none',
								paddingTop: '4rem',
								textAlign: 'center',
							}}
						>
							<Toolbar
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'space-between',
									// height: '20vh',
									zIndex: '99999',
								}}
							>
								<Box width="100%" paddingBottom="3rem">
									<img
										src={Logo}
										alt="Logo Barbearia"
										width="20%"
									/>
								</Box>

								<Box
									width="100%"
									sx={{
										display: 'flex',
										justifyContent: 'space-evenly',
										textAlign: 'center',
									}}
								>
									<IconButton
										href="https://www.facebook.com/douglascoiffeurr/"
										aria-label="facebook"
										color="inherit"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										<FacebookIcon
											aria-label="Facebook"
											fontSize="large"
										/>
										<Typography
											component="p"
											padding="0 0.3rem"
											color="#fff"
											fontSize="1rem"
											textAlign="end"
										>
											Facebook
										</Typography>
									</IconButton>
									<IconButton
										href="https://www.instagram.com/douglascoiffeursp/"
										aria-label="instagram"
										color="inherit"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										<InstagramIcon
											aria-label="Instagram"
											fontSize="large"
										/>
										<Typography
											component="p"
											padding="0 0.3rem"
											color="#fff"
											fontSize="1rem"
											textAlign="end"
										>
											Instagram
										</Typography>
									</IconButton>
									<IconButton
										href="https://www.google.com/maps/place/Barbearia+Dougla's+Coiffeur/@-22.6515273,-50.417302,17z/data=!4m8!3m7!1s0x949539104f13fd7d:0xf3996aef55392f08!8m2!3d-22.6515273!4d-50.417302!9m1!1b1!16s%2Fg%2F11g0lf7yt8?entry=ttu"
										aria-label="Google"
										color="inherit"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										<GoogleIcon
											aria-label="Google"
											fontSize="large"
										/>
										<Typography
											component="p"
											padding="0 0.3rem"
											color="#fff"
											fontSize="1rem"
											textAlign="end"
										>
											Nos avalie
										</Typography>
									</IconButton>
								</Box>
							</Toolbar>
						</AppBar>
						<Box
							width="100%"
							display="flex"
							alignItems="center"
							justifyContent="space-between"
							padding="2rem 0 2rem 0"
						>
							<Typography
								width="50%"
								component="p"
								paddingTop="0.9rem"
								color="#fff"
								fontSize="1rem"
							>
								Copyright © Barbearia Douglet&apos;s Barbearia.
								Todos os Direitos Reservados.
							</Typography>

							<Typography
								width="50%"
								component="p"
								// padding="3rem 0.1rem"
								color="#fff"
								fontSize="0.8rem"
								textAlign="end"
							>
								Desenvolvido por:{' '}
								<span
									style={{
										backgroundColor: '#000',
										borderRadius: '3rem',
										padding: '0.1rem',
										color: '#fff',
									}}
								>
									Gabriel Campos Alves
								</span>
							</Typography>
						</Box>
					</Container>
				</Box>
			)) || <FooterMobile />}
		</>
	);
}
