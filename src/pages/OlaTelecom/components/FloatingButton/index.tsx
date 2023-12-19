import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab';

export default function FloatingActionButtonSize() {
	return (
		<Fab
			color="success"
			aria-label="add"
			size="large"
			href="https://api.whatsapp.com/send/?phone=551832091200&text=Oi%2C+Ol%C3%A1+Telecom+%21+Eu+gostaria+de+pedir+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
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
	);
}
