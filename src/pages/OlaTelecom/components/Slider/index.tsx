/* eslint-disable import-helpers/order-imports */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import { useMediaQuery, useTheme } from '@mui/material';
import Banner from '../Banner/part-1';
import BannerPersona from '../Banner/part-2';
import BannerPersonaWomam from '../Banner/part-3';

export default function Slider() {
	const theme = useTheme();

	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 4000,
				}}
				modules={[EffectFade, Navigation, Pagination, Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>{Banner}</SwiperSlide>
				<SwiperSlide>{BannerPersona}</SwiperSlide>
				<SwiperSlide>{BannerPersonaWomam}</SwiperSlide>
			</Swiper>
		</>
	);
}
