import { Box } from '@mui/material';

import ResponsiveAppBar from './components/AppBar';
import Blog from './components/Blog';
import FloatingActionButtonSize from './components/FloatingButton';
import Footer from './components/Footer';
import GridInfo from './components/GridInfo';
import Plans from './components/Plans';
import Slider from './components/Slider';
import Vantagens from './components/Vantagens';

const OlaTelecom = () => {
	return (
		<>
			<Box width="100%" height="100%">
				<ResponsiveAppBar />
				<Slider />
				<GridInfo />
				<Plans />
				<Vantagens />
				<Blog />
				<Footer />
				<FloatingActionButtonSize />
			</Box>
		</>
	);
};

export default OlaTelecom;
