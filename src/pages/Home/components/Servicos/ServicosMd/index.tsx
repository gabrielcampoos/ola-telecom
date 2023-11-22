import {
	Box,
	Button,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import NewBannerInterior from '../../../../../assets/images/new-banner-interior.jpg';

interface Props {
	children: React.ReactNode;
	translate: string;
}

const ServicosMd = () => {
	const Section: React.FC<Props> = ({ children, translate }) => {
		const ref = useRef(null);
		const isInView = useInView(ref, { once: true });

		if (translate === 'Typography') {
			translate = 'translateY(-200px)';
		}

		if (translate === 'Button') {
			translate = 'translateY(70px)';
		}

		return (
			<section
				ref={ref}
				style={{
					transform: isInView ? 'none' : translate,
					opacity: isInView ? 1 : 0,
					transition: 'all 2s 0.6s',
				}}
			>
				{children}
			</section>
		);
	};

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<Box
				id="ServicosMd"
				component="main"
				sx={{
					backgroundColor: '#000',
					width: '100%',
				}}
			>
				<Container
					disableGutters
					component="section"
					sx={{
						width: '100%',
						// height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						border: 'none',
					}}
				>
					<Box width="100%" component="div">
						<Section translate="Typography">
							<Typography
								component="h1"
								color="#fff"
								fontSize="4rem"
								lineHeight="3rem"
								fontFamily="Khand, sans-serif"
								fontWeight={900}
								zIndex="1"
								paddingTop="20rem"
								paddingLeft="1rem"
								position="absolute"
							>
								CORTE DE CABELO <br />
								<span
									style={{
										color: '#f6b332',
									}}
								>
									BARBA
								</span>
								<br />
								BIGODE <br />
								<span
									style={{
										color: '#f6b332',
									}}
								>
									E UMA EXPERIÊNCIA <br />
									ÚNICA
								</span>
							</Typography>
						</Section>
						<Box height="950px">
							<img
								src={NewBannerInterior}
								width="100%"
								height="100%"
								style={{ opacity: '50%' }}
							/>
						</Box>
					</Box>
					<Box width="100%" component="div">
						<Section translate="Typography">
							<Button
								sx={{
									zIndex: '1',
									backgroundColor: '#f6b332',
									// padding: '1rem 6rem',
									left: '1rem',
									top: '-1rem',
									'&:hover': {
										color: '#fff',
										backgroundColor: 'darkslategrey',
										transition: 'color 0.5s ease-out',
									},
								}}
							>
								<a
									href="https://booksy.com/pt-br/instant-experiences/widget/109844?instant_experiences_enabled=true&ig_ix=true&is_fb=1&fbclid=IwAR36ITBFrC5OklYW2VL4KAw8PHKB9vOozRh7pMCfQ6FE4T13569xYHLr-Mc"
									style={{
										textDecoration: 'none',
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontSize: '2rem',
										fontWeight: '600',
										letterSpacing: '0.1rem',
									}}
								>
									CONHEÇA TODOS OS SERVIÇOS
								</a>
							</Button>
						</Section>
					</Box>
				</Container>
			</Box>
			<Box
				component="div"
				width="100%"
				height="10vh"
				sx={{
					backgroundColor: '#000',
				}}
			></Box>
		</>
	);
};
export default ServicosMd;
