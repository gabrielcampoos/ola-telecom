import { v4 as GerarId } from 'uuid';
import { Aviso } from '../store/types';

const listaAvisos: Aviso[] = [
	{
		id: GerarId(),
		nomeCliente: '',
		motivoContato: '',
	},
];

export default listaAvisos;
