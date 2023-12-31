import { Box, Grid, Typography } from '@mui/material';

import Control from '../../../../../assets/images/control.jpg';
import Fibra from '../../../../../assets/images/fibra.jpg';
import Password from '../../../../../assets/images/password.jpeg';

import { useNavigate } from 'react-router-dom';
import './styles.css';

const BlogSm = () => {
	const navigate = useNavigate();

	return (
		<Box
			component="div"
			id="blog"
			width="100%"
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
				columns={{ xs: 12, sm: 4, md: 12 }}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				borderBottom="1px solid #fff"
				pb={8}
				pt={8}
			>
				<Grid item xs={6} md={3} color="#fff" fontWeight="700">
					<Typography
						fontSize="2rem"
						fontWeight="700"
						textAlign="center"
					>
						BLOG
					</Typography>
				</Grid>
				<Grid item xs={8} md={6} color="#fff" fontWeight="700">
					<Typography textAlign="center">
						Confira as novidades quentinhas, especialmente para você
					</Typography>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={{ xs: 1, md: 4 }}
				columns={{ xs: 12, sm: 4, md: 30 }}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				borderBottom="1px solid #fff"
			>
				<Grid
					item
					xs={9}
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
						onClick={() => navigate('/ola-telecom-senha-segura')}
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
						}}
					>
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
					xs={9}
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
						onClick={() => navigate('/ola-telecom-mito-fibra')}
						sx={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
						}}
					>
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
					xs={9}
					md={10}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<a
						className="textVisible"
						href="https://jovemnerd.com.br/nerdbunker/melhores-jogos-de-2023-segundo-a-critica/"
						style={{
							textDecoration: 'none',
							color: '#fff',
							letterSpacing: '1px',
						}}
					>
						<Box
							component="button"
							width="100%"
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
							}}
						>
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
					</a>
				</Grid>
			</Grid>
		</Box>
	);
};

export default BlogSm;
