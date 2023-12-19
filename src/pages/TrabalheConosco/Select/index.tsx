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
				<InputLabel id="demo-simple-select-label">Área</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={area}
					label="Age"
					onChange={handleChange}
				>
					<MenuItem value={'Suporte'}>Suporte</MenuItem>
					<MenuItem value={'Comercial'}>Comercial</MenuItem>
					<MenuItem value={'Atendente'}>Atendente</MenuItem>
					<MenuItem value={'Técnico'}>Técnico</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};
