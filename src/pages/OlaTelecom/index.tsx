import ResponsiveAppBar from './components/AppBar';
import Blog from './components/Blog';
import GridInfo from './components/GridInfo';
import Plans from './components/Plans';
import Slider from './components/Slider';
import Vantagens from './components/Vantagens';

const OlaTelecom = () => {
	return (
		<>
			<ResponsiveAppBar />
			<Slider />
			<GridInfo />
			<Plans />
			<Vantagens />
			<Blog />
		</>
	);
};

export default OlaTelecom;
