import React from 'react';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TemporaryDrawer({ setOpen, open }) {
	const [expanded, setExpanded] = React.useState('1');

	const router = useRouter();

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Drawer
			open={open}
			onClose={handleClose}
			PaperProps={{
				sx: {
					borderBottomRightRadius: '8px',
					width: '60vw',
					maxWidth: '280px',
					overflow: 'hidden',
					minHeight: 'auto',
					height: 'auto',
					maxHeight: 'auto',
				},
			}}
		>
			<Box sx={{ width: '100%', display: 'flex', p: '1rem', flexDirection: 'column', gap: '1rem' }}>
				<Button
					variant="contained"
					sx={{ width: '100%' }}
					onClick={() => {
						router.push('/');
					}}
				>
					Home
				</Button>
				<Button
					variant="contained"
					sx={{ width: '100%' }}
					onClick={() => {
						router.push('/about-us');
					}}
				>
					Team Members
				</Button>
			</Box>
		</Drawer>
	);
}
