import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import Logo from '../../../../assets/images/douglascoiffeur-logo.png';
import ListaImagens from '../ListaImagens';
import EstruturaMd from './EstruturaMd';
import EstruturaMobile from './EstruturaMobile';

const Estrutura = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<>
			{(smDown && (
				<>
					<EstruturaMobile />
				</>
			)) ||
				(mdDown && (
					<>
						<EstruturaMd />
					</>
				)) || (
					<>
						<Box component="main" bgcolor="#000">
							<Container
								disableGutters
								component="section"
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Box
									component="button"
									width="100%"
									height="11%"
									border="none"
									borderRadius="0.5rem"
									zIndex="999999999999"
									position="relative"
									mt={5}
									mb={5}
									sx={{
										backgroundColor: '#f6b332',
									}}
								>
									<Box
										width="100%"
										height="100%"
										border="0.15rem solid #f6b332"
										borderRadius="0.5rem"
										position="absolute"
										top="0.2rem"
										sx={{
											backgroundColor: 'transparent',
										}}
									></Box>
									<Typography
										width="100%"
										color={'HighlightText'}
										fontFamily="Khand, sans-serif"
										fontWeight={700}
										fontSize="2.3rem"
										letterSpacing="0.1rem"
									>
										ESTRUTURA
									</Typography>
								</Box>
								<Box>
									<Typography
										component="p"
										color={'whitesmoke'}
										textAlign="justify"
										mb={5}
									>
										Bem-vindo à nossa barbearia, onde o
										estilo vintage encontra a modernidade em
										perfeita harmonia! Nossa estrutura foi
										cuidadosamente projetada para
										proporcionar a você uma experiência
										única de cuidados pessoais.
										<br />
										<br />
										Ao entrar em nosso espaço, você será
										imerso em um ambiente acolhedor e
										descontraído. As cores neutras e o
										design vintage moderno criam uma
										atmosfera elegante e sofisticada,
										tornando a sua visita não apenas um
										corte de cabelo, mas uma verdadeira
										experiência.
										<br />
										<br />
										Nosso ambiente climatizado garante o
										máximo conforto em todas as estações,
										para que você se sinta relaxado e à
										vontade durante todo o serviço. E para
										tornar sua experiência ainda mais
										agradável, oferecemos um café moído na
										hora para os amantes dessa bebida
										estimulante, além de uma cerveja gelada
										para quem prefere um brinde especial
										durante o tratamento.
										<br />
										<br />
										Nossas cadeiras de barbeiro de altíssima
										qualidade foram selecionadas para
										garantir o máximo de conforto e precisão
										em cada corte e barba. Nossos barbeiros
										altamente habilidosos estão prontos para
										transformar sua aparência e realçar sua
										melhor versão.
										<br />
										<br />
										Venha desfrutar de uma recepção calorosa
										em nosso espaço aconchegante e desfrute
										de uma experiência de barbearia que
										transcende o simples ato de cuidar da
										aparência. Aqui, você encontrará uma
										combinação perfeita entre o passado e o
										presente, onde a tradição e a
										modernidade se unem para oferecer a você
										uma experiência verdadeiramente
										memorável. Estamos ansiosos para
										recebê-lo em nossa barbearia e
										compartilhar momentos especiais enquanto
										cuidamos do seu estilo e bem-estar.
									</Typography>
								</Box>
							</Container>
							<ListaImagens />
							<Container
								component="section"
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Box width="100%" padding="0 1rem" m="1rem 0">
									<img
										width="165px"
										alt="Logo Douglet's Barbearia"
										src={Logo}
									/>
								</Box>
								<Box
									width="100%"
									display="flex"
									alignItems="center"
									padding="0 1rem"
									mb={2}
								>
									<LocationOnIcon
										htmlColor="#fff"
										fontSize="large"
									/>
									<Typography
										component="p"
										color={'whitesmoke'}
										fontFamily="Khand, sans-serif"
										fontSize="1rem"
										letterSpacing="0.09rem"
										ml={2}
									>
										Douglet&apos;s Barbearia
									</Typography>
								</Box>
								<Box width="100%" padding="0 1.3rem" mb={2}>
									<Typography
										component="p"
										color={'whitesmoke'}
										fontFamily="Khand, sans-serif"
										fontSize="1rem"
										letterSpacing="0.09rem"
									>
										Av. Getúlio Vargas, 295 - Vila Nova
										Santana, Assis - SP, 19807-130
									</Typography>
								</Box>
								<Box
									width="100%"
									display="flex"
									alignItems="center"
									padding="0 1rem"
									mb={2}
								>
									<WhatsAppIcon
										htmlColor="#fff"
										fontSize="large"
									/>
									<Typography
										component="p"
										color={'whitesmoke'}
										fontFamily="Khand, sans-serif"
										fontSize="1rem"
										letterSpacing="0.09rem"
										ml={2}
									>
										(18) 99798-4039
									</Typography>
								</Box>
								<Box
									width="100%"
									display="flex"
									alignItems="center"
									padding="1rem 1rem"
								>
									<FacebookIcon
										htmlColor="#fff"
										fontSize="large"
										sx={{ marginRight: '1rem' }}
									/>
									<InstagramIcon
										htmlColor="#fff"
										fontSize="large"
										sx={{ marginRight: '1rem' }}
									/>
									<LocationOnIcon
										htmlColor="#fff"
										fontSize="large"
									/>
								</Box>
								<Box
									width="100%"
									display="flex"
									alignItems="center"
									justifyContent="space-between"
									padding="1rem 0"
								>
									<Typography
										width="50%"
										component="p"
										paddingTop="1rem"
										color="#fff"
										fontSize="1rem"
									>
										Copyright © Barbearia Douglet&apos;s
										Barbearia. Todos os Direitos Reservados.
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
					</>
				)}
		</>
	);
};

export default Estrutura;
