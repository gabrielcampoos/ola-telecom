import { Box, Button, Container, Typography } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import Local from '../../../../../assets/images/local.jpeg';
import Mapa from '../../../../../assets/images/mapa.png';

interface Props {
	children: React.ReactNode;
	translate: string;
}

const ComoChegarMobile = () => {
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

	return (
		<Box
			id="ComoChegarMobile"
			component="main"
			sx={{
				width: '100%',
				backgroundColor: '#000',
			}}
		>
			<Container
				disableGutters
				component="section"
				sx={{
					width: '100%',
					height: '100%',
				}}
			>
				<Box width="100%" height="100%" component="div">
					<Section translate="Typography">
						<Typography
							component="h1"
							color="#fff"
							fontSize={50}
							lineHeight="2.5rem"
							fontFamily="Khand, sans-serif"
							fontWeight={900}
							position="absolute"
							paddingTop="10rem"
							paddingLeft="2rem"
							zIndex="1"
						>
							BAR <br />
							BE
							<br />
							ARIA
							<br />
							<span
								style={{
									color: '#f6b332',
								}}
							>
								DOUGLET&apos;S <br />
								BARBEARIA
							</span>
						</Typography>
					</Section>
					<img
						src={Local}
						width="100%"
						height="100%"
						style={{ opacity: '50%' }}
					/>
				</Box>
				<Box width="100%" height="100%" component="div">
					<img src={Mapa} width="100%" height="100%" />
					<Section translate="Button">
						<Button
							style={{
								position: 'relative',
								zIndex: '1',
								backgroundColor: '#f6b332',
								// padding: '1rem 6rem',
								top: '-2.5rem',
								left: '2rem',
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
			</Container>
		</Box>
	);
};
export default ComoChegarMobile;
