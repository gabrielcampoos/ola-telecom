import CheckIcon from '@mui/icons-material/Check';
import { Box, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { v4 as uuid } from 'uuid';

interface ICard {
	id: string;
	mb: number;
	preco: number;
	dispositivo: string;
	tv: string;
}

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

const BasicCard = () => {
	return (
		<Box
			width="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Card>
				{cardValues.map((card) => (
					<>
						<CardContent key={card.id}>
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
								{card.mb === 150 ? (
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
										{card.mb}
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
										mb
									</Typography>
								) : (
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
										{card.mb}mb
									</Typography>
								)}
								<Typography>
									R${' '}
									<span
										style={{
											fontSize: '2rem',
											fontWeight: '700',
										}}
									>
										{card.preco}
										<br />
									</span>
									/mês
								</Typography>
								<Typography>
									<CheckIcon />
									{card.mb}mb de download
								</Typography>
								<Typography>
									<CheckIcon />
									Ideal para {card.dispositivo} dispositivos
								</Typography>
								<Typography>
									<CheckIcon />
									Ideal para {card.tv} TV
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
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</>
				))}
			</Card>
		</Box>
	);
};

export default BasicCard;
