'use client';

import React, { useState } from 'react';

import SidebarMenu from '@/components/Drawer/SidebarMenu';

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Navbar({ onRouteSelect, title }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleRouteChange = () => {
		onRouteSelect();
	};

	return (
		<React.Fragment>
			<SidebarMenu open={sidebarOpen} setOpen={setSidebarOpen} />
			<Box
				sx={{
					flexGrow: 1,
					flexDirection: 'column',
					gap: '1rem',
					display: 'flex',
					width: '100%',
					p: '12px',
					bgcolor: '#fff',
					height: '5rem',
					justifyContent: 'center',
				}}
			>
				<Stack direction={'row'} sx={{ gap: '1rem' }}>
					<IconButton aria-label="delete" size="large" onClick={() => setSidebarOpen(true)}>
						<MenuIcon fontSize="inherit" />
					</IconButton>
					{!title ? (
						<>
							<Autocomplete
								freeSolo
								disableClearable
								options={['Example Route'].map((option) => option)}
								sx={{ width: '100%' }}
								renderInput={(params) => (
									<TextField
										{...params}
										label="Search"
										slotProps={{
											input: {
												...params.InputProps,
												type: 'search',
											},
										}}
									/>
								)}
							/>
							<IconButton
								color="primary"
								sx={{ p: '10px' }}
								aria-label="directions"
								onClick={() => {
									handleRouteChange();
								}}
							>
								<DirectionsIcon />
							</IconButton>
						</>
					) : (
						<Typography sx={{ alignItems: 'center', display: 'flex' }} fontSize={20}>
							{title}
						</Typography>
					)}
				</Stack>
			</Box>
		</React.Fragment>
	);
}
