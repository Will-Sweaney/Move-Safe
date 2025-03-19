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
				sx: { borderBottomRightRadius: '8px', width: '60vw', overflow: 'hidden', height: '200px' },
			}}
		>
			<Box sx={{ width: '100%' }}>
				<Accordion expanded={expanded === '1'} onChange={handleChange('1')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography component="span" sx={{ flexShrink: 0 }}>
							General settings
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Button variant="contained" sx={{ width: '100%' }}>
							test
						</Button>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Drawer>
	);
}
