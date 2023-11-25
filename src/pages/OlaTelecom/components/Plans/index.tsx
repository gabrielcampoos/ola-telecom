import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Grid, Typography } from '@mui/material';

import Fundo from '../../../../assets/images/fundo.jpg';

const Plans = () => {
	return (
		<Box width="100%" pt={3} pb={3}>
			<Box
				width="100% "
				height="120px"
				display="flex"
				justifyContent="center"
				alignItems="center"
				sx={{
					background: '#AD89E5',
				}}
			>
				<Typography
					fontSize="2rem"
					textAlign="center"
					color="white"
					fontWeight="700"
					position="absolute"
				>
					CONHEÇA NOSSOS
					<br />
					PLANOS
				</Typography>
			</Box>
			<Box
				width="100%"
				height="800px"
				display="flex"
				justifyContent="center"
				alignItems="center"
				sx={{
					background: `url(${Fundo})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
				}}
			>
				<Grid
					spacing={{ xs: 2, md: 4 }}
					columns={{ xs: 4, sm: 4, md: 12 }}
					display="flex"
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
				>
					<Grid
						item
						height="500px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						color="#fff"
						fontWeight="700"
						sx={{
							background: '#AD89E5',
							borderRadius: 5,
						}}
						gap={6}
						p={2}
					>
						<Typography
							sx={{
								color: '#000',
								fontSize: '2rem',
								width: '100%',
								textAlign: 'center',
								fontWeight: '700',
								borderBottom: '1px solid #fff',
							}}
						>
							50mb
						</Typography>
						<Typography>R$ 59,90/mês</Typography>
						<Typography>
							<CheckIcon />
							50mb de download
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para dois dispositivos
						</Typography>
						<Typography>
							<CheckIcon />
							Ideal para uma TV
						</Typography>
						<Button>Eu quero!</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Plans;
