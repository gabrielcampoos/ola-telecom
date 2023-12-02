import { Box, Grid, Typography } from '@mui/material';

import Control from '../../../../assets/images/control.jpg';
import Fibra from '../../../../assets/images/fibra.jpg';
import Password from '../../../../assets/images/password.jpeg';

import { useRef } from 'react';
import './styles.css';

const Blog = () => {
	const ref = useRef();

	return (
		<Box
			component="div"
			id="blog"
			ref={ref}
			width="100%"
			height="675px"
			sx={{
				background: '#2E4252',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Grid
				container
				spacing={{ xs: 2, md: 4 }}
				columns={{ xs: 4, sm: 4, md: 12 }}
				display="flex"
				flexDirection="row"
				justifyContent="space-evenly"
				alignItems="center"
				borderBottom="1px solid #fff"
				pb={8}
				pt={8}
			>
				<Grid item xs={2} md={3} color="#fff" fontWeight="700">
					<Typography
						fontSize="3rem"
						fontWeight="700"
						textAlign="end"
					>
						BLOG
					</Typography>
				</Grid>
				<Grid item xs={2} md={6} color="#fff" fontWeight="700">
					<Typography textAlign="initial">
						Confira as novidades quentinhas, especialmente para você
					</Typography>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={{ xs: 2, md: 4 }}
				columns={{ xs: 4, sm: 4, md: 30 }}
				display="flex"
				flexDirection="row"
				justifyContent="space-around"
				alignItems="center"
				borderBottom="1px solid #fff"
			>
				<Grid
					item
					xs={2}
					md={10}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Box
						className="background"
						component="button"
						width="562px"
						height="400px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						mt={3}
						mb={3}
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
							'.textVisible': {
								visibility: 'hidden',
							},
							'&:hover': {
								'.textVisible': {
									visibility: 'visible',
								},
								'.bg': {
									background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Password})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
								},
							},
						}}
					>
						<Typography
							className="textVisible"
							color="#fff"
							letterSpacing="1px"
							fontSize="16px"
							fontWeight="700"
							textTransform="uppercase"
							position="absolute"
							textAlign="center"
						>
							Cinco passos para uma senha mais segura
						</Typography>

						<Box
							className="bg"
							component="img"
							width="100%"
							height="100%"
							sx={{
								background: `url(${Password})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								borderRadius: '1rem 1rem 0 0',

								'&:hover': {
									background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Password})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
								},
							}}
						/>
						<Box
							width="100%"
							sx={{
								background: '#fff',
								borderRadius: '0 0 1rem 1rem',
							}}
						>
							<Typography
								color="#333"
								textAlign="center"
								padding="2rem 0"
								letterSpacing="1px"
								fontSize="16px"
								fontWeight="700"
								textTransform="uppercase"
							>
								Cinco passos para uma senha mais segura
							</Typography>
						</Box>
					</Box>
				</Grid>

				<Grid
					item
					xs={2}
					md={10}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Box
						component="button"
						width="562px"
						height="400px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						mt={3}
						mb={3}
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
							'.textVisible': {
								visibility: 'hidden',
							},
							'&:hover': {
								'.textVisible': {
									visibility: 'visible',
								},
								'.bg': {
									background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Fibra})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
								},
							},
						}}
					>
						<Typography
							className="textVisible"
							color="#fff"
							letterSpacing="1px"
							fontSize="16px"
							fontWeight="700"
							textTransform="uppercase"
							position="absolute"
							textAlign="center"
						>
							mitos e verdades sobre a fibra óptica
						</Typography>
						<Box
							className="bg"
							component="img"
							width="100%"
							height="100%"
							sx={{
								background: `url(${Fibra})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								borderRadius: '1rem 1rem 0 0',
								'&:hover': {
									background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Fibra})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
								},
							}}
						/>
						<Box
							width="100%"
							sx={{
								background: '#fff',
								borderRadius: '0 0 1rem 1rem',
							}}
						>
							<Typography
								color="#333"
								textAlign="center"
								padding="2rem 0"
								letterSpacing="1px"
								fontSize="16px"
								fontWeight="700"
								textTransform="uppercase"
							>
								mitos e verdades sobre a fibra óptica
							</Typography>
						</Box>
					</Box>
				</Grid>

				<Grid
					item
					xs={2}
					md={10}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Box
						component="button"
						width="562px"
						height="400px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						mt={3}
						mb={3}
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
							'.textVisible': {
								visibility: 'hidden',
							},
							'&:hover': {
								'.textVisible': {
									visibility: 'visible',
								},
								'.bg': {
									background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Control})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
								},
							},
						}}
					>
						<Typography
							className="textVisible"
							color="#fff"
							letterSpacing="1px"
							fontSize="16px"
							fontWeight="700"
							textTransform="uppercase"
							position="absolute"
							textAlign="center"
						>
							Os melhores jogos de pc em 2023 até agora
						</Typography>

						<Box
							className="bg"
							component="img"
							width="100%"
							height="100%"
							sx={{
								background: `url(${Control})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								borderRadius: '1rem 1rem 0 0',
								'&:hover': {
									background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Control})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
								},
							}}
						/>
						<Box
							width="100%"
							sx={{
								background: '#fff',
								borderRadius: '0 0 1rem 1rem',
							}}
						>
							<Typography
								color="#333"
								textAlign="center"
								padding="2rem 0"
								letterSpacing="1px"
								fontSize="16px"
								fontWeight="700"
								textTransform="uppercase"
							>
								Os melhores jogos de pc em 2023 até agora
							</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Blog;
