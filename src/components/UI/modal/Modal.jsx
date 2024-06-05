import { Backdrop, Box, Fade, Modal as MuiModal } from '@mui/material';
import React from 'react';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};

const Modal = ({ open, handleClose, children }) => {
	return (
		<MuiModal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			open={open}
			onClose={handleClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={open}>
				<Box sx={style}>{children}</Box>
			</Fade>
		</MuiModal>
	);
};

export default Modal;
