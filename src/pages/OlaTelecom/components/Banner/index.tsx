import { Box, Container, Typography } from '@mui/material';

import BannerGradient from '../../../../assets/images/banner-gradient.png';
import BannerLayer from '../../../../assets/images/banner-layer.png';

const images = [];

const Banner = () => {
	return (
		<Box
			width="100%"
			height="1200px"
			display="flex"
			position="relative"
			zIndex={2}
		>
			<Container
				sx={{
					pt: 1,
					position: 'relative',
					right: '18rem',
					display: 'flex',
				}}
			>
				<Box width="50%">
					<img src={BannerGradient} />
				</Box>

				<Box
					width="40%"
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexDirection="column"
					color="#fff"
					zIndex={4}
					sx={{ transform: 'rotate(0.7deg)' }}
					gap={1}
				>
					<Typography
						fontSize="3rem"
						position="relative"
						top="-19rem"
						left="-25.9rem"
						lineHeight="0.9rem"
						fontWeight="500"
					>
						_CONECTANDO <br />
					</Typography>
					<span
						style={{
							fontSize: '5rem',
							position: 'relative',
							fontWeight: '700',
							top: '-19rem',
							left: '-23rem',
							lineHeight: '0.2rem',
						}}
					></span>
					<span
						style={{
							fontSize: '5rem',
							position: 'relative',
							fontWeight: '700',
							top: '-19rem',
							left: '-23rem',
							lineHeight: '5.8rem',
						}}
					>
						VOCÊ AO MUNDO!
					</span>
				</Box>

				<Box width="50%" position="absolute" right="9rem" pt={5}>
					<img src={BannerLayer} />
				</Box>
			</Container>
		</Box>
	);
};

export default Banner;
