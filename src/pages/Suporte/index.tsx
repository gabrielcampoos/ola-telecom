import { Box } from '@mui/material';
import AppBarSuporte from './components/AppBar';
import { Avisos } from './components/Avisos';

export const Suporte = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
			}}
		>
			<AppBarSuporte />
			<Avisos />
		</Box>
	);
};
