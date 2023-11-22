import { Box, CardActionArea, Container, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import {
	default as ControlledRadioButtonsGroupBasic,
	default as ControlledRadioButtonsGroupIndividual,
} from '../../ListaServico';
import ListaServicoBlack from '../../ListaServico/ListaServicoBlack';
import ListaServicoGold from '../../ListaServico/ListaServicoGold';
import ListaServicoPlatinum from '../../ListaServico/ListaServicoPlatinum';
import SnackbarCookies from '../../Snackbar';

export default function ActionAreaCard() {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [link, setLink] = useState('');
	return (
		<>
			{/* INDIVIDUAL */}
			<Card
				sx={{
					width: '100%',
					backgroundColor: '#f6b332',
					padding: '0.2rem 0.2rem',
				}}
			>
				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<CardActionArea>
						<CardContent>
							<Typography
								gutterBottom
								color={'#000'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
								textAlign="center"
							>
								PLANO INDIVIDUAL
							</Typography>

							<Typography variant="body2" textAlign="center">
								{/* <span
									style={{
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '400',
										fontSize: '1.5rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									De 80,00 por
									<br />
									<span
										style={{
											color: '#fff',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '700',
											fontSize: '2rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											WebkitTextStrokeWidth: '1px',
											WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 70,00 <br />
									</span>
									por mês
								</span> */}

								<span
									style={{
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '700',
										fontSize: '1.7rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									<br />
									<span
										style={{
											color: '#000',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '400',
											fontSize: '1.7rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											// WebkitTextStrokeWidth: '1px',
											// WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 119,97 <br />
									</span>
									Mensal
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ControlledRadioButtonsGroupIndividual />

					<Box
						id="btnIndividual"
						component="button"
						width="70%"
						height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
						onClick={(e) => {
							e.preventDefault();
							setOpen(true);

							const btnIndividual =
								document.getElementById('btnIndividual');
							const individual =
								'https://sistema.appbarber.com.br/assinatura/?tk=e8cc69948558c6f17645f955c4bdf4c1';

							if (btnIndividual?.id === 'btnIndividual') {
								setLink(individual);
							}
						}}
					>
						{/* <a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PLUS.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none' }}
						> */}
						<Box
							width="95%"
							height="90%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							top="0.2rem"
							left="0.3rem"
							sx={{
								backgroundColor: 'transparent',
							}}
						></Box>

						<Typography
							color={'whitesmoke'}
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							fontSize="1.5rem"
							letterSpacing="0.1rem"
						>
							ASSINAR
						</Typography>
						{/* </a> */}
					</Box>
				</Container>
			</Card>
			{/* BASIC */}
			<Card
				sx={{
					width: '100%',
					backgroundColor: '#f6b332',
					padding: '0.2rem 0.2rem',
				}}
			>
				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<CardActionArea>
						<CardContent>
							<Typography
								gutterBottom
								color={'#000'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
								textAlign="center"
							>
								PLANO BASIC
							</Typography>

							<Typography variant="body2" textAlign="center">
								<span
									style={{
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '700',
										fontSize: '1.7rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									<br />
									<span
										style={{
											color: '#000',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '400',
											fontSize: '1.7rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											// WebkitTextStrokeWidth: '1px',
											// WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 150,00 <br />
									</span>
									Mensal
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ControlledRadioButtonsGroupBasic />

					<Box
						id="btnBasic"
						component="button"
						width="70%"
						height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
						onClick={(e) => {
							e.preventDefault();
							setOpen(true);

							const btnBasic =
								document.getElementById('btnBasic');
							const basic =
								'https://sistema.appbarber.com.br/assinatura/?tk=e8cc69948558c6f17645f955c4bdf4c1';

							if (btnBasic?.id === 'btnBasic') {
								setLink(basic);
							}
						}}
					>
						{/* <a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PLUS.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none' }}
						> */}
						<Box
							width="95%"
							height="90%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							top="0.2rem"
							left="0.3rem"
							sx={{
								backgroundColor: 'transparent',
							}}
						></Box>

						<Typography
							color={'whitesmoke'}
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							fontSize="1.5rem"
							letterSpacing="0.1rem"
						>
							ASSINAR
						</Typography>
						{/* </a> */}
					</Box>
				</Container>
			</Card>

			{/* GOLD */}

			<Card
				sx={{
					width: '100%',
					backgroundColor: '#f6b332',
					padding: '0.2rem 0.2rem',
				}}
			>
				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<CardActionArea>
						<CardContent>
							<Typography
								gutterBottom
								color={'#000'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
								textAlign="center"
							>
								PLANO GOLD
							</Typography>

							<Typography variant="body2" textAlign="center">
								<span
									style={{
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '700',
										fontSize: '1.7rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									<br />
									<span
										style={{
											color: '#000',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '400',
											fontSize: '1.7rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											// WebkitTextStrokeWidth: '1px',
											// WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 225,00 <br />
									</span>
									Mensal
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ListaServicoGold />
					<Box
						id="btnGold"
						component="button"
						width="70%"
						height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
						onClick={(e) => {
							e.preventDefault();
							setOpen(true);

							const btnGold = document.getElementById('btnGold');
							const gold =
								'https://sistema.appbarber.com.br/assinatura/?tk=e8cc69948558c6f17645f955c4bdf4c1';

							if (btnGold?.id === 'btnGold') {
								setLink(gold);
							}
						}}
					>
						{/* <a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PREMIUM.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none' }}
						> */}
						<Box
							width="95%"
							height="90%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							top="0.2rem"
							left="0.3rem"
							sx={{
								backgroundColor: 'transparent',
							}}
						></Box>
						<Typography
							color={'whitesmoke'}
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							fontSize="1.5rem"
							letterSpacing="0.1rem"
						>
							ASSINAR
						</Typography>
						{/* </a> */}
					</Box>
				</Container>
			</Card>

			{/* PLATINUM */}

			<Card
				sx={{
					width: '100%',
					backgroundColor: '#f6b332',
					padding: '0.2rem 0.2rem',
				}}
			>
				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<CardActionArea>
						<CardContent>
							<Typography
								gutterBottom
								color={'#000'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
								textAlign="center"
							>
								PLANO PLATINUM
							</Typography>

							<Typography variant="body2" textAlign="center">
								<span
									style={{
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '700',
										fontSize: '1.7rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									<br />
									<span
										style={{
											color: '#000',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '400',
											fontSize: '1.7rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											// WebkitTextStrokeWidth: '1px',
											// WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 300,00 <br />
									</span>
									Mensal
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ListaServicoPlatinum />
					<Box
						id="btnPlatinum"
						component="button"
						width="70%"
						height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
						onClick={(e) => {
							e.preventDefault();
							setOpen(true);

							const btnPlatinum =
								document.getElementById('btnPlatinum');
							const platinum =
								'https://sistema.appbarber.com.br/assinatura/?tk=e8cc69948558c6f17645f955c4bdf4c1';
							if (btnPlatinum?.id === 'btnPlatinum') {
								setLink(platinum);
							}
						}}
					>
						{/* <a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano MEDIUM.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none' }}
						> */}
						<Box
							width="95%"
							height="90%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							top="0.2rem"
							left="0.3rem"
							sx={{
								backgroundColor: 'transparent',
							}}
						></Box>
						<Typography
							color={'whitesmoke'}
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							fontSize="1.5rem"
							letterSpacing="0.1rem"
						>
							ASSINAR
						</Typography>
						{/* </a> */}
					</Box>
				</Container>
			</Card>

			{/* BLACK */}

			<Card
				sx={{
					width: '100%',
					backgroundColor: '#f6b332',
					padding: '0.2rem 0.2rem',
				}}
			>
				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<CardActionArea>
						<CardContent>
							<Typography
								gutterBottom
								color={'#000'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
								textAlign="center"
							>
								PLANO BLACK
							</Typography>

							<Typography variant="body2" textAlign="center">
								<span
									style={{
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '700',
										fontSize: '1.7rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									<br />
									<span
										style={{
											color: '#000',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '400',
											fontSize: '1.7rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											// WebkitTextStrokeWidth: '1px',
											// WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 349,90 <br />
									</span>
									Mensal
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ListaServicoBlack />
					<Box
						id="btnBlack"
						component="button"
						width="70%"
						height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
						onClick={(e) => {
							e.preventDefault();
							setOpen(true);

							const btnBlack =
								document.getElementById('btnBlack');
							const black =
								'https://sistema.appbarber.com.br/assinatura/?tk=e8cc69948558c6f17645f955c4bdf4c1';

							if (btnBlack?.id === 'btnBlack') {
								setLink(black);
							}
						}}
					>
						{/* <a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PRO.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none' }}
						> */}
						<Box
							width="95%"
							height="90%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							top="0.2rem"
							left="0.3rem"
							sx={{
								backgroundColor: 'transparent',
							}}
						></Box>
						<Typography
							color={'whitesmoke'}
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							fontSize="1.5rem"
							letterSpacing="0.1rem"
						>
							ASSINAR
						</Typography>
						{/* </a> */}
					</Box>
				</Container>
			</Card>
			{/* <Modal
				open={open}
				setOpen={setOpen}
				link={link}
				setLink={setLink}
			/> */}
			<SnackbarCookies
				open={open}
				setOpen={setOpen}
				link={link}
				setLink={setLink}
			/>
		</>
	);
}
