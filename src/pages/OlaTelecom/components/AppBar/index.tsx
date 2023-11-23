import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import logoBranco from '../../../../assets/images/ola-telecom-logo-branco.png';

const pages = ['Home', 'Empresa', 'Contato', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null,
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					padding: '0.8rem 0',
					backgroundColor: 'transparent',
					borderBottom: '1px solid #FFFFFF73',
				}}
			>
				<Box width="100%">
					<Container maxWidth="md" sx={{ float: 'left' }}>
						<Toolbar
							disableGutters
							sx={{ position: 'relative', left: '9rem' }}
						>
							<Typography
								variant="h6"
								noWrap
								component="a"
								href="#app-bar-with-responsive-menu"
								position="relative"
								left="5rem"
								sx={{
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
									color: 'inherit',
									textDecoration: 'none',
								}}
							>
								<img src={logoBranco} width="40%" />
							</Typography>

							<Box
								sx={{
									flexGrow: 0,
									display: { xs: 'flex', md: 'none' },
								}}
							>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleOpenNavMenu}
									color="inherit"
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={{
										display: { xs: 'block', md: 'none' },
										flexGrow: 0,
									}}
								>
									{pages.map((page) => (
										<MenuItem
											key={page}
											onClick={handleCloseNavMenu}
										>
											<Typography textAlign="center">
												{page}
											</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box>

							<Typography
								variant="h5"
								noWrap
								component="a"
								href="#app-bar-with-responsive-menu"
								sx={{
									mr: 2,
									display: { xs: 'flex', md: 'none' },
									flexGrow: 0,
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
									color: 'inherit',
									textDecoration: 'none',
								}}
							></Typography>
							<Box
								sx={{
									flexGrow: 1,
									display: { xs: 'none', md: 'flex' },
								}}
							>
								{pages.map((page) => (
									<Button
										key={page}
										onClick={handleCloseNavMenu}
										sx={{
											my: 2,
											color: 'white',
											display: 'block',
											padding: '0 20px',
											fontSize: '0.8rem',
										}}
									>
										{page}
									</Button>
								))}
							</Box>

							<Box sx={{ flexGrow: 0 }}>
								<Tooltip title="Open settings">
									<Button
										fullWidth
										onClick={() => ''}
										sx={{
											position: 'relative',
											right: '6rem',
											p: 2,
											borderRadius: 8,
											color: '#fff',
											fontSize: '0.8rem',
											background: '#1DA2C1',
										}}
									>
										Central do Assinante
									</Button>
								</Tooltip>
							</Box>
						</Toolbar>
					</Container>
				</Box>
			</AppBar>
		</>
	);
}
export default ResponsiveAppBar;
