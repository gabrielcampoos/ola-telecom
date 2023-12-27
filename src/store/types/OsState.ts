export interface OsDTO {
	nomeCliente: string;
	motivoContato: string;
}

export interface OsState {
	id: string;
	nomeCliente: string;
	motivoContato: string;
	criadoPor: string;
	criadoEm: Date;
}

export interface PesquisaOs {
	id: string;
	nomeCliente: string;
	criadoPor: string;
	criadoEm: Date;
	ordemDate: string;
}
