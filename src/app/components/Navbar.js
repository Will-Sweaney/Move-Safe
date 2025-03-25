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
	const [activeRoute, setActiveRoute] = useState(false);
	const [route, setRoute] = useState(null);

	const handleRouteChange = () => {
		onRouteSelect(route);
	};

	const handleRouteSelect = (e, newValue) => {
		switch (newValue) {
			case 'Example Route 1':
				setRoute(0);
				setActiveRoute(true);
				break;
			case 'Example Route 2':
				setRoute(1);
				setActiveRoute(true);
				break;
			case 'Example Route 3':
				setRoute(2);
				setActiveRoute(true);
				break;
			case 'Example Route 4':
				setRoute(3);
				setActiveRoute(true);
				break;
			default:
				setRoute(null);
				setActiveRoute(false);
				break;
		}
	};

	const routes = ['Example Route 1', 'Example Route 2', 'Example Route 3', 'Example Route 4'];

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
								options={routes.map((option) => option)}
								sx={{ width: '100%' }}
								onInputChange={handleRouteSelect}
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
								disabled={!activeRoute}
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
