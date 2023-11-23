import { Box, Container, Typography } from '@mui/material';

import PersonaBg from '../../../../../assets/images/persona-2-bg.jpg';
import Persona from '../../../../../assets/images/persona-2.png';

const BannerPersona = () => {
	return (
		<Box
			width="100%"
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
				<Box width="50%" display="flex" alignItems="center" pt={4}>
					<img src={Persona} />
				</Box>

				<Box
					width="50%"
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
			</Container>
		</Box>
	);
};

export default BannerPersona;
