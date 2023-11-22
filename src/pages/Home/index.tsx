import Assinaturas from './components/Assinaturas';
import CarouselDiv from './components/Carousel';
import ComoChegar from './components/ComoChegar';
import FloatingButton from './components/FloatingButton';
import Footer from './components/Footer';
import MockupApp from './components/MockupApp';
import ButtonAppBar from './components/Navbar';
import Planos from './components/Planos';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';

const Home = () => {
	return (
		<>
			<ButtonAppBar />
			<CarouselDiv />
			<QuemSomos />
			<Assinaturas />
			<Planos />
			<MockupApp />
			<ComoChegar />
			<Servicos />
			<Footer />
			<FloatingButton />
		</>
	);
};

export default Home;
