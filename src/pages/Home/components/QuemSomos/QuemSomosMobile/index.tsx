import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuemSomosMobile = () => {
	const navigate = useNavigate();

	return (
		<Box component="main" bgcolor="#000" id="SobreMobile">
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
						QUEM SOMOS
					</Typography>
				</Box>
				<Box>{/* <Media /> */}</Box>

				{/* CARD INSTAGRAM */}

				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<Box
						onClick={() => {
							navigate('/sobre');
							window.scrollTo(0, 0);
						}}
						component="button"
						width="70%"
						// height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
					>
						<Box
							width="100%%"
							height="100%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							top="0.2rem"
							left="0.3rem"
							sx={{
								backgroundColor: 'transparent',
							}}
						></Box>

						<Typography
							color={'whitesmoke'}
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							fontSize="1.5rem"
							letterSpacing="0.1rem"
						>
							SAIBA MAIS
						</Typography>
					</Box>
				</Container>
			</Container>
		</Box>
	);
};

export default QuemSomosMobile;
