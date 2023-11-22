import { Box, Container, Typography } from '@mui/material';

import Local from '../../../../../assets/images/local.jpeg';
import CardGrid from '../../Card';

const AssinaturasMobile = () => {
	return (
		<Box
			component="main"
			id="AssinaturasMobile"
			width="100%"
			height="100%"
			padding="2rem 0"
			sx={{
				backgroundColor: '#000',
			}}
		>
			<Box
				width="100%"
				height="15vh"
				display="flex"
				alignContent="center"
				alignItems="center"
			>
				<Typography
					width="100%"
					color={'white'}
					fontFamily="Khand, sans-serif"
					fontWeight={700}
					fontSize="2.3rem"
					letterSpacing="0.1rem"
					zIndex="2"
					position="absolute"
					textAlign="center"
				>
					DOUGLA&apos;S CLUB
				</Typography>
				<Box
					width="100%"
					height="100%"
					position="relative"
					sx={{
						backgroundImage: `url(${Local})`,
						backgroundSize: 'cover',
						backgroundPosition: ' 100% 50% ',
						backgroundRepeat: 'no-repeat',
						opacity: '50%',
						zIndex: '1',
					}}
				></Box>
			</Box>

			<Container
				component="main"
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 5,
					marginTop: '2rem',
				}}
			>
				<Box
					component="button"
					width="100%"
					height="11%"
					border="none"
					borderRadius="0.5rem"
					zIndex="999999999999"
					position="relative"
					sx={{
						backgroundColor: '#f6b332',
					}}
				>
					<Box
						width="100%"
						height="100%"
						border="0.15rem solid #f6b332"
						borderRadius="0.5rem"
						position="absolute"
						top="0.2rem"
						sx={{
							backgroundColor: 'transparent',
						}}
					></Box>
					<Typography
						color={'HighlightText'}
						fontFamily="Khand, sans-serif"
						fontWeight={700}
						fontSize="2.3rem"
						letterSpacing="0.1rem"
					>
						QUERO SER MEMBRO
					</Typography>
				</Box>
				<Box component="section" width="100%">
					<Typography
						component="p"
						color={'whitesmoke'}
						textAlign="justify"
					>
						Sabe aquele dia em que você tem um{' '}
						<span style={{ color: '#f6b332' }}>
							evento importante
						</span>
						, uma reunião, festinha com amigos ou jantar com alguém
						especial e fica{' '}
						<span style={{ color: '#f6b332' }}>
							sentindo-se mal
						</span>{' '}
						pois percebeu que está com o cabelo desajeitado ou com o
						“pézinho” mal feito e cheio de pelos no pescoço? Ou
						quando você está em casa e se lembra que precisa fazer a
						barba, mas aí bate uma preguiça só de pensar em pegar no
						presto barba, deixar a pia toda suja de pelos, aquela
						zona no banheiro!
						<br />
						<br />
						Uma <span style={{ color: '#f6b332' }}>
							solução
						</span>{' '}
						para essas situações seria você fazer a barba toda
						semana na barbearia ou cortar o cabelo com maior
						frequência, certo?{' '}
						<span style={{ color: '#f6b332' }}>Certo!</span> Mas aí
						o custo para manter sua imagem pessoal ficaria alto não
						é mesmo?{' '}
						<span style={{ color: '#f6b332' }}>Errado!</span> E se
						eu te disser que temos a solução perfeita pra você!
						<br />
						<br />{' '}
						<span style={{ color: '#f6b332' }}>
							Um clube de assinatura de cabelo e barba!
						</span>{' '}
						Que tal vir na barbearia alinhar sua barba e seu cabelo
						toda semana e pagar apenas um{' '}
						<span style={{ color: '#f6b332' }}>
							valor fixo por mês
						</span>{' '}
						pra isso? Sem pegadinha, corte e barba toda semana por
						um{' '}
						<span style={{ color: '#f6b332' }}>
							único valor mensal!
						</span>
					</Typography>
				</Box>
				<Box
					component="button"
					width="100%"
					height="11%"
					border="none"
					borderRadius="0.5rem"
					zIndex="999999999999"
					position="relative"
					sx={{
						backgroundColor: '#f6b332',
					}}
				>
					<Box
						width="100%"
						height="100%"
						border="0.15rem solid #f6b332"
						borderRadius="0.5rem"
						position="absolute"
						top="0.2rem"
						sx={{
							backgroundColor: 'transparent',
						}}
					></Box>
					<Typography
						color={'HighlightText'}
						fontFamily="Khand, sans-serif"
						fontWeight={700}
						fontSize="2.3rem"
						letterSpacing="0.1rem"
					>
						ASSINATURAS
					</Typography>
				</Box>
				<CardGrid />
			</Container>
		</Box>
	);
};

export default AssinaturasMobile;
