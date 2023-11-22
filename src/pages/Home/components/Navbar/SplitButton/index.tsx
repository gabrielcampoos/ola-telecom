/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import * as React from 'react';

import Logo from '../../../../../assets/images/douglascoiffeur-logo.png';
import Aviso from '../../Aviso';

const options = [
	'ASSINATURAS',
	'BOOKSY',
	'UNIDADE',
	'SERVIÇOS',
	'SOBRE',
	'AGENDAR',
];

const SplitButton = () => {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	// const handleClick = () => {
	// 	if (options[selectedIndex] === 'BOOKSY') {
	// 		console.info(`You clicked ${options[selectedIndex]}`);
	// 	}
	// };

	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>,
		index: number,
	) => {
		const MockupMobileRef = document.getElementById('MockupMobileRef');
		const AssinaturasMobile = document.getElementById('AssinaturasMobile');
		const ComoChegarMobile = document.getElementById('ComoChegarMobile');
		const ServicosMobile = document.getElementById('ServicosMobile');
		const SobreMobile = document.getElementById('SobreMobile');
		// console.log(options[index]);

		if (options[index] === 'BOOKSY') {
			setOpen(false);
			MockupMobileRef!.scrollIntoView({ behavior: 'smooth' });
		}

		if (options[index] === 'ASSINATURAS') {
			setOpen(false);
			AssinaturasMobile!.scrollIntoView({ behavior: 'smooth' });
		}

		if (options[index] === 'UNIDADE') {
			setOpen(false);
			ComoChegarMobile!.scrollIntoView({ behavior: 'smooth' });
		}

		if (options[index] === 'SERVIÇOS') {
			setOpen(false);
			ServicosMobile!.scrollIntoView({ behavior: 'smooth' });
		}

		if (options[index] === 'SOBRE') {
			setOpen(false);
			SobreMobile!.scrollIntoView({ behavior: 'smooth' });
		}

		if (options[index] === 'AGENDAR') {
			setOpen(false);
			MockupMobileRef!.scrollIntoView({ behavior: 'smooth' });
		}

		setSelectedIndex(index);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	return (
		<React.Fragment>
			<Box
				sx={{
					flexGrow: 1,
					backgroundColor: '#000',
					width: '100%',
					height: '20vh',
				}}
			>
				<AppBar
					sx={{
						position: 'static',
						backgroundColor: '#000',
						width: '100%',
						height: '100%',
					}}
				>
					<Container
						sx={{
							width: '100%',
							height: '100%',
						}}
					>
						<Toolbar
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								zIndex: '99999',
							}}
						>
							<Box
								width="90%"
								height="100%"
								textAlign="center"
								display="flex"
								alignItems="center"
								justifyContent="center"
							>
								{/* <Typography
									component="h1"
									variant="h6"
									color="#fff"
									fontSize={20}
									lineHeight="3.5rem"
									fontFamily="Khand, sans-serif"
									fontWeight={700}
									zIndex="1"
									textAlign="center"
								>
									<span style={{ color: '#f6b332' }}>[</span>{' '}
									DOUGLAS{' '}
									<span style={{ color: '#f6b332' }}>
										COIFFEUR
									</span>{' '}
									]
								</Typography> */}

								<img
									width="70%"
									// height="100vh"
									alt="Logo Douglet's Barbearia"
									src={Logo}
									style={{
										padding: '3.3rem 0 2rem 3rem',
										textAlign: 'center',
									}}
								/>
							</Box>

							<Box alignSelf="flex-end" width="5%">
								<ButtonGroup
									color="inherit"
									variant="outlined"
									ref={anchorRef}
									aria-label="split button"
								>
									{/* <Button onClick={handleClick}>
									{options[selectedIndex]}
								</Button> */}
									<Button
										size="small"
										aria-controls={
											open
												? 'split-button-menu'
												: undefined
										}
										aria-expanded={
											open ? 'true' : undefined
										}
										aria-label="select merge strategy"
										aria-haspopup="menu"
										onClick={handleToggle}
									>
										<MenuIcon fontSize="small" />
									</Button>
								</ButtonGroup>
								<Popper
									sx={{
										zIndex: 1,
									}}
									open={open}
									anchorEl={anchorRef.current}
									role={undefined}
									transition
									disablePortal
								>
									{({ TransitionProps, placement }) => (
										<Grow
											{...TransitionProps}
											style={{
												transformOrigin:
													placement === 'bottom'
														? 'center top'
														: 'center bottom',
											}}
										>
											<Paper>
												<ClickAwayListener
													onClickAway={handleClose}
												>
													<MenuList
														id="split-button-menu"
														autoFocusItem
													>
														{options.map(
															(option, index) => (
																<MenuItem
																	key={option}
																	// disabled={index === 2}
																	// selected={index === selectedIndex}
																	onClick={(
																		event,
																	) =>
																		handleMenuItemClick(
																			event,
																			index,
																		)
																	}
																>
																	{option}
																</MenuItem>
															),
														)}
													</MenuList>
												</ClickAwayListener>
											</Paper>
										</Grow>
									)}
								</Popper>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
				<Box
					width="100%"
					height="2vh"
					sx={{
						backgroundColor: 'red',
						zIndex: '2',
						position: 'relative',
					}}
				>
					<Typography
						gutterBottom
						color="whitesmoke"
						fontFamily="Khand, sans-serif"
						fontWeight={700}
						fontSize="0.6rem"
						letterSpacing="0.1rem"
						textAlign="center"
					>
						<Aviso />
					</Typography>
				</Box>
			</Box>
		</React.Fragment>
	);
};

export default SplitButton;
