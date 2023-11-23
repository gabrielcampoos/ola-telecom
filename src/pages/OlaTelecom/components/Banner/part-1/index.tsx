import { Box, Container, Typography } from '@mui/material';

import BannerGradient from '../../../../../assets/images/banner-gradient.png';
import BannerLayer from '../../../../../assets/images/banner-layer.png';

const Banner = () => {
	return (
		<Box
			width="100%"
			display="flex"
			position="relative"
			zIndex={2}
			sx={{
				backgroundImage: `url(${BannerGradient})`,
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
					width="50%"
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexDirection="column"
					color="#fff"
					zIndex={4}
					lineHeight="5rem"
				>
					<Typography fontSize="2.8rem" fontWeight="500" pl={5}>
						_CONECTANDO <br />
					</Typography>

					<span
						style={{
							fontSize: '5rem',
							fontWeight: '700',
							textAlign: 'center',
						}}
					>
						VOCÊ AO MUNDO!
					</span>
				</Box>

				<Box
					width="50%"
					display="flex"
					alignItems="center"
					justifyContent="center"
					pt={6}
					position="relative"
					right="9rem"
					top="0.3rem"
				>
					<img src={BannerLayer} />
				</Box>
			</Container>
		</Box>
	);
};

export default Banner;
