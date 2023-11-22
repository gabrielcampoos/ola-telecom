import {
	SnackbarContent,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';
import { SetStateAction } from 'react';

type TransitionProps = Omit<SlideProps, 'direction'>;

interface IModal {
	context?: 'cancelar' | 'aceitar';
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
	link: string;
	setLink: React.Dispatch<SetStateAction<string>>;
}

function TransitionLeft(props: TransitionProps) {
	return <Slide {...props} direction="left" />;
}

function TransitionUp(props: TransitionProps) {
	return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
	return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
	return <Slide {...props} direction="down" />;
}

const SnackbarCookies: React.FC<IModal> = ({
	open,
	setOpen,
	link,
	setLink,
}) => {
	// const [open, setOpen] = React.useState(false);
	const [transition, setTransition] = React.useState<
		React.ComponentType<TransitionProps> | undefined
	>(undefined);
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const handleClick =
		(Transition: React.ComponentType<TransitionProps>) => () => {
			setTransition(() => Transition);
			setOpen(true);
		};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{(smDown && (
				<>
					<Snackbar
						sx={{
							width: '100%',
							zIndex: '9999999999',
						}}
						open={open}
						onClose={handleClose}
						TransitionComponent={transition}
						key={transition ? transition.name : ''}
						role="contentinfo"
					>
						<SnackbarContent
							role="contentinfo"
							sx={{
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: '#fff',
							}}
							message={
								<Box
									width="100%"
									display="flex"
									flexDirection="column"
									alignItems="center"
									justifyContent="center"
									gap={8}
								>
									<Typography
										color="red"
										gutterBottom
										fontFamily="Khand, sans-serif"
										fontWeight={700}
										fontSize="2.3rem"
										letterSpacing="0.1rem"
										textAlign="center"
									>
										ATENÇÃO!
									</Typography>
									<Typography
										color="#000"
										fontFamily="Khand, sans-serif"
										fontWeight="700"
										fontSize="1rem"
										// letterSpacing="0.1rem"
										textAlign="justify"
									>
										Em caso de cancelamento, pedimos que nos
										informe com no mínimo{' '}
										<span style={{ color: 'red' }}>
											TRÊS HORAS
										</span>{' '}
										de antecedência ou o serviço será
										debitado normalmente por falta de aviso.
									</Typography>
									<Box
										width="100%"
										display="flex"
										alignItems="center"
										justifyContent="flex-end"
									>
										<Button
											onClick={() => setOpen(false)}
											color="error"
											sx={{
												fontFamily: 'Khand, sans-serif',
												fontWeight: '600',
												fontSize: '1.2rem',
											}}
										>
											Voltar
										</Button>
										<Button
											href={link}
											autoFocus
											sx={{
												fontFamily: 'Khand, sans-serif',
												fontWeight: '600',
												fontSize: '1.2rem',
												color: '#000',
											}}
										>
											Continuar
										</Button>
									</Box>
								</Box>
							}
						/>
					</Snackbar>
				</>
			)) ||
				(mdDown && (
					<>
						<Snackbar
							sx={{
								width: '100%',
								zIndex: '9999999999',
							}}
							open={open}
							onClose={handleClose}
							TransitionComponent={transition}
							key={transition ? transition.name : ''}
							role="contentinfo"
						>
							<SnackbarContent
								role="contentinfo"
								sx={{
									width: '100%',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: '#fff',
								}}
								message={
									<Box
										width="100%"
										display="flex"
										flexDirection="column"
										alignItems="center"
										justifyContent="center"
										gap={8}
									>
										<Typography
											color="red"
											gutterBottom
											fontFamily="Khand, sans-serif"
											fontWeight={700}
											fontSize="2.3rem"
											letterSpacing="0.1rem"
											textAlign="center"
										>
											ATENÇÃO!
										</Typography>
										<Typography
											color="#000"
											fontFamily="Khand, sans-serif"
											fontWeight="700"
											fontSize="1.2rem"
											// letterSpacing="0.1rem"
											textAlign="justify"
										>
											Em caso de cancelamento, pedimos que
											nos informe com no mínimo{' '}
											<span style={{ color: 'red' }}>
												TRÊS HORAS
											</span>{' '}
											de antecedência ou o serviço será
											debitado normalmente por falta de
											aviso.
										</Typography>
										<Box
											width="100%"
											display="flex"
											alignItems="center"
											justifyContent="flex-end"
										>
											<Button
												onClick={() => setOpen(false)}
												color="error"
												sx={{
													fontFamily:
														'Khand, sans-serif',
													fontWeight: '600',
													fontSize: '1.2rem',
												}}
											>
												Voltar
											</Button>
											<Button
												href={link}
												autoFocus
												sx={{
													fontFamily:
														'Khand, sans-serif',
													fontWeight: '600',
													fontSize: '1.2rem',
													color: '#000',
												}}
											>
												Continuar
											</Button>
										</Box>
									</Box>
								}
							/>
						</Snackbar>
					</>
				)) || (
					<>
						<Snackbar
							sx={{
								width: '100%',
								zIndex: '9999999999',
							}}
							open={open}
							onClose={handleClose}
							TransitionComponent={transition}
							key={transition ? transition.name : ''}
							role="contentinfo"
						>
							<SnackbarContent
								role="contentinfo"
								sx={{
									width: '100%',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: '#fff',
								}}
								message={
									<Box
										width="100%"
										display="flex"
										flexDirection="column"
										alignItems="center"
										justifyContent="center"
										gap={8}
									>
										<Typography
											color="red"
											gutterBottom
											fontFamily="Khand, sans-serif"
											fontWeight={700}
											fontSize="2.3rem"
											letterSpacing="0.1rem"
											textAlign="center"
										>
											ATENÇÃO!
										</Typography>
										<Typography
											color="#000"
											fontFamily="Khand, sans-serif"
											fontWeight="700"
											fontSize="1.3rem"
											// letterSpacing="0.1rem"
											textAlign="justify"
										>
											Em caso de cancelamento, pedimos que
											nos informe com no mínimo{' '}
											<span style={{ color: 'red' }}>
												TRÊS HORAS
											</span>{' '}
											de antecedência ou o serviço será
											debitado normalmente por falta de
											aviso.
										</Typography>
										<Box
											width="100%"
											display="flex"
											alignItems="center"
											justifyContent="flex-end"
										>
											<Button
												onClick={() => setOpen(false)}
												color="error"
												sx={{
													fontFamily:
														'Khand, sans-serif',
													fontWeight: '600',
													fontSize: '1.2rem',
												}}
											>
												Voltar
											</Button>
											<Button
												href={link}
												autoFocus
												sx={{
													fontFamily:
														'Khand, sans-serif',
													fontWeight: '600',
													fontSize: '1.2rem',
													color: '#000',
												}}
											>
												Continuar
											</Button>
										</Box>
									</Box>
								}
							/>
						</Snackbar>
					</>
				)}
		</>
	);
};

export default SnackbarCookies;
