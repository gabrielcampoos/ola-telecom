import ResponsiveAppBar from './components/AppBar';
import GridInfo from './components/GridInfo';
import Plans from './components/Plans';
import Slider from './components/Slider';

const OlaTelecom = () => {
	return (
		<>
			<ResponsiveAppBar />
			<Slider />
			<GridInfo />
			<Plans />
		</>
	);
};

export default OlaTelecom;
