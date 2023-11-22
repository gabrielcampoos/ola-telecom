import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import CustomAnimation from '../../CustomAnimation';

const CarouselMobile = () => {
	return (
		<Carousel
			fade
			slide
			indicators={false}
			style={{
				backgroundColor: 'rgb(246, 179, 50)',
				width: '100%',
				height: '70vh',
			}}
		>
			<Carousel.Item
				interval={4000}
				style={{ width: '100%', height: '100%' }}
			>
				<CustomAnimation>
					<Container
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '100%',
						}}
					>
						<h1
							style={{
								fontSize: '5rem',
								fontWeight: '700',
								color: '#000',
								fontFamily: 'Khand, sans-serif',
								textTransform: 'uppercase',
								transform:
									'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
								transformOrigin: ' 50% 50% 0px',
								whiteSpace: 'nowrap',
								marginBottom: '2rem',
								marginTop: '6rem',
								letterSpacing: '0px',
								padding: '0px',
								lineHeight: '4.5rem',
								borderWidth: '0px',
								minHeight: ' 0px',
								minWidth: ' 0px',
								maxHeight: 'none',
								maxWidth: 'none',
							}}
						>
							Tudo que
							<br />
							<span
								style={{
									color: '#fff',
								}}
							>
								você
							</span>
							<br />
							precisa
						</h1>
						<p
							style={{
								fontSize: '1.7rem',
								letterSpacing: '0.07rem',
								fontFamily: 'Khand, sans-serif',
								color: '#fff',
								// fontWeight: 'bold',
							}}
						>
							e um{' '}
							<span style={{ color: '#000', fontWeight: '600' }}>
								ambiente
							</span>
							<br />
							pensado em{' '}
							<span style={{ color: '#000', fontWeight: '600' }}>
								você
							</span>
						</p>
					</Container>
				</CustomAnimation>
			</Carousel.Item>

			{/* <Carousel.Item
				interval={4000}
				style={{
					width: '100%',
					height: '100%',
				}}
			>
				<Container
					disableGutters
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '100%',
						// position: 'relative',
						// top: '-7rem',
					}}
				>
					<div
						// className="tp-caption   tp-resizeme"
						// id="slide-15-layer-6"
						// data-x="['left','left','left','left']"
						// data-hoffset="['429','429','191','-7']"
						// data-y="['top','top','top','top']"
						// data-voffset="['-1','-1','0','-154']"
						// data-width="none"
						// data-height="none"
						// data-whitespace="nowrap"
						// data-type="image"
						// data-responsive_offset="on"
						// data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
						// data-textAlign="['inherit','inherit','inherit','inherit']"
						// data-paddingtop="[0,0,0,0]"
						// data-paddingright="[0,0,0,0]"
						// data-paddingbottom="[0,0,0,0]"
						// data-paddingleft="[0,0,0,0]"
						style={{
							// zIndex: '5',
							// position: 'relative',
							// top: '7rem',
							width: '100%',
							height: '70vh',
						}}
					>
						<img
							src="https://seuelias.com/v2018/wp-content/uploads/2021/12/Use-Baboon-Adquira-agora-mesmo.png"
							alt=""
							// data-ww="['364px','364px','364px','493px']"
							// data-hh="['682px','682px','682px','925px']"
							width="100%"
							height="100%"
							// height="100%"
							// data-no-retina
						/>
						<div
							// id="slide-15-layer-7"
							// data-x="['left','left','left','left']"
							// data-hoffset="['479','479','247','99']"
							// data-y="['top','top','top','top']"
							// data-voffset="['120','120','115','142']"
							// data-width="none"
							// data-height="none"
							// data-whitespace="nowrap"
							// data-type="image"
							// data-actions='[{"event":"click","action":"simplelink","target":"_self","url":"https:\/\/seuelias.com\/loja\/ ","delay":""}]'
							// data-responsive_offset="on"
							// data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
							// data-textAlign="['inherit','inherit','inherit','inherit']"
							// data-paddingtop="[0,0,0,0]"
							// data-paddingright="[0,0,0,0]"
							// data-paddingbottom="[0,0,0,0]"
							// data-paddingleft="[0,0,0,0]"
							style={{
								// zIndex: '6',
								position: 'relative',
								top: '-28rem',
								textAlign: 'center',
								transition:
									'[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]',
							}}
						>
							<img
								src="https://seuelias.com/v2018/wp-content/uploads/2021/12/unnamed-file.png"
								alt=""
								width="70%"
								// height="50%"
								// data-ww="['262px','262px','262px','293px']"
								// data-hh="['177px','177px','177px','198px']"
								// width="262"
								// height="177"
								// data-no-retina
							/>
						</div>
					</div>

					<div
						// id="slide-15-layer-9"
						// data-x="['left','left','left','left']"
						// data-hoffset="['474','474','237','84']"
						// data-y="['top','top','top','top']"
						// data-voffset="['343','343','330','403']"
						// data-fontsize="['20','20','20','20']"
						// data-lineheight="['22','22','22','22']"
						// data-fontweight="['400','400','400','400']"
						// data-width="none"
						// data-height="none"
						// data-whitespace="nowrap"
						// data-type="image"
						// data-responsive_offset="on"
						// data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
						// data-textAlign="['inherit','inherit','inherit','inherit']"
						// data-paddingtop="[0,0,0,0]"
						// data-paddingright="[0,0,0,0]"
						// data-paddingbottom="[0,0,0,0]"
						// data-paddingleft="[0,0,0,0]"
						style={{
							// zIndex: '7',
							position: 'relative',
							top: '-15rem',
							transition:
								'[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]',
						}}
					>
						<img
							src="https://seuelias.com/v2018/wp-content/uploads/2021/12/para-o-seu-estilo.png"
							alt=""
							// data-ww="['277','277','277','321px']"
							// data-hh="['57','57','57','66px']"
							// width="277"
							// height="57"
							// data-no-retina
						/>
					</div>
				</Container>
			</Carousel.Item> */}
			<Carousel.Item
				interval={4000}
				style={{
					width: '100%',
					height: '70vh',
					backgroundColor: '#000',
				}}
			>
				<CustomAnimation>
					<Container
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '100%',
							backgroundColor: '#000',
						}}
					>
						<h1
							style={{
								fontSize: '5rem',
								fontWeight: '700',
								color: '#fff',
								fontFamily: 'Khand, sans-serif',
								textTransform: 'uppercase',
								transform:
									'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
								transformOrigin: ' 50% 50% 0px',
								whiteSpace: 'nowrap',
								marginBottom: '2rem',
								marginTop: '6rem',
								letterSpacing: '0px',
								padding: '0px',
								lineHeight: '4.5rem',
								borderWidth: '0px',
								minHeight: ' 0px',
								minWidth: ' 0px',
								maxHeight: 'none',
								maxWidth: 'none',
							}}
						>
							Se torne
							<br />
							<span
								style={{
									color: '#f6b332',
								}}
							>
								membro
							</span>
							<br />
							do{' '}
							<span
								style={{
									color: '#f6b332',
								}}
							>
								clube
							</span>
						</h1>
						<p
							style={{
								fontSize: '1.6rem',
								fontFamily: 'Khand, sans-serif',
								color: '#fff',
							}}
						>
							conheça nossos{' '}
							<span
								style={{
									color: '#f6b332',
									fontWeight: '600',
								}}
							>
								planos
							</span>
						</p>
					</Container>
				</CustomAnimation>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselMobile;
