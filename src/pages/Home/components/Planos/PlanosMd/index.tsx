import { Box, Container, Typography } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
	children: React.ReactNode;
	transition: string;
}

const PlanosMd = () => {
	const Section: React.FC<Props> = ({ children, transition }) => {
		const ref = useRef(null);
		const isInView = useInView(ref, { once: true });

		return (
			<section
				ref={ref}
				style={{
					transform: isInView ? 'none' : 'translateY(-200px)',
					opacity: isInView ? 1 : 0,
					transition: transition,
				}}
			>
				{children}
			</section>
		);
	};

	return (
		<Box
			component="main"
			id="PlanosMd"
			width="100%"
			height="100%"
			sx={{
				backgroundColor: '#000',
				padding: '3rem 0',
			}}
		>
			<Container
				component="main"
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
				}}
			>
				<Box
					width="100%"
					height="100%"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					// gap={5}
					paddingTop="2rem "
				>
					<Section transition="all 2s 0.6s">
						<Typography
							component="h1"
							variant="h2"
							color="#fff"
							fontSize={70}
							lineHeight="3.5rem"
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							zIndex="1"
						>
							{' '}
							CONHEÇA <br />
						</Typography>
					</Section>

					<Section transition="all 1s 0.6s">
						<Typography
							component="h1"
							variant="h2"
							color="#fff"
							fontSize={70}
							lineHeight="3.5rem"
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							zIndex="1"
						>
							NOSSA <br />
						</Typography>
					</Section>
					<Section transition="all 0.7s 0.6s">
						<Typography
							component="h1"
							variant="h2"
							color="#fff"
							fontSize={70}
							lineHeight="3.5rem"
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							zIndex="1"
							marginBottom="3rem"
						>
							<span style={{ color: '#f6b332' }}>ASSINATURA</span>
						</Typography>
						<Typography
							component="p"
							color={'whitesmoke'}
							marginBottom="3rem"
						>
							Descubra a liberdade de personalizar seu plano
							mensal na nossa barbearia! Com os nossos planos
							personalizados, você tem o poder de escolher os
							serviços que deseja aproveitar a cada mês. Selecione
							entre uma variedade de opções, desde cortes de
							cabelo e barba, até tratamentos de spa e serviços
							exclusivos. Montar o seu plano é fácil e flexível, e
							o melhor de tudo, você receberá um valor especial e
							sob medida para suas preferências. Experimente a
							comodidade e a conveniência de um plano de
							assinatura.
						</Typography>
					</Section>
					<Section transition="all 2s 0.6s">
						<Box
							component="button"
							width="100%"
							height="11%"
							border="none"
							borderRadius="0.5rem"
							sx={{ backgroundColor: '#f6b332' }}
						>
							<a
								href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre os planos.&type=phone_number&app_absent=0"
								style={{
									textDecoration: 'none',
								}}
							>
								<Typography
									color={'HighlightText'}
									fontFamily="Khand, sans-serif"
									fontWeight={700}
									fontSize="2.3rem"
									letterSpacing="0.1rem"
								>
									CONHECER PLANOS
								</Typography>
							</a>
						</Box>
					</Section>
				</Box>
			</Container>
		</Box>
	);
};

export default PlanosMd;
