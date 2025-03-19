import * as React from 'react';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16 + 56, left: 16 }}
        icon={<OutlinedFlagIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}