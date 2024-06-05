import { Alert, Snackbar as MuiSnackbar } from '@mui/material';
import React from 'react';

const Snackbar = ({ open, message, severity, handleClose, Transition }) => {
	return (
		<MuiSnackbar
			open={open}
			autoHideDuration={3000}
			onClose={handleClose}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			TransitionComponent={Transition}
		>
			<Alert
				onClose={handleClose}
				severity={severity}
				variant='filled'
				sx={{ width: '100%' }}
			>
				{message}
			</Alert>
		</MuiSnackbar>
	);
};

export default Snackbar;
