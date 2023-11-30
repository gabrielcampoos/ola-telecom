import ResponsiveAppBar from './components/AppBar';
import Blog from './components/Blog';
import Footer from './components/Footer';
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
			<Footer />
		</>
	);
};

export default OlaTelecom;
