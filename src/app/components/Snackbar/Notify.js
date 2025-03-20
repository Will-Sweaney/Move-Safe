import React from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';

export default function NotifySnackbar({ open, setOpen, message }) {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Snackbar
			open={open}
			onClose={handleClose}
			message={message}
            action={
                <React.Fragment>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    sx={{ p: 0.5 }}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </React.Fragment>
              } 
		/>
	);
}
