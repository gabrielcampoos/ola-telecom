// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import Banner from '../Banner/part-1';
import BannerPersona from '../Banner/part-2';
import BannerPersonaWomam from '../Banner/part-3';

export default function Slider() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Navigation, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>{Banner}</SwiperSlide>
				<SwiperSlide>{BannerPersona}</SwiperSlide>
				<SwiperSlide>{BannerPersonaWomam}</SwiperSlide>
			</Swiper>
		</>
	);
}
