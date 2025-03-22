import React, { useState, useEffect } from 'react';

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

export default function ConfirmSosModal({ open, setOpen, onClose }) {
	const [time, setTime] = useState(0);

	useEffect(() => {
		if (!open) {
			setTime(0);
			return;
		}

		const interval = 1;

		const timer = setInterval(() => {
			setTime((prevTime) => {
				const newTime = prevTime + interval / 3;

				if (newTime >= 100) {
					setTimeout(() => setOpen(false), 0);
					clearInterval(timer);
					onClose("Demo Alert Initiated")
				}

				return Math.min(newTime, 100);
			});
		}, interval);

		return () => clearInterval(timer);
	}, [open, time]);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Initiating SOS Sequence</DialogTitle>
			<DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<LinearProgress variant="determinate" value={time} />
				<Button variant="contained" sx={{ width: '100%' }} onClick={() => handleClose()}>
					Cancel
				</Button>
			</DialogContent>
		</Dialog>
	);
}
