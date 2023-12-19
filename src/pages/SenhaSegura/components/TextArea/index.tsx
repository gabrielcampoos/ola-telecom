import { Box, Container, Typography } from '@mui/material';
import BgSenha from '../../../../assets/images/password.jpeg';

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
						src={BgSenha}
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
						CINCO PASSOS PARA UMA SENHA MAIS SEGURA
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						Já parou para pensar que toda nossa vida online depende
						de senhas? De contas de e-mails até acesso a redes
						sociais. Os caracteres devem ser seguros e confiáveis.
						Criar senhas seguras para proteger os seus dados na web
						exige muito mais do que criatividade. É preciso seguir
						alguns cuidados básicos, e é essencial alterá-las
						regularmente. Mas fique tranquilo que vamos te ajudar!
					</Typography>

					<Typography
						component="h1"
						variant="h6"
						fontWeight="700"
						mt={3}
					>
						A ESTRUTURA IDEAL PARA SENHAS SEGURAS
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						Quando nos cadastramos em algum serviço, somos
						orientados a criar uma senha com número mínimo de
						caracteres. Muitos sites, inclusive, não aceitam menos
						que 8 caracteres, e entre eles devem conter minúsculos,
						maiúsculos, números e símbolos. E o recomendado é que
						seguimos essas regrinhas pois favorecem uma criação de
						senha mais segura. Aqui vão 5 dicas: <br />
						<ol>
							<li style={{ paddingBottom: '2px' }}>
								Escolher palavras com pelo menos 8 letras. Ex:
								hostgator
							</li>
							<li style={{ paddingBottom: '2px' }}>
								Trocar letras por símbolos parecidos. Ex:
								ho$tg@tor
							</li>
							<li style={{ paddingBottom: '2px' }}>
								Alterar uma letra por um número parecido. Ex:
								ho$tg@t0r
							</li>
							<li style={{ paddingBottom: '2px' }}>
								Incluir duas letras maiúsculas. Ex: Ho$tG@t0r
							</li>
							<li style={{ paddingBottom: '2px' }}>
								NUNCA repetir senhas!
							</li>
						</ol>
					</Typography>

					<Typography
						component="h1"
						variant="h6"
						fontWeight="700"
						mt={3}
					>
						FIQUE ATENTO E SE PROTEJA!
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						Senhas fáceis e repetidas podem gerar vários incômodos
						desde o vizinho usar o wifi da sua casa como cair em
						algum golpe/fraude na rede. Os perigos dos crimes
						virtuais crescem a cada ano, isso porque os golpistas
						invadem sistemas, divulgam links com “telas falsas” para
						capturar dados e chegam a corromper pessoas para montar
						um verdadeiro banco de dados ilegal. Por isso, para não
						correr esse risco é ideal seguir as dicas de criação de
						senha e ainda para adicionar uma camada a mais de
						segurança, ative sempre a autenticação em dois fatores
						via SMS ou aplicativo, de preferência. Isso significa
						que, além de checar o fator senha, você deverá
						autenticar seu número de celular, ou app, por exemplo.
					</Typography>

					<Typography
						component="h1"
						variant="h6"
						fontWeight="700"
						mt={3}
					>
						GERADOR AUTOMÁTICO DE SENHAS SEGURAS
					</Typography>

					<Typography
						component="text"
						variant="body1"
						fontWeight="400"
					>
						Com essas dicas do post de hoje é muito provável que
						você conseguirá criar senhas seguras e lembrar delas com
						facilidade. Mas, se mesmo assim ainda quiser outra opção
						procure por geradores automáticos como o Dashlane por
						exemplo. Assim você garante senhas mais seguras e contas
						também, trazendo tranquilidade ao navegar na internet.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};
