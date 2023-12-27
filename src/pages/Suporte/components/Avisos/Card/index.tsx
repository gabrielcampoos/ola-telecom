import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { OS } from '../../../../../store/types';

export default function MediaCard({ id, nomeCliente, motivoContato }: OS) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					textAlign="center"
				>
					{nomeCliente}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{motivoContato}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Concluir</Button>
				<Button size="small" onClick={() => {}}>
					Cancelar
				</Button>
			</CardActions>
		</Card>
	);
}
