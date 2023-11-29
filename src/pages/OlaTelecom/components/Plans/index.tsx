import { Box, Grid, Typography } from '@mui/material';
import './styles.css';

import Fundo from '../../../../assets/images/fundo.jpg';
import BasicCard from '../Card';

const Plans = () => {
	return (
		<Grid
			container
			spacing={{ xs: 4, md: 3 }}
			columns={{ xs: 1, sm: 8, md: 12 }}
			pt={3}
			pb={3}
			sx={{
				filter: 'drop-shadow(7px 7px 10px black)',
			}}
		>
			<Grid item xs={12} sm={12} md={12}>
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
			</Grid>
			<Grid
				item
				xs={3}
				sm={2}
				md={12}
				width="100%"
				display="flex"
				justifyContent="space-around"
				alignItems="center"
				flexDirection="row"
			>
				<Box
					sx={{
						width: '100%',
						background: `url(${Fundo})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundAttachment: 'fixed',
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						flexDirection: 'row',
					}}
				></Box>
				<BasicCard />
			</Grid>
			{/* <Grid item xs={3} sm={2} md={3}>
					<Container
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							color: '#fff',
							fontWeight: '700',

							background: 'rgb(250, 131, 0)',
							borderRadius: 5,
							filter: 'drop-shadow(20px 20px 20px black) ',

							gap: 3,
						}}
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
								style={{
									fontSize: '2rem',
									fontWeight: '700',
								}}
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
					</Container>
				</Grid>

				<Grid item xs={3} sm={2} md={3}>
					<Container
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							color: '#fff',
							fontWeight: '700',
							background: 'rgb(250, 131, 0)',
							borderRadius: 5,
							filter: 'drop-shadow(20px 20px 20px black) ',
							gap: 3,
						}}
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
								style={{
									fontSize: '2rem',
									fontWeight: '700',
								}}
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
					</Container>
				</Grid>

				<Grid item xs={3} sm={2} md={3}>
					<Container
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							color: '#fff',
							fontWeight: '700',
							background: 'rgb(250, 131, 0)',
							borderRadius: 5,
							filter: 'drop-shadow(20px 20px 20px black) ',
							gap: 3,
						}}
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
								style={{
									fontSize: '2rem',
									fontWeight: '700',
								}}
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
					</Container>
				</Grid>

				<Grid item xs={3} sm={2} md={3}>
					<Container
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							color: '#fff',
							fontWeight: '700',
							background: 'rgb(250, 131, 0)',
							borderRadius: 5,
							gap: 3,
						}}
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
								style={{
									fontSize: '2rem',
									fontWeight: '700',
								}}
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
					</Container>
				</Grid> */}
		</Grid>
	);
};

export default Plans;
