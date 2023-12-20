import { Box, Button, Container } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Lista from '../Lista';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

export default function Status() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Container>
				<Box
					sx={{
						flexGrow: 1,
						bgcolor: 'background.paper',
						display: 'flex',
						height: 600,
					}}
				>
					<Tabs
						orientation="vertical"
						variant="scrollable"
						value={value}
						onChange={handleChange}
						aria-label="Vertical tabs example"
						sx={{ borderRight: 1, borderColor: 'divider' }}
					>
						<Tab label="Assis - SP" {...a11yProps(0)} />
						<Tab label="Palmital - SP" {...a11yProps(1)} />
						<Tab
							label="Paraguaçu Paulista - SP"
							{...a11yProps(2)}
						/>
						<Tab label="Tarumã - SP" {...a11yProps(3)} />
						<Tab
							label="Pedrinhas Paulista - SP"
							{...a11yProps(4)}
						/>
						<Tab label="Florínea - SP" {...a11yProps(5)} />
					</Tabs>
					<TabPanel value={value} index={0}>
						<Box
							sx={{
								width: '100%',
								padding: '18px 0',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Button>
								<Typography>Rompimento</Typography>
							</Button>

							<Button>
								<Typography>Manutenção</Typography>
							</Button>

							<Button>
								<Typography>Quedas</Typography>
							</Button>

							<Button>
								<Typography>Lentidão</Typography>
							</Button>
						</Box>
						<Lista />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Box
							sx={{
								width: '100%',
								padding: '18px 0',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Button>
								<Typography>Rompimento</Typography>
							</Button>

							<Button>
								<Typography>Manutenção</Typography>
							</Button>

							<Button>
								<Typography>Quedas</Typography>
							</Button>

							<Button>
								<Typography>Lentidão</Typography>
							</Button>
						</Box>
						<Lista />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Box
							sx={{
								width: '100%',
								padding: '18px 0',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Button>
								<Typography>Rompimento</Typography>
							</Button>

							<Button>
								<Typography>Manutenção</Typography>
							</Button>

							<Button>
								<Typography>Quedas</Typography>
							</Button>

							<Button>
								<Typography>Lentidão</Typography>
							</Button>
						</Box>
						<Lista />
					</TabPanel>
					<TabPanel value={value} index={3}>
						<Box
							sx={{
								width: '100%',
								padding: '18px 0',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Button>
								<Typography>Rompimento</Typography>
							</Button>

							<Button>
								<Typography>Manutenção</Typography>
							</Button>

							<Button>
								<Typography>Quedas</Typography>
							</Button>

							<Button>
								<Typography>Lentidão</Typography>
							</Button>
						</Box>
						<Lista />
					</TabPanel>
					<TabPanel value={value} index={4}>
						<Box
							sx={{
								width: '100%',
								padding: '18px 0',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Button>
								<Typography>Rompimento</Typography>
							</Button>

							<Button>
								<Typography>Manutenção</Typography>
							</Button>

							<Button>
								<Typography>Quedas</Typography>
							</Button>

							<Button>
								<Typography>Lentidão</Typography>
							</Button>
						</Box>
						<Lista />
					</TabPanel>
					<TabPanel value={value} index={5}>
						<Box
							sx={{
								width: '100%',
								padding: '18px 0',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Button>
								<Typography>Rompimento</Typography>
							</Button>

							<Button>
								<Typography>Manutenção</Typography>
							</Button>

							<Button>
								<Typography>Quedas</Typography>
							</Button>

							<Button>
								<Typography>Lentidão</Typography>
							</Button>
						</Box>
						<Lista />
					</TabPanel>
				</Box>
			</Container>
		</Box>
	);
}
