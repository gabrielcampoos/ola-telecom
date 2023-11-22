import CircleIcon from '@mui/icons-material/Circle';
import {
	Grid,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';

const ListaServicoBasic = () => {
	return (
		<Grid item>
			<Typography
				width="100%"
				color={'#000'}
				fontFamily="Khand, sans-serif"
				fontWeight={700}
				fontSize="1.2rem"
				letterSpacing="0.1rem"
				textAlign="center"
				mt={4}
			>
				SERVIÇOS DISPONÍVEIS
			</Typography>
			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary=/* "Cabelo" */ "Disponibilidade de quatro serviços" />
			</ListItem>

			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary=/* "Barba" */ "Acesso compartilhado" />
			</ListItem>

			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary=/* "Hidratação" */ "10% na compra de produtos" />
			</ListItem>
			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary=/* "Limpeza de pele" */ "20% de descontos em serviços adicionais" />
			</ListItem>
			{/* <ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary= "Depilação nariz / orelha" />
			</ListItem>
			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary=  "Desconto produtos e serviços"  />
			</ListItem> */}
		</Grid>
	);
};

export default ListaServicoBasic;
