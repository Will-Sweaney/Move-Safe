'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';

import StarIcon from '@mui/icons-material/Star';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
	height: '100%',
	backgroundColor: grey[100],
	...theme.applyStyles('dark', {
		backgroundColor: theme.palette.background.default,
	}),
}));

const StyledBox = styled('div')(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.applyStyles('dark', {
		backgroundColor: grey[800],
	}),
}));

const Puller = styled('div')(({ theme }) => ({
	width: 30,
	height: 6,
	backgroundColor: grey[300],
	borderRadius: 3,
	position: 'absolute',
	top: 8,
	left: 'calc(50% - 15px)',
	...theme.applyStyles('dark', {
		backgroundColor: grey[900],
	}),
}));

function SwipeableEdgeDrawer({ open, setOpen }) {
	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<Root>
			<CssBaseline />
			<Global
				styles={{
					'.MuiDrawer-root > .MuiPaper-root': {
						overflow: 'visible',
					},
				}}
			/>
			{/* <Box sx={{ textAlign: 'center', pt: 1 }}>
				<Button onClick={toggleDrawer(true)}>Open</Button>
			</Box> */}
			<SwipeableDrawer
				anchor="bottom"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				swipeAreaWidth={drawerBleeding}
				disableSwipeToOpen={false}
				keepMounted
			>
				<StyledBox
					sx={{
						position: 'absolute',
						top: -drawerBleeding,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: 'visible',
						right: 0,
						left: 0,
					}}
				>
					<Puller />
					<Typography sx={{ p: 2, color: 'text.secondary' }}>About the area</Typography>
				</StyledBox>
				<StyledBox sx={{ px: 2, pb: 2, height: '100%', overflow: 'auto' }}>
					<Box sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<Typography variant="h5">
								Plymouth
							</Typography>
							<Box sx={{ width: 200, display: 'flex', alignItems: 'center', width: '100%' }}>
								<Rating
									name="text-feedback"
									value={3}
									readOnly
									precision={0.5}
									emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
									sx={{ ml: 'auto' }}
								/>
								<Box sx={{ ml: 2 }}>Good</Box>
							</Box>
						</Box>
						<Card variant="outlined">
							<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<img src="/w3w.png" width={42} style={{ marginInline: '0.2rem' }} />
								<Alert
									sx={{ width: '100%' }}
									severity="error"
									icon={false}
									action={
										<Button color="inherit" size="small">
											COPY
										</Button>
									}
								>
									doors.caged.settle
								</Alert>
							</Box>
						</Card>
						<Divider />
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
							<Typography sx={{ width: '200px' }}>About Plymouth</Typography>
							<Typography sx={{ width: '200px', color: 'text.secondary', width: '100%' }}>
								Plymouth is a coastal city known for its open spaces and relatively safe environment.
								While its crime rate is slightly higher than the Devon average, it remains one of the
								safer cities in the UK.
							</Typography>
						</Box>
					</Box>
					<Button variant="contained" sx={{ width: '100%', mt: '68px' }}>
						MORE
					</Button>
				</StyledBox>
			</SwipeableDrawer>
		</Root>
	);
}

export default SwipeableEdgeDrawer;
