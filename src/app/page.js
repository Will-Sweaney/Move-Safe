'use client';

import React, { useState } from 'react';

import ExpandedSearch from '@/components/Drawer/ExpandedSearch';
import ActionButtonLeft from 'components/ActionButtonLeft';
import ActionButtonRight from 'components/ActionButtonRight';
import Navbar from 'components/Navbar';
import Map from 'components/Map';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';

export default function Home() {
	const [expandedSearchOpen, setExpandedSearchOpen] = useState(false);
	const [demoRouteEnabled, setDemoRouteEnabled] = useState(false);
	const [friendViewEnabled, setFriendViewEnabled] = useState(false);
	const [mapLayerID, setMapLayerID] = useState(0);

	const handleRouteChange = () => {
		setDemoRouteEnabled(true)
	};

	const handleMapLayerChange = (id) => {
		setMapLayerID(id)
	}

	const handleFriendViewChange = () => {
		setFriendViewEnabled(!friendViewEnabled)
	}

	return (
		<Box>
			<Navbar onRouteSelect={handleRouteChange}/>
			<Map showDemoRoute={demoRouteEnabled} mapLayerID={mapLayerID} showFriends={friendViewEnabled}/>
			<ActionButtonLeft />
			<ActionButtonRight onLayerChange={handleMapLayerChange} onToggleFriendView={handleFriendViewChange}/>
			<ExpandedSearch open={expandedSearchOpen} setOpen={setExpandedSearchOpen} />
		</Box>
	);
}
