export interface UsuarioLogado {
	id: string;
	nome: string;
	isLogged: boolean;
}

export interface UsuarioState {
	nome: string;
	username: string;
	senha: string;
	isLogged: boolean;
}
