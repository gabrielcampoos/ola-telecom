import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import BgSenhaSegura from '../../assets/images/bg-senha-segura.jpg';
import ResponsiveAppBar from '../OlaTelecom/components/AppBar';
import FloatingActionButtonSize from '../OlaTelecom/components/FloatingButton';
import { TextArea } from './components/TextArea';

export const SenhaSegura = () => {
	const theme = useTheme();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<Box
						sx={{
							width: '100%',
						}}
					>
						<ResponsiveAppBar />
						<Box
							sx={{
								width: '100%',
								height: '200px',
								backgroundImage: `linear-gradient(rgba(10, 5, 10, 0.7), rgba(10, 5, 10, 0.7)), url(${BgSenhaSegura})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									color: '#fff',
								}}
							>
								Cinco passos para uma senha mais segura.
							</Typography>
						</Box>
						<TextArea />
						<FloatingActionButtonSize />
					</Box>
				</>
			)) || (
				<>
					<Box
						sx={{
							width: '100%',
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '385px',
								backgroundImage: `linear-gradient(rgba(10, 5, 10, 0.7), rgba(10, 5, 10, 0.7)), url(${BgSenhaSegura})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<ResponsiveAppBar />
							<Typography
								sx={{
									fontSize: '2.5rem',
									color: '#fff',
								}}
							>
								Cinco passos para uma senha mais segura.
							</Typography>
						</Box>
						<TextArea />
						<FloatingActionButtonSize />
					</Box>
				</>
			)}
		</>
	);
};
