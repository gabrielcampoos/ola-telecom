import ClearIcon from '@mui/icons-material/Clear';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { SetStateAction } from 'react';

interface IModal {
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export const BasicModal: React.FC<IModal> = ({ open, setOpen }) => {
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box
						component="button"
						sx={{
							float: 'right',
							position: 'relative',
							top: '-1.5rem',
							right: '-1rem',
							border: 'none',
							background: 'transparent',
							cursor: 'pointer',
						}}
						onClick={() => setOpen(false)}
					>
						<ClearIcon />
					</Box>

					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
					>
						Entre em contato por um dos nossos canais de
						atendimento.
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						atendimento@olanet.com.br
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						financeiro@olanet.com.br
					</Typography>
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
				</Box>
			</Modal>
		</div>
	);
};
