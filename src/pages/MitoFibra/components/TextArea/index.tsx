import { Box, Container, Typography } from '@mui/material';
import BgMitoFibra from '../../../../assets/images/fibra.jpg';

export const TextArea = () => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Container
				sx={{
					mt: 8,
					boxShadow: '2px 2px 15px #000',
				}}
			>
				<Box
					component="div"
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						pt: 4,
						pb: 10,
					}}
				>
					<Box
						component="img"
						src={BgMitoFibra}
						sx={{
							width: '100%',
						}}
					/>
				</Box>

				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'initial',
						flexDirection: 'column',
						textAlign: 'justify',
						pb: 10,
					}}
				>
					<Typography component="h1" variant="h6" fontWeight="700">
						MITOS E VERDADES SOBRE A FIBRA ÓPTICA
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						Existem muitos mitos e verdades espalhados pela internet
						sobre qualquer assunto, mas você sabe quais são os mitos
						e verdades da fibra óptica? Hoje vamos revelar tudo
						sobre essa tecnologia tão importante que nos mantém
						conectados com o mundo.
					</Typography>

					<Typography
						component="h1"
						variant="h6"
						fontWeight="700"
						mt={3}
					>
						A Fibra Óptica é mais cara
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						MITO! Quando surgiu sim, pois não era um recurso
						popular, mas agora como a demanda do material vem
						crescendo a cada dia, isso fez com que seu custo fosse
						reduzido. O mercado atualmente oferece o serviço a um
						preço acessível, tornando-a vantajosa e econômica em
						relação a outras. A fibra é composta por fibra,
						resultando em mais durabilidade e menos manutenção.
					</Typography>

					<Typography
						component="h1"
						variant="h6"
						fontWeight="700"
						mt={3}
					>
						Mais segura
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						VERDADE! O cabo de fibra óptica é mais seguro em
						comparação aos de cobre, pois transmite dados através da
						luz, gerando menor aquecimento em seu interior. Além
						disso, ele sofre menos interferência, como chuvas e
						ventos. É isso que torna a conexão mais estável.
					</Typography>

					<Typography
						component="h1"
						variant="h6"
						fontWeight="700"
						mt={3}
					>
						A fibra é mais ecológica
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						VERDADE! Ela é ecologicamente correta, e isso acontece
						porque o material que a constitui é mais abundante da
						natureza, além de ter menor gasto de energia elétrica,
						garantindo a prevenção de muitos incêndios provocados
						por falhas técnicas.
					</Typography>

					<Typography
						component="h1"
						variant="h6"
						fontWeight="700"
						mt={3}
					>
						Máxima segurança de dados
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						MITO! Mesmo ela sendo mais segura contra roubos de
						informações, ela não é inviolável. A segurança é maior
						pois para que haja intercepção de dados é necessária uma
						intervenção física e direta. Ela não transmite sinais
						eletromagnéticos, por isso não sofrem interferências com
						facilidade. A fibra óptica, é mais segura em relação aos
						outros cabos, porém ainda possui vulnerabilidade.
					</Typography>

					<Typography
						component="h1"
						variant="h6"
						fontWeight="700"
						mt={3}
					>
						Internet mais rápida
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						VERDADE! Por ser conectada às redes UTP, elas sofrem
						menos atenuação na transmissão do sinal, que são
						compatíveis com conexões de até 100Mbps. Esse valor pode
						ser ultrapassado facilmente se levarmos em consideração
						o potencial da transmissão de dados através da luz.
					</Typography>

					<Typography
						component="h1"
						variant="h6"
						fontWeight="700"
						mt={3}
					>
						Cabos mais frágeis
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						MITO! Apesar de ser composta por vidro, a fibra possui
						alta resistência física a pressão e temperaturas
						extremas. Isso ocorre, pois, a base de sua composição é
						a sílica ultrapura. Mais uma característica que torna
						esse cabo mais resistente, é o seu revestimento, que
						possui Kevlar (fibra sintética de para-aramida),
						ultrapassando até mesmo a resistência do aço. Incrível,
						não? Agora que você já sabe todos os mitos e verdades
						sobre a fibra óptica, que tal entrar em contato com um
						de nossos especialistas e escolher o seu plano ideal?
						Fale conosco!
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};
