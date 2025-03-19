import React, { useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

export default function ConfirmSosModal({ open, setOpen }) {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Initiating SOS Sequence</DialogTitle>
			<DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<LinearProgress variant="determinate" value={40} />
				<Button variant="contained" sx={{ width: '100%' }} onClick={() => handleClose()}>
					Cancel
				</Button>
			</DialogContent>
		</Dialog>
	);
}
