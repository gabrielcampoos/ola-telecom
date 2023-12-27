import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as gerarId } from 'uuid';
import { useAppSelector } from '../../../../store/hooks';
import { listarTodasOs } from '../../../../store/modules/Os/osSlice';
import { OS } from '../../../../store/types';
import MediaCard from './Card';

export const Avisos = () => {
	const [listaOs, setListaOs] = React.useState<OS[]>([]);
	const [nomeCliente, setNomeCliente] = useState('');
	const [motivoContato, setMotivoContato] = useState('');

	const dispatch = useDispatch();
	const selector = useAppSelector((s) => s.os);

	const selectOs = useAppSelector(listarTodasOs);

	useEffect(() => {
		setListaOs(JSON.parse(localStorage.getItem('OS') ?? '[]'));
	}, []);

	useEffect(() => {
		localStorage.setItem('OS', JSON.stringify(listaOs));
	}, [listaOs]);

	const addNewCard = () => {
		const novaOs: OS = {
			id: gerarId(),
			nomeCliente: nomeCliente,
			motivoContato: motivoContato,
		};

		setListaOs((prevState) => [novaOs, ...prevState]);
		setNomeCliente('');
		setMotivoContato('');
	};

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					mt: 5,
					mb: 5,
					ml: 5,
					mr: 5,
					borderBottom: '5px solid #a5d2ff',
				}}
			>
				<Typography
					sx={{
						fontSize: '30px',
						fontWeight: '700',
						textAlign: 'center',
					}}
				>
					Ordens de serviço
				</Typography>
				<TextField
					size="small"
					type="text"
					label="Nome cliente"
					variant="outlined"
					onChange={(e) => setNomeCliente(e.target.value)}
					value={nomeCliente}
				/>

				<TextField
					size="small"
					type="text"
					label="Motivo contato"
					variant="outlined"
					onChange={(e) => setMotivoContato(e.target.value)}
					value={motivoContato}
				/>
				<Button
					sx={{
						background: '#1976D2',
						color: '#fff',
						'&:hover': {
							background: '#175793',
						},
					}}
					onClick={addNewCard}
				>
					Adicionar OS
				</Button>
			</Box>
			<Box
				sx={{
					width: '100%',
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, sm: 2, md: 4 }}
					columns={{ xs: 12, sm: 12, md: 12 }}
					pl={5}
					pr={5}
				>
					{selectOs.map(({ id, nomeCliente, motivoContato }) => {
						return (
							<Grid item xs={12} sm={6} md={2}>
								<MediaCard
									key={id}
									id={id}
									nomeCliente={nomeCliente}
									motivoContato={motivoContato}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
};
