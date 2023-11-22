import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fab, useMediaQuery, useTheme } from '@mui/material';

export default function FloatingButton() {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<>
			{(smDown && (
				<>
					<Fab
						color="success"
						aria-label="add"
						size="medium"
						href="https://api.whatsapp.com/send/?phone=5518997984039&text&type=phone_number&app_absent=0"
						sx={{
							position: 'fixed',
							zIndex: '9999999999',
							right: '0',
							bottom: '0',
							marginRight: '1rem',
							marginBottom: '1rem',
						}}
					>
						<WhatsAppIcon fontSize="medium" />
					</Fab>
				</>
			)) ||
				(mdDown && (
					<>
						<Fab
							color="success"
							aria-label="add"
							size="large"
							href="https://api.whatsapp.com/send/?phone=5518997984039&text&type=phone_number&app_absent=0"
							sx={{
								position: 'fixed',
								zIndex: '9999999999',
								right: '0',
								bottom: '0',
								marginRight: '1rem',
								marginBottom: '1rem',
							}}
						>
							<WhatsAppIcon fontSize="large" />
						</Fab>
					</>
				)) || (
					<>
						<Fab
							color="success"
							aria-label="add"
							size="large"
							href="https://api.whatsapp.com/send/?phone=5518997984039&text&type=phone_number&app_absent=0"
							sx={{
								position: 'fixed',
								zIndex: '999999999',
								right: '0',
								bottom: '0',
								marginRight: '1rem',
								marginBottom: '1rem',
							}}
						>
							<WhatsAppIcon fontSize="large" />
						</Fab>
					</>
				)}
		</>
	);
}
