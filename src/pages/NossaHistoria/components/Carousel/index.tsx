import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

import carousel1 from '../../../../assets/images/carousel-1.jpg';
import carousel2 from '../../../../assets/images/carousel-2.jpg';
import carousel3 from '../../../../assets/images/carousel-3.jpg';
import carousel4 from '../../../../assets/images/carousel-4.jpg';
import carousel5 from '../../../../assets/images/carousel-5.jpg';
import carousel6 from '../../../../assets/images/carousel-6.jpg';
import CarouselMd from './CarouselMd';
import CarouselMobile from './CarouselMobile';

const Carousel = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<>
			{(smDown && (
				<>
					<CarouselMobile />
				</>
			)) ||
				(mdDown && (
					<>
						<CarouselMd />
					</>
				)) || (
					<ReactSimplyCarousel
						centerMode={true}
						preventScrollOnSwipe={true}
						showSlidesBeforeInit={true}
						hideNavIfAllVisible={true}
						dotsNav={{ show: false }}
						activeSlideIndex={activeSlideIndex}
						onRequestChange={setActiveSlideIndex}
						itemsToShow={1}
						itemsToScroll={1}
						containerProps={{
							style: {
								flexFlow: 'row',
								width: '100%',
							},
						}}
						forwardBtnProps={{
							//here you can also pass className, or any other button element attributes
							style: {
								position: 'relative',
								alignSelf: 'center',
								background: '#000',
								border: 'none',
								borderRadius: '50%',
								color: '#f6b332',
								cursor: 'pointer',
								fontSize: '20px',
								fontWeight: '900',
								height: 30,
								lineHeight: 1,
								textAlign: 'center',
								width: 30,
								zIndex: '9999',
							},
							children: <span>{`>`}</span>,
						}}
						backwardBtnProps={{
							//here you can also pass className, or any other button element attributes
							style: {
								alignSelf: 'center',
								background: '#000',
								border: 'none',
								borderRadius: '50%',
								color: '#f6b332',
								cursor: 'pointer',
								fontSize: '20px',
								fontWeight: '900',
								height: 30,
								lineHeight: 1,
								textAlign: 'center',
								width: 30,
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
						<div style={{ width: 540 }}>
							<img
								width="100%"
								src={carousel1}
								alt="Fotos carousel"
							/>
						</div>
						<div style={{ width: 540 }}>
							<img
								width="100%"
								src={carousel2}
								alt="Fotos carousel"
							/>
						</div>
						<div style={{ width: 540 }}>
							<img width="100%" src={carousel3} />
						</div>
						<div style={{ width: 540 }}>
							<img width="100%" src={carousel4} />
						</div>
						<div style={{ width: 540 }}>
							<img width="100%" src={carousel5} />
						</div>
						<div style={{ width: 540 }}>
							<img width="100%" src={carousel6} />
						</div>
					</ReactSimplyCarousel>
				)}
		</>
	);
};

export default Carousel;
