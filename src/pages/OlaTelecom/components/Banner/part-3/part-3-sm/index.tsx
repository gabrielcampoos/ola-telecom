import { Box, Container, Typography } from '@mui/material';

import PersonaBgWomam from '../../../../../../assets/images/persona-3-bg.jpg';
import PersonaWomam from '../../../../../../assets/images/persona-3.png';

const BannerPersonaWomamSm = () => {
	return (
		<Box
			width="100%"
			height="400px"
			display="flex"
			position="relative"
			pt={5}
			zIndex={2}
			sx={{
				backgroundImage: `url(${PersonaBgWomam})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Container
				sx={{
					pt: 1,
					position: 'relative',
					display: 'flex',
				}}
			>
				<Box
					width="10%"
					display="flex"
					alignItems="center"
					flexDirection="column"
					justifyContent="center"
					color="#fff"
					zIndex={4}
					pb={20}
				>
					<Typography
						fontSize="1.5rem"
						fontWeight="700"
						noWrap
						position="relative"
						left="10rem"
						bottom="4rem"
					>
						Viva a experiência <br />
						de uma internet <br />
						ULTRA-RÁPIDA
					</Typography>
				</Box>

				<Box
					width="100%"
					height="100%"
					display="flex"
					justifyContent="center"
					alignItems="flex-end"
				>
					<Box
						component="img"
						src={PersonaWomam}
						width="100%"
						height="70%"
						position="absolute"
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default BannerPersonaWomamSm;
