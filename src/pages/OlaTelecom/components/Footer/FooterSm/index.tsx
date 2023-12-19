import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicModal } from '../../Modal';

const FooterSm = () => {
	const [open, setOpen] = useState(false);

	const navigate = useNavigate();
	const handleScrollBlog = () => {
		const url = window.location.href;

		if (url !== '/ola-telecom') {
			navigate('/ola-telecom');
		}
		const blog = document.getElementById('blog');

		blog?.scrollIntoView({ behavior: 'smooth' });
	};

	const handleEmpresa = () => {
		navigate('/ola-telecom-empresa');
	};

	const handleContato = () => {
		setOpen(true);
	};

	return (
		<Box
			component="div"
			width="100%"
			p={5}
			sx={{
				background: '#294767',
			}}
		>
			<Grid
				container
				spacing={{ xs: 1, md: 3 }}
				columns={{ xs: 1, sm: 8, md: 12 }}
				pt={2}
				display="flex"
				alignItems="start"
				id="contato"
			>
				<Grid
					item
					xs={1}
					sm={4}
					md={4}
					display="flex"
					justifyContent="center"
					alignItems="start"
					flexDirection="column"
					gap={1}
				>
					<Typography component="h1" variant="h5" color="#fff">
						INSTITUCIONAL
					</Typography>
					<Typography
						component="button"
						variant="subtitle1"
						color="#fff"
						onClick={handleScrollBlog}
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
						}}
					>
						BLOG
					</Typography>
					<Typography
						component="button"
						variant="subtitle1"
						color="#fff"
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
						}}
						onClick={handleEmpresa}
					>
						QUEM SOMOS
					</Typography>
					<Typography
						component="button"
						variant="subtitle1"
						color="#fff"
						onClick={handleContato}
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
						}}
					>
						CONTATO
					</Typography>
					<Typography
						component="button"
						variant="subtitle1"
						color="#fff"
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
						}}
					>
						<a
							href="https://ixc.olanet.com.br/central_assinante_web/login"
							target="_blank"
							rel="noreferrer"
							style={{ textDecoration: 'none', color: '#fff' }}
						>
							CENTRAL DO CLIENTE
						</a>
					</Typography>
					<Typography
						component="button"
						variant="subtitle1"
						color="#fff"
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
						}}
						onClick={() =>
							navigate('/ola-telecom-trabalhe-conosco')
						}
					>
						TRABALHE CONOSCO
					</Typography>
					<Typography
						component="text"
						pl={1}
						variant="subtitle1"
						color="#fff"
						sx={{
							background: 'transparent',
							border: 'none',
						}}
					>
						atendimento@olanet.com.br
					</Typography>
					<Typography
						component="text"
						pl={1}
						variant="subtitle1"
						color="#fff"
						sx={{
							background: 'transparent',
							border: 'none',
						}}
					>
						financeiro@olanet.com.br
					</Typography>
				</Grid>

				<Grid
					item
					xs={1}
					sm={4}
					md={4}
					display="flex"
					justifyContent="center"
					alignItems="flex-start"
					flexDirection="column"
					gap={2}
					mt={8}
				>
					<Typography component="h1" variant="h5" color="#fff">
						ATENDIMENTO
					</Typography>
					<Typography
						component="text"
						variant="subtitle1"
						color="#fff"
						textAlign="initial"
					>
						<span style={{ fontSize: '1.2rem' }}>Assis - SP</span>
						<br />
						Rua São Paulo, 308 - Centro
						<br />
						Fixo/Whatsapp (18) 3209-1200
					</Typography>
					<Typography
						component="text"
						variant="subtitle1"
						color="#fff"
						textAlign="initial"
					>
						<span style={{ fontSize: '1.2rem' }}>
							Palmital - SP
						</span>
						<br />
						Rua Ver. Clóvis de Camargo Bueno, 257 - Centro
						<br />
						Fixo/Whatsapp (18) 3209-1200
					</Typography>
					<Typography
						component="text"
						variant="subtitle1"
						color="#fff"
						textAlign="initial"
					>
						<span style={{ fontSize: '1.2rem' }}>
							Paraguaçu Paulista - SP
						</span>
						<br />
						Avenida Brasil, 410 - Centro
						<br />
						Fixo/Whatsapp (18) 3209-1200
					</Typography>
					<Typography
						component="text"
						variant="subtitle1"
						color="#fff"
						textAlign="initial"
					>
						<span style={{ fontSize: '1.2rem' }}>Tarumã - SP</span>
						<br />
						Avenida das Orquídeas, 318 - Centro
						<br />
						Fixo/Whatsapp (18) 3209-1200
					</Typography>
					<Typography
						component="text"
						variant="subtitle1"
						color="#fff"
						textAlign="initial"
					>
						<span style={{ fontSize: '1.2rem' }}>
							Pedrinhas Paulista - SP
						</span>
						<br />
						Avenida Brasil, 1519 - Centro
						<br />
						Fixo/Whatsapp (18) 3209-1200
					</Typography>
					<Typography
						component="text"
						variant="subtitle1"
						color="#fff"
						textAlign="initial"
					>
						<span style={{ fontSize: '1.2rem' }}>
							Florínea - SP
						</span>
						<br />
						Prefeito José Alferes Filho, 395 - Centro
						<br />
						Fixo/Whatsapp (18) 3209-1200
					</Typography>
					<Box width="100%" mt={2} display="flex" alignItems="center">
						<IconButton
							href="https://www.facebook.com/olatelecom"
							aria-label="facebook"
							color="primary"
							sx={{
								'&:hover': {
									color: '#ffde59',
								},
							}}
						>
							<FacebookIcon
								aria-label="Facebook"
								fontSize="medium"
							/>
							<Typography
								component="p"
								padding="0 0.3rem"
								color="#fff"
								fontSize="0.8rem"
								textAlign="end"
							>
								Facebook
							</Typography>
						</IconButton>
						<IconButton
							href="https://www.instagram.com/olatelecom/"
							aria-label="instagram"
							color="warning"
							sx={{
								'&:hover': {
									color: '#ffde59',
								},
							}}
						>
							<InstagramIcon
								aria-label="Instagram"
								fontSize="medium"
							/>
							<Typography
								component="p"
								padding="0 0.3rem"
								color="#fff"
								fontSize="0.8rem"
								textAlign="end"
							>
								Instagram
							</Typography>
						</IconButton>
						<IconButton
							href="https://www.google.com/maps/place/Ol%C3%A1+Telecom+-+Assis/@-22.6677386,-50.4210467,10z/data=!4m22!1m13!4m12!1m4!2m2!1d-49.8532352!2d-22.9769216!4e1!1m6!1m2!1s0x94953987221ca6f1:0x760a805f3977fd15!2solatelecom!2m2!1d-50.4209155!2d-22.667736!3m7!1s0x94953987221ca6f1:0x760a805f3977fd15!8m2!3d-22.667736!4d-50.4209155!9m1!1b1!16s%2Fg%2F1ptyq25mq?entry=ttu"
							aria-label="Google"
							color="error"
							sx={{
								'&:hover': {
									color: '#ffde59',
								},
							}}
						>
							<GoogleIcon aria-label="Google" fontSize="medium" />
							<Typography
								component="p"
								padding="0 0.3rem"
								color="#fff"
								fontSize="0.8rem"
								textAlign="end"
							>
								Nos avalie
							</Typography>
						</IconButton>
					</Box>
				</Grid>
			</Grid>
			<BasicModal open={open} setOpen={setOpen} />
		</Box>
	);
};

export default FooterSm;
