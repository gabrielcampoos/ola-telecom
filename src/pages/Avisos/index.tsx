import { Box } from '@mui/material';
import ResponsiveAppBar from '../OlaTelecom/components/AppBar';
import Status from './components/Status';

export const Avisos = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				background: '#c1c1c1',
			}}
		>
			<ResponsiveAppBar />
			<Status />
		</Box>
	);
};
