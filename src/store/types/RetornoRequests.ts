import { OsState } from './OsState';
import { UsuarioState } from './UsuarioState';

export interface RespostaOs {
	sucesso: boolean;
	mensagem: string;
	dadosCadastrados?: OsState[];
}

export interface RespostaCadastro {
	sucesso: boolean;
	mensagem: string;
	dadosCadastrados?: UsuarioState & { id: string };
}

export interface RespostaLogin {
	sucesso: boolean;
	mensagem: string;
	dados?: { id: string; nome: string };
}
