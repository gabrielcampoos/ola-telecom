import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

import carousel1 from '../../../../../assets/images/carousel-1.jpg';
import carousel2 from '../../../../../assets/images/carousel-2.jpg';
import carousel3 from '../../../../../assets/images/carousel-3.jpg';
import carousel4 from '../../../../../assets/images/carousel-4.jpg';
import carousel5 from '../../../../../assets/images/carousel-5.jpg';
import carousel6 from '../../../../../assets/images/carousel-6.jpg';

const CarouselMobile = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ReactSimplyCarousel
				centerMode={true}
				preventScrollOnSwipe={true}
				showSlidesBeforeInit={true}
				hideNavIfAllVisible={true}
				dotsNav={{ show: false }}
				activeSlideIndex={activeSlideIndex}
				onRequestChange={setActiveSlideIndex}
				itemsToShow={2}
				itemsToScroll={1}
				forwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						alignSelf: 'center',
						background: 'transparent',
						border: 'none',
						borderRadius: '50%',
						color: '#000',
						cursor: 'pointer',
						fontSize: '20px',
						fontWeight: '900',
						height: 30,
						lineHeight: 1,
						textAlign: 'center',
						width: 30,
						position: 'absolute',
						right: '1rem',
						zIndex: '9999',
					},
					children: <span>{`>`}</span>,
				}}
				backwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						alignSelf: 'center',
						background: 'transparent',
						border: 'none',
						borderRadius: '50%',
						color: '#000',
						cursor: 'pointer',
						fontSize: '20px',
						fontWeight: '900',
						height: 30,
						lineHeight: 1,
						textAlign: 'center',
						width: 30,
						position: 'absolute',
						left: '1rem',
						zIndex: '9999',
					},
					children: <span>{`<`}</span>,
				}}
				responsiveProps={[
					{
						itemsToShow: 2,
						itemsToScroll: 2,
						minWidth: 768,
					},
				]}
				speed={400}
				easing="linear"
			>
				{/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
				<div style={{ width: 300 }}>
					<img width="100%" src={carousel1} alt="Fotos carousel" />
				</div>
				<div style={{ width: 300 }}>
					<img width="100%" src={carousel2} alt="Fotos carousel" />
				</div>
				<div style={{ width: 300 }}>
					<img width="100%" src={carousel3} />
				</div>
				<div style={{ width: 300 }}>
					<img width="100%" src={carousel4} />
				</div>
				<div style={{ width: 300 }}>
					<img width="100%" src={carousel5} />
				</div>
				<div style={{ width: 300 }}>
					<img width="100%" src={carousel6} />
				</div>
			</ReactSimplyCarousel>
		</div>
	);
};

export default CarouselMobile;
