import { Box } from '@mui/material';

import Background from '../../assets/images/ola-telecom-bg.jpg';
import Welcome from './components/Welcome';

const Home = () => {
	return (
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
	);
};

export default Home;
