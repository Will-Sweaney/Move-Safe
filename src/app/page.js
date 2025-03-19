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

	const handleRouteChange = () => {
		setDemoRouteEnabled(true)
	};

	return (
		<div>
			<Navbar onRouteSelect={handleRouteChange}/>
			<Map showDemoRoute={demoRouteEnabled}/>
			<ActionButtonLeft />
			<ActionButtonRight />
			<ExpandedSearch open={expandedSearchOpen} setOpen={setExpandedSearchOpen} />
		</div>
	);
}
