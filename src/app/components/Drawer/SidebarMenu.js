import React from 'react';

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
				sx: { borderBottomRightRadius: '8px', width: '60vw', overflow: 'hidden', maxHeight: 'auto' },
			}}
		>
			<Box sx={{ width: '100%' }}>
			<Accordion expanded={expanded === '1'} onChange={handleChange('1')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography component="span" sx={{ flexShrink: 0 }}>
							General
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
						<Button variant="contained" sx={{ width: '100%' }}>
							Info
						</Button>
						<Button variant="contained" sx={{ width: '100%' }}>
							Contact
						</Button>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={expanded === '2'} onChange={handleChange('2')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography component="span" sx={{ flexShrink: 0 }}>
							About Us
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
						<Button variant="contained" sx={{ width: '100%' }}>
							Team Members
						</Button>
						<Button variant="contained" sx={{ width: '100%' }}>
							Contact
						</Button>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={expanded === '3'} onChange={handleChange('3')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography component="span" sx={{ flexShrink: 0 }}>
							Settings
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
						<Button variant="contained" sx={{ width: '100%' }}>
							Account
						</Button>
						<Button variant="contained" sx={{ width: '100%' }}>
							Display
						</Button>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Drawer>
	);
}
