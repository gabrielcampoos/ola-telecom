import InstagramIcon from '@mui/icons-material/Instagram';
import {
	Box,
	Button,
	CardActionArea,
	Container,
	Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Logo from '../../../../../assets/images/douglascoiffeur-logo.png';
import Carousel from '../../Carousel';
import EstruturaMd from '../../Estrutura/EstruturaMd';

const HistoriaMd = () => {
	return (
		<Box component="main" bgcolor="#000">
			<Container
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
						NOSSA HISTÓRIA
					</Typography>
				</Box>
				<Box>
					<Typography
						component="p"
						color={'whitesmoke'}
						textAlign="justify"
						mb={5}
					>
						Bem-vindo à nossa barbearia! Desde que abrimos nossas
						portas em 2018, estamos empenhados em proporcionar uma
						experiência excepcional de cuidados masculinos. Nosso
						compromisso com a excelência nos levou a buscar
						constantemente elevar o padrão dos nossos serviços a
						cada ano. Aqui na nossa barbearia, não nos contentamos
						com o status quo. Nossa missão é ser a referência
						definitiva na cidade quando se trata de serviços de
						barbearia e cuidados pessoais para homens. Para alcançar
						esse objetivo, nos esforçamos para oferecer cortes e
						barbas impecáveis, estilos inovadores e um atendimento
						personalizado que supera as expectativas dos nossos
						clientes. Cada visita à nossa barbearia é uma
						oportunidade para nos aprimorarmos e crescermos junto
						com a nossa comunidade. Apreciamos e valorizamos a
						confiança que nossos clientes depositam em nós, e é por
						isso que trabalhamos incansavelmente para garantir que
						cada cliente saia satisfeito e confiante com sua
						aparência. Nossa equipe de barbeiros altamente
						qualificados e dedicados. <br />
						<br />
						Nossa equipe está pronta para oferecer os melhores
						serviços e cuidados, utilizando técnicas modernas e
						produtos de alta qualidade.
						<br />
						<br />
						Venha fazer parte da nossa jornada de crescimento e
						descubra por que somos mais do que uma simples
						barbearia. Somos uma comunidade de homens que valorizam
						a aparência e o bem-estar, e estamos ansiosos para
						recebê-lo com os braços abertos. Junte-se a nós e
						experimente a diferença de uma barbearia que se esforça
						continuamente para subir de nível e se destacar como
						referência na cidade.
					</Typography>
				</Box>

				{/* CARD INSTAGRAM */}

				<Card
					sx={{
						width: '100%',
						backgroundColor: '#f6b332',
						padding: '0.2rem 0.2rem',
						mb: '3rem',
					}}
				>
					<Container
						disableGutters
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							border: '0.15rem solid #000',
						}}
					>
						<CardActionArea sx={{ marginBottom: '3rem' }}>
							<CardContent
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '1rem',
									fontFamily: 'Khand, sans-serif',
									fontWeight: '700',
								}}
							>
								{/* <Typography
									gutterBottom
									color={'HighlightText'}
									fontFamily="Khand, sans-serif"
									fontWeight={700}
									fontSize="2.3rem"
									letterSpacing="0.1rem"
									textAlign="center"
								>
									PLUS
								</Typography> */}
								<Button color="inherit">
									<InstagramIcon
										sx={{
											fontSize: '5rem',
										}}
									/>
								</Button>
								<Typography
									gutterBottom
									fontSize="1.3rem"
									component="div"
									textAlign="center"
									whiteSpace="nowrap"
									fontWeight="500"
									fontFamily="Khand, sans-serif"
								>
									Acompanhe a{' '}
									<span style={{ fontWeight: '700' }}>
										Douglet&apos;s Barbearia
									</span>{' '}
									pelo <br />
									Instagram.
								</Typography>

								<a
									href="https://www.instagram.com/douglascoiffeursp/"
									style={{
										textDecoration: 'none',
										fontWeight: '500',
										fontFamily: 'Khand, sans-serif',
									}}
								>
									<Typography
										component="button"
										bgcolor="transparent"
										border="none"
										textAlign="center"
										display="flex"
										alignItems="center"
										justifyContent="center"
										fontWeight="500"
										fontFamily="Khand, sans-serif"
										fontSize="1.2rem"
									>
										<Box width="5%">
											<img
												width="100%"
												alt="Logo Douglet's Barbearia"
												src={Logo}
												style={{
													borderRadius: '2rem',
												}}
											/>
										</Box>

										<Box width="35%">
											Nos siga no instagram.
										</Box>
									</Typography>
								</a>
							</CardContent>
						</CardActionArea>
						<Carousel />
					</Container>
				</Card>
				<EstruturaMd />
			</Container>
		</Box>
	);
};

export default HistoriaMd;
