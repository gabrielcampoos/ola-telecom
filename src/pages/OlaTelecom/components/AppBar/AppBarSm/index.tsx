/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Empresa', 'Contato', 'Blog'];

const ResponsiveAppBarSm = () => {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const navigate = useNavigate();

	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>,
		index: number,
	) => {
		const Home = document.getElementById('home');
		const Empresa = document.getElementById('empresa');
		const Contato = document.getElementById('contato');
		const Blog = document.getElementById('blog');

		if (pages[index] === 'Home') {
			const url = window.location.href;
			if (url !== '/ola-telecom') {
				navigate('/ola-telecom');
			}

			setOpen(false);
			Home!.scrollIntoView({ behavior: 'smooth' });
		}

		if (pages[index] === 'Empresa') {
			setOpen(false);
			navigate('/ola-telecom-empresa');
		}

		if (pages[index] === 'Contato') {
			setOpen(false);
			Contato!.scrollIntoView({ behavior: 'smooth' });
		}

		if (pages[index] === 'Blog') {
			setOpen(false);
			Blog!.scrollIntoView({ behavior: 'smooth' });
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
					width: '100%',
					height: '10vh',
					background: 'transparent',
				}}
			>
				<AppBar
					sx={{
						position: 'static',
						backgroundColor: 'transparent',
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Container
						sx={{
							width: '100%',
							height: '100%',
							background: 'transparent',
						}}
					>
						<Toolbar
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								background: 'transparent',
							}}
						>
							<Box
								textAlign="center"
								component="img"
								width="30%"
								src="https://olanet.com.br/wp-content/uploads/2021/03/ola-telecom-logotipo-colorido-versao-02.png"
								ml={15}
							/>
							<Box textAlign="end" ml={11} pt={6}>
								<ButtonGroup
									color="warning"
									variant="contained"
									ref={anchorRef}
									aria-label="split button"
								>
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
										zIndex: 2,
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
														{pages.map(
															(option, index) => (
																<MenuItem
																	key={option}
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
			</Box>
		</React.Fragment>
	);
};

export default ResponsiveAppBarSm;
