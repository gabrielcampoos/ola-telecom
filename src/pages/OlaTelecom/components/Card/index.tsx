import CheckIcon from '@mui/icons-material/Check';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface ICard {
	id?: string;
	mb: number;
	preco: number;
	dispositivo: string;
	tv: string;
}

const BasicCard: React.FC<ICard> = ({ id, mb, preco, dispositivo, tv }) => {
	return (
		<CardContent key={id}>
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					color: '#fff',
					fontWeight: '700',
					background: 'rgb(250, 131, 0)',
					borderRadius: 5,
					filter: 'drop-shadow(20px 20px 20px black) ',
					padding: '2rem 0',

					gap: 3,
				}}
			>
				<Typography
					sx={{
						color: '#fff',
						fontSize: '2rem',
						width: '100%',
						textAlign: 'center',
						fontWeight: '700',
						borderBottom: '1px solid #fff',
					}}
				>
					{mb === 150 ? (
						<>
							<Typography
								sx={{
									color: '#fff',
									fontSize: '2rem',
									width: '100%',
									textAlign: 'center',
									fontWeight: '700',
									borderBottom: '1px solid #fff',
								}}
							>
								{mb}mb
							</Typography>
							<Typography
								className="textStyled"
								fontSize="1rem"
								position="absolute"
								top="0"
								pt={2}
								right={1}
								color="#fff"
								fontWeight="700"
							>
								<span>P</span>
								<span>O</span>
								<span>P</span>
								<span>U</span>
								<span>L</span>
								<span>A</span>
								<span>R</span>
							</Typography>
						</>
					) : (
						<Typography
							sx={{
								color: '#fff',
								fontSize: '2rem',
								width: '100%',
								textAlign: 'center',
								fontWeight: '700',
								borderBottom: '1px solid #fff',
							}}
						>
							{mb}mb
						</Typography>
					)}
				</Typography>

				<Typography>
					R${' '}
					<span
						style={{
							fontSize: '2rem',
							fontWeight: '700',
						}}
					>
						{preco}
						<br />
					</span>
					/mês
				</Typography>
				<Typography>
					<CheckIcon />
					{mb}mb de download
				</Typography>
				<Typography>
					<CheckIcon />
					Ideal para {dispositivo} dispositivos
				</Typography>
				<Typography>
					<CheckIcon />
					Ideal para {tv} TV
				</Typography>
				<Button
					sx={{
						width: '130px',
						background: '#294767',
						color: '#fff',
						fontWeight: '700',
						filter: 'drop-shadow(4px 4px 10px #FF7173) ',
					}}
				>
					Eu quero!
				</Button>
			</Container>
		</CardContent>
	);
};

export default BasicCard;
