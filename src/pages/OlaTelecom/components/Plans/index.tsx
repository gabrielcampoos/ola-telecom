import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Grid, Typography } from '@mui/material';
import './styles.css';

import Fundo from '../../../../assets/images/fundo.jpg';

const Plans = () => {
	return (
		<Box
			width="100%"
			pt={3}
			pb={3}
			sx={{
				filter: 'drop-shadow(7px 7px 10px black)',
			}}
		>
			<Box
				width="100% "
				height="120px"
				display="flex"
				justifyContent="center"
				alignItems="center"
				sx={{
					background: '#294767',
					filter: 'drop-shadow(5px 5px 10px white) ',
				}}
			>
				<Typography
					fontSize="2rem"
					textAlign="center"
					color="white"
					fontWeight="700"
					position="absolute"
				>
					CONHEÇA NOSSOS
					<br />
					PLANOS
				</Typography>
			</Box>
			<Box
				width="100%"
				height="800px"
				display="flex"
				justifyContent="center"
				alignItems="center"
				sx={{
					background: `url(${Fundo})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, md: 4 }}
					columns={{ xs: 4, sm: 4, md: 17 }}
					display="flex"
					flexDirection="row"
					justifyContent="space-evenly"
					alignItems="center"
				>
					<Grid
						xs={2}
						md={2}
						item
						width="200px"
						height="500px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						color="#fff"
						fontWeight="700"
						sx={{
							background: 'rgb(250, 131, 0)',
							borderRadius: 5,
							filter: 'drop-shadow(20px 20px 20px black)',
						}}
						gap={4}
						p={2}
					>
						<Typography
							sx={{
								color: '#fff',
								fontSize: '2rem',
								width: '100%',
								textAlign: 'center',
								fontWeight: '700',
								borderBottom: '1px solid #fff',
							}}
						>
							50mb
						</Typography>
						<Typography>
							R${' '}
							<span
								style={{ fontSize: '2rem', fontWeight: '700' }}
							>
								59,90
								<br />
							</span>
							/mês
						</Typography>
						<Typography>
							<CheckIcon />
							50mb de download
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para dois dispositivos
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para uma TV
						</Typography>
						<Button
							sx={{
								width: '130px',
								background: '#294767',
								color: '#fff',
								fontWeight: '700',
								filter: 'drop-shadow(4px 4px 10px #FF7173) ',
							}}
						>
							Eu quero!
						</Button>
					</Grid>

					<Grid
						xs={2}
						md={2}
						item
						width="200px"
						height="500px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						color="#fff"
						fontWeight="700"
						sx={{
							background: 'rgb(250, 131, 0)',
							borderRadius: 5,
							filter: 'drop-shadow(20px 20px 20px black) ',
						}}
						gap={4}
						p={2}
					>
						<Typography
							sx={{
								color: '#fff',
								fontSize: '2rem',
								width: '100%',
								textAlign: 'center',
								fontWeight: '700',
								borderBottom: '1px solid #fff',
								paddingTop: '1rem',
							}}
						>
							150mb
						</Typography>
						<Typography
							className="textStyled"
							fontSize="1rem"
							position="absolute"
							top="0"
							pt={2}
							right={15}
							color="#fff"
							fontWeight="700"
						>
							<span>P</span>
							<span>O</span>
							<span>P</span>
							<span>U</span>
							<span>L</span>
							<span>A</span>
							<span>R</span>
						</Typography>

						<Typography>
							R${' '}
							<span
								style={{ fontSize: '2rem', fontWeight: '700' }}
							>
								79,90
								<br />
							</span>
							/mês
						</Typography>
						<Typography>
							<CheckIcon />
							150mb de download
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para quatro dispositivos
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para duas TVs
						</Typography>
						<Button
							sx={{
								width: '130px',
								background: '#294767',
								color: '#fff',
								fontWeight: '700',
								filter: 'drop-shadow(4px 4px 10px #FF7173) ',
							}}
						>
							Eu quero!
						</Button>
					</Grid>

					<Grid
						xs={2}
						md={2}
						item
						width="200px"
						height="500px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						color="#fff"
						fontWeight="700"
						sx={{
							background: 'rgb(250, 131, 0)',
							borderRadius: 5,
							filter: 'drop-shadow(20px 20px 20px black) ',
						}}
						gap={4}
						p={2}
					>
						<Typography
							sx={{
								color: '#fff',
								fontSize: '2rem',
								width: '100%',
								textAlign: 'center',
								fontWeight: '700',
								borderBottom: '1px solid #fff',
								paddingTop: '1rem',
							}}
						>
							300mb
						</Typography>
						<Typography>
							R${' '}
							<span
								style={{ fontSize: '2rem', fontWeight: '700' }}
							>
								89,90
								<br />
							</span>
							/mês
						</Typography>
						<Typography>
							<CheckIcon />
							300mb de download
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para seis dispositivos
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para três TVs
						</Typography>
						<Button
							sx={{
								width: '130px',
								background: '#294767',
								color: '#fff',
								fontWeight: '700',
								filter: 'drop-shadow(4px 4px 10px #FF7173) ',
							}}
						>
							Eu quero!
						</Button>
					</Grid>
					<Grid
						xs={2}
						md={2}
						item
						width="200px"
						height="500px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						color="#fff"
						fontWeight="700"
						sx={{
							background: 'rgb(250, 131, 0)',
							borderRadius: 5,
							filter: 'drop-shadow(20px 20px 20px black) ',
						}}
						gap={4}
						p={2}
					>
						<Typography
							sx={{
								color: '#fff',
								fontSize: '2rem',
								width: '100%',
								textAlign: 'center',
								fontWeight: '700',
								borderBottom: '1px solid #fff',
								paddingTop: '1rem',
							}}
						>
							400mb
						</Typography>
						<Typography>
							R${' '}
							<span
								style={{ fontSize: '2rem', fontWeight: '700' }}
							>
								99,90
								<br />
							</span>
							/mês
						</Typography>
						<Typography>
							<CheckIcon />
							400mb de download
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para dez dispositivos
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para seis TVs
						</Typography>
						<Button
							sx={{
								width: '130px',
								background: '#294767',
								color: '#fff',
								fontWeight: '700',
								filter: 'drop-shadow(4px 4px 10px #FF7173) ',
							}}
						>
							Eu quero!
						</Button>
					</Grid>
					<Grid
						xs={2}
						md={2}
						item
						width="200px"
						height="500px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						color="#fff"
						fontWeight="700"
						sx={{
							background: 'rgb(250, 131, 0)',
							borderRadius: 5,
						}}
						gap={3}
						p={2}
					>
						<Typography
							sx={{
								color: '#fff',
								fontSize: '2rem',
								width: '100%',
								textAlign: 'center',
								fontWeight: '700',
								borderBottom: '1px solid #fff',
								paddingTop: '1rem',
							}}
						>
							500mb
						</Typography>
						<Typography>
							R${' '}
							<span
								style={{ fontSize: '2rem', fontWeight: '700' }}
							>
								54,95
								<br />
							</span>
							<span style={{ fontSize: '0.7rem' }}>
								/três primeiros meses/
								<br />
								após R$ 109,90
							</span>
						</Typography>
						<Typography>
							<CheckIcon />
							500mb de download
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para dez dispositivos
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para seis TVs
						</Typography>
						<Button
							sx={{
								width: '130px',
								background: '#294767',
								color: '#fff',
								fontWeight: '700',
								filter: 'drop-shadow(4px 4px 10px #FF7173) ',
							}}
						>
							Eu quero!
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Plans;
