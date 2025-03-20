import React, { useState } from 'react';

import MapLayerModal from './Modal/MapLayerModal';
import ConfirmSosModal from './Modal/ConfirmSosModal';
import NotifySnackbar from './Snackbar/Notify';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SosOutlinedIcon from '@mui/icons-material/SosOutlined';

export default function ActionButton({ onLayerChange, onToggleFriendView }) {
	const [mapLayerModalOpen, setMapLayerModalOpen] = useState(false);
	const [confirmSosModalOpen, setConfirmSosModalOpen] = useState(false);
	const [notifySnackbarOpen, setNotifySnackbarOpen] = useState(false);
	const [notifySnackbarMessage, setNotifySnackbarMessage] = useState('a');

	const notify = (message) => {
		setNotifySnackbarMessage(message);
		setNotifySnackbarOpen(true);
	};

	const handleToggleFriendView = () => {
		notify("Toggled Friend View")
		onToggleFriendView()
	};

	return (
		<React.Fragment>
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
				<Fab size="large" color="error" aria-label="add" onClick={() => setConfirmSosModalOpen(true)}>
					<SosOutlinedIcon />
				</Fab>
				<Fab size="large" color="primary" aria-label="add" onClick={() => setMapLayerModalOpen(true)}>
					<LayersOutlinedIcon />
				</Fab>
				<Fab size="large" color="primary" aria-label="add" onClick={handleToggleFriendView}>
					<PeopleAltOutlinedIcon />
				</Fab>
			</Box>
			<MapLayerModal open={mapLayerModalOpen} setOpen={setMapLayerModalOpen} onLayerChange={onLayerChange} />
			<ConfirmSosModal open={confirmSosModalOpen} setOpen={setConfirmSosModalOpen} onClose={notify}/>
			<NotifySnackbar open={notifySnackbarOpen} setOpen={setNotifySnackbarOpen} message={notifySnackbarMessage} />
		</React.Fragment>
	);
}
