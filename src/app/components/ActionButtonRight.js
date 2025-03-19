import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import SosOutlinedIcon from '@mui/icons-material/SosOutlined';

export default function ActionButton() {
	return (
		<Box
			sx={{
				flexGrow: 1,
				position: 'absolute',
				bottom: 16 + 56,
				right: 16,
				flexDirection: 'column',
				gap: '1rem',
				display: 'flex',
			}}
		>
			<Fab size="large" color="error" aria-label="add">
				<SosOutlinedIcon />
			</Fab>
			<Fab size="large" color="primary" aria-label="add">
				<ContactSupportOutlinedIcon />
			</Fab>
			<Fab size="large" color="primary" aria-label="add">
				<LayersOutlinedIcon />
			</Fab>
			<Fab size="large" color="primary" aria-label="add">
				<PeopleAltOutlinedIcon />
			</Fab>
		</Box>
	);
}
