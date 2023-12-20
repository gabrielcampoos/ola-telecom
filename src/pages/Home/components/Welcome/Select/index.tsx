import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

interface SelectProps {
	area: string;
	setArea: React.Dispatch<React.SetStateAction<string>>;
}

export const BasicSelect: React.FC<SelectProps> = ({ area, setArea }) => {
	const handleChange = (event: SelectChangeEvent) => {
		setArea(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel
					id="demo-simple-select-label"
					style={{ fontWeight: '700' }}
				>
					Selecione
				</InputLabel>
				<Select
					id="select-label"
					value={area}
					onChange={handleChange}
					variant="filled"
					sx={{
						background: '#fff',
						transition: 'ease-in-out 0.5s',
						color: 'rgba(255, 110, 0, 1)',
						'&:hover': {
							background: 'rgba(255, 110, 0, 1)',
							color: '#fff',
							fontWeight: '700',
						},
					}}
				>
					<MenuItem value={'Suporte'}>Suporte</MenuItem>
					<MenuItem value={'Comercial'}>Comercial</MenuItem>
					<MenuItem value={'Cliente'}>Cliente</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};
