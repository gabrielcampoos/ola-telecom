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

import Local from '../../../../../assets/images/local-original.jpeg';
import Mapa from '../../../../../assets/images/mapa.png';

interface Props {
	children: React.ReactNode;
	translate: string;
}

const ComoChegarMd = () => {
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
		<Box
			id="ComoChegarMd"
			component="main"
			sx={{
				width: '100%',
				// height: '80vh',
				backgroundColor: '#000',
				padding: '1rem 1rem 1rem 1rem',
				zIndex: '2',
				// position: 'absolute',
			}}
		>
			<Container
				component="section"
				sx={{
					width: '100%',
					// height: '80vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '3rem 0',
					border: '0.15rem solid #f6b332',
					position: 'relative',
					zIndex: '99',
				}}
			>
				<Box
					// width="100%"
					// height="100%"
					position="absolute"
					paddingTop="4rem"
					// paddingRight="35rem"
				>
					<Section translate="Typography">
						<Typography
							component="h1"
							color="#fff"
							fontSize="4rem"
							lineHeight="3rem"
							fontFamily="Khand, sans-serif"
							fontWeight={900}
							position="relative"
							// padding="10rem 3rem"
							right="12rem"
							zIndex="999999"
						>
							BAR <br />
							BE <br />
							ARIA <br />
							<span
								style={{
									color: '#f6b332',
								}}
							>
								DOUGLET&apos;s
								<br />
								BARBEARIA
							</span>
						</Typography>
					</Section>
				</Box>
				<Box
					width="50%"
					// // height="80vh"
					// sx={{
					// 	backgroundImage: `url(${Local})`,
					// 	backgroundPosition: '100% 100%',
					// 	backgroundSize: 'cover',
					// 	backgroundRepeat: 'no-repeat',
					// 	opacity: '50%',
					// 	// zIndex: '999999',
					// 	position: 'relative',
					// }}
				>
					<img
						src={Local}
						width="100%"
						height="100%"
						style={{ opacity: '50%' }}
					/>
				</Box>

				<Box
					// width="50%"
					// height="100%"
					position="absolute"
					// padding="5rem 2rem"
				>
					<Section translate="Button">
						<Button
							style={{
								position: 'relative',
								zIndex: '1',
								backgroundColor: '#f6b332',
								// padding: '1rem 2rem',
								top: '5rem',
								left: '6rem',
							}}
						>
							<a
								href="https://www.google.com/maps/place/Dougla's+Coiffeur/@-22.6515273,-50.4194907,17z/data=!3m1!4b1!4m5!3m4!1s0x949539104f13fd7d:0xf3996aef55392f08!8m2!3d-22.6515345!4d-50.4173573"
								style={{
									textDecoration: 'none',
									color: '#000',
									fontFamily: 'Khand, sans-serif',
									fontSize: '1.3rem',
									fontWeight: '600',
									letterSpacing: '0.1rem',
								}}
							>
								COMO CHEGAR
							</a>
						</Button>
					</Section>
				</Box>
				<Box width="50%">
					<img src={Mapa} width="88%" height="100%" />
				</Box>
			</Container>
		</Box>
	);
};
export default ComoChegarMd;
