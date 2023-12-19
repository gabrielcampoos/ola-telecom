import { Box, Container, Typography } from '@mui/material';

import PersonaBg from '../../../../../../assets/images/persona-2-bg.jpg';
import Persona from '../../../../../../assets/images/persona-2.png';

const BannerPersonaSm = () => {
	return (
		<Box
			width="100%"
			height="600px"
			display="flex"
			position="relative"
			zIndex={2}
			sx={{
				backgroundImage: `url(${PersonaBg})`,
			}}
		>
			<Container
				sx={{
					pt: 1,
					position: 'relative',
					display: 'flex',
				}}
			>
				<Box width="60%" display="flex" alignItems="flex-end">
					<img src={Persona} width="100%" height="50%" />
				</Box>

				<Box
					width="40%"
					display="flex"
					alignItems="center"
					flexDirection="column"
					justifyContent="center"
					color="#fff"
					zIndex={4}
					pb={10}
					position="relative"
					right={40}
				>
					<Typography fontSize="1.4rem" fontWeight="700">
						Planos de até <br />
					</Typography>

					<Typography
						sx={{
							backgroundColor: '#AD89E5',
							borderRadius: '1rem',
							width: '10rem',
							height: '3rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<span
							style={{
								fontSize: '2rem',
								fontWeight: '700',
								textAlign: 'center',
							}}
						>
							500mb
						</span>
					</Typography>
					<Typography
						fontSize="1.4rem"
						fontWeight="700"
						lineHeight="2rem"
					>
						Para atender
						<br />
						todas as suas
						<br />
						necessidades
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default BannerPersonaSm;
