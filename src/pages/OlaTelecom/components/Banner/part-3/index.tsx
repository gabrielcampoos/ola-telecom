import { Box, Container, Typography } from '@mui/material';

import PersonaBgWomam from '../../../../../assets/images/persona-3-bg.jpg';
import PersonaWomam from '../../../../../assets/images/persona-3.png';

const BannerPersonaWomam = () => {
	return (
		<Box
			width="100%"
			height="675px"
			display="flex"
			position="relative"
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
					width="5%"
					display="flex"
					alignItems="center"
					flexDirection="column"
					justifyContent="center"
					color="#fff"
					zIndex={4}
					pb={20}
				>
					<Typography fontSize="3rem" fontWeight="700">
						Planos de até <br />
					</Typography>

					<Typography
						sx={{
							backgroundColor: '#AD89E5',
							borderRadius: '1rem',
							width: '20rem',
							height: '6rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<span
							style={{
								fontSize: '6rem',
								fontWeight: '700',
								textAlign: 'center',
							}}
						>
							500mb
						</span>
					</Typography>
					<Typography
						fontSize="3rem"
						fontWeight="700"
						lineHeight="3rem"
					>
						Para atender
						<br />
						todas as suas
						<br />
						necessidades
					</Typography>
				</Box>

				<Box
					width="100%"
					height="100%"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<img src={PersonaWomam} width="100%" height="100%" />
				</Box>
			</Container>
		</Box>
	);
};

export default BannerPersonaWomam;
