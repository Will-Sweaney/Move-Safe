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
    const [mapLayerID, setMapLayerID] = useState(1);

    const handleRouteChange = () => {
        setDemoRouteEnabled(true)
    };

    const handleMapLayerChange = (id) => {
        setMapLayerID(id)
    }

    return (
        <Box>
            <Navbar onRouteSelect={handleRouteChange}/>
            test
        </Box>
    );
}
