import { Box, Button, Grid, TextField } from '@mui/material';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import ResponsiveAppBar from '../OlaTelecom/components/AppBar';
import { BasicSelect } from './Select';

export interface CriarForm {
	nome: string;
	email: string;
	cidade: string;
	telefone: string;
	area: string;
	sobre: string;
}

export const TrabalheConosco = () => {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [cidade, setCidade] = useState('');
	const [telefone, setTelefone] = useState('');
	const [area, setArea] = useState('');
	const [sobre, setSobre] = useState('');

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const templateParams = {
			nome: nome,
			email: email,
			cidade: cidade,
			telefone: telefone,
			area: area,
			sobre: sobre,
		};

		emailjs
			.send(
				'service_v74s6eo',
				'template_ogrjw2i',
				templateParams,
				'lbXoO67x851UAjzK8',
			)
			.then(
				(response) => {
					console.log(
						'E-mail enviado',
						response.status,
						response.text,
					);
				},
				(error) => {
					console.log('Erro', error);
				},
			);
	}

	return (
		<Box
			component="main"
			width="100%"
			height="100vh"
			sx={{ background: '#D3E4F0' }}
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<ResponsiveAppBar />

			<Grid
				container
				spacing={{ xs: 4, md: 2 }}
				columns={{ xs: 1, sm: 8, md: 12 }}
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item xs={2} sm={3} md={2} width="100%">
					<Box
						component="img"
						src={
							'https://olanet.com.br/wp-content/uploads/elementor/thumbs/ola-telecom-moca-trabalhe-conosco-1-p6j8rajc4bryumik1mj46a0tyaa8uizhmx61ffsb40.jpg'
						}
						width="80%"
						sx={{
							float: 'right',
							position: 'relative',
							top: -30,
						}}
					/>
				</Grid>

				<Grid
					item
					component="form"
					onSubmit={onSubmit}
					xs={2}
					sm={3}
					md={5}
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					gap={5}
				>
					<Grid item xs={12} sm={4} md={10} width="100%">
						<TextField
							fullWidth
							type="text"
							label="Nome"
							variant="outlined"
							onChange={(e) => setNome(e.target.value)}
							value={nome}
						/>
					</Grid>

					<Grid item xs={12} sm={4} md={10} width="100%">
						<TextField
							fullWidth
							type="text"
							label="E-mail"
							variant="outlined"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</Grid>

					<Grid item xs={12} sm={4} md={10} width="100%">
						<TextField
							fullWidth
							type="text"
							label="Cidade"
							variant="outlined"
							onChange={(e) => setCidade(e.target.value)}
							value={cidade}
						/>
					</Grid>

					<Grid item xs={12} sm={4} md={10} width="100%">
						<TextField
							fullWidth
							type="text"
							label="Telefone"
							variant="outlined"
							onChange={(e) => setTelefone(e.target.value)}
							value={telefone}
						/>
					</Grid>

					<Grid item xs={12} sm={4} md={10} width="100%">
						<BasicSelect area={area} setArea={setArea} />
					</Grid>

					<Grid item xs={12} sm={4} md={10} width="100%">
						<TextField
							id="filled-multiline-static"
							label="Conte-nos um pouco sobre você"
							multiline
							rows={6}
							type="text"
							variant="outlined"
							sx={{
								width: '100%',
							}}
							onChange={(e) => setSobre(e.target.value)}
							value={sobre}
						/>
					</Grid>

					<Grid item xs={12} sm={4} md={2}>
						<Button
							variant="contained"
							color="warning"
							type="submit"
							sx={{
								width: '100%',
							}}
						>
							Enviar
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};
function config() {
	throw new Error('Function not implemented.');
}
