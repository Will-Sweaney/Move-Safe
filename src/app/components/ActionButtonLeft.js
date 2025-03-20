import React, { useState, useEffect } from 'react';

import NotifySnackbar from './Snackbar/Notify';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';

const actions = [
  { icon: <CrisisAlertOutlinedIcon />, name: 'Dangerous Area' },
  { icon: <GroupsOutlinedIcon />, name: 'Crowded Area' },
  { icon: <PriorityHighOutlinedIcon />, name: 'Potential Threat' },
];

export default function ActionButton() {
	const [notifySnackbarOpen, setNotifySnackbarOpen] = useState(false);
	const [notifySnackbarMessage, setNotifySnackbarMessage] = useState('a');

	const notify = (message) => {
    if (!notifySnackbarOpen) {
      setNotifySnackbarMessage(message);
      setNotifySnackbarOpen(true);
    }
	};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16 + 56, left: 16 }}
        icon={<OutlinedFlagIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => notify(`Reported: ${action.name}`)}
            key={action.name}
            icon={action.icon}
            title={action.name}
          />
        ))}
      </SpeedDial>
      <NotifySnackbar open={notifySnackbarOpen} setOpen={setNotifySnackbarOpen} message={notifySnackbarMessage}/>
    </Box>
  );
}