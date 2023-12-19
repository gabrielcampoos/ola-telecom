import { Box, useMediaQuery, useTheme } from '@mui/material';

import Background from '../../assets/images/ola-telecom-bg.jpg';
import Welcome from './components/Welcome';
import WelcomeSm from './components/Welcome/WelcomeSm';

const Home = () => {
	const theme = useTheme();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<Box
						width="100%"
						height="100vh"
						sx={{
							backgroundImage: `url(${Background})`,
							backgroundSize: 'cover',
							backgroundPosition: '100% 100%',
							backgroundRepeat: 'no-repeat',
						}}
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<WelcomeSm />
					</Box>
				</>
			)) || (
				<>
					<Box
						width="100%"
						height="100vh"
						sx={{
							backgroundImage: `url(${Background})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
						}}
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Welcome />
					</Box>
				</>
			)}
		</>
	);
};

export default Home;
