import { Box, Grid, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import './styles.css';

import Fundo from '../../../../assets/images/fundo.jpg';
import BasicCard, { ICard } from '../Card';

const cardValues: ICard[] = [
	{
		id: uuid(),
		mb: 50,
		preco: 59.9,
		dispositivo: 'dois',
		tv: 'uma',
	},
	{
		id: uuid(),
		mb: 150,
		preco: 79.9,
		dispositivo: 'quatro',
		tv: 'duas',
	},
	{
		id: uuid(),
		mb: 300,
		preco: 99.9,
		dispositivo: 'seis',
		tv: 'três',
	},
	{
		id: uuid(),
		mb: 400,
		preco: 99.9,
		dispositivo: 'dez',
		tv: 'seis',
	},
	{
		id: uuid(),
		mb: 500,
		preco: 55.0,
		dispositivo: 'dez',
		tv: 'seis',
	},
];

const Plans = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '1000px',
				background: '#294767',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Typography fontSize="2.3rem" color="#fff" fontWeight="700" p={4}>
				CONHEÇA NOSSOS PLANOS
			</Typography>

			<Box
				width="100%"
				height="100%"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				sx={{
					background: `url(${Fundo})`,
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Grid
					container
					spacing={{ xs: 4, md: 3 }}
					columns={{ xs: 1, sm: 8, md: 12 }}
					justifyContent="center"
					alignItems="center"
					width="100%"
					height="100%"
				>
					{cardValues.map((card) => (
						<Grid item xs={2} sm={3} md={2} key={card.id}>
							<BasicCard
								key={card.id}
								mb={card.mb}
								preco={card.preco}
								dispositivo={card.dispositivo}
								tv={card.tv}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Plans;
