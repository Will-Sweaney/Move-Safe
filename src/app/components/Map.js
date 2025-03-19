'use client';

import React, { useEffect, useState, useRef } from 'react';

const tileValues = [
	'http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
	'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
];

export default function Map({ showDemoRoute, mapLayerID }) {
	const [Leaflet, setLeaflet] = useState(null);
	const [route, setRoute] = useState([]);
	const mapRef = useRef(null);

	useEffect(() => {
		import('react-leaflet').then((L) => setLeaflet(L));
		import('leaflet/dist/leaflet.css');
	}, []);

	useEffect(() => {
		if (Leaflet) {
			setTimeout(() => {
				window.dispatchEvent(new Event('resize'));
			}, 100);
		}
	}, [Leaflet]);

	useEffect(() => {
		if (showDemoRoute) {
			fetchRoute();
		}
	}, [showDemoRoute]);

	const fetchRoute = async () => {
		const start = '-4.120,50.422';
		const end = '-4.148,50.370';

		const url = `https://router.project-osrm.org/route/v1/driving/${start};${end}?overview=full&geometries=geojson`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data.routes && data.routes.length > 0) {
				const coordinates = data.routes[0].geometry.coordinates.map((coord) => [coord[1], coord[0]]);
				setRoute(coordinates);

				if (mapRef.current) {
					mapRef.current.setView([50.376, -4.137], 13);
				}
			}
		} catch (error) {
			console.error('Error fetching route:', error);
		}
	};

	if (!Leaflet) return null;

	const { MapContainer, TileLayer, Marker, Popup, Polyline, ImageOverlay } = Leaflet;

	const imageBounds2 = [
		[50.36, -4.2],
		[50.39, -4.14],
	];

	const imageBounds3 = [
		[50.4, -4.2],
		[50.43, -4.12],
	];

	const imageBounds4 = [
		[50.37, -4.16],
		[50.40, -4.09],
	];

	const customIcon = L.icon({
		iconUrl: 'https://cdn-icons-png.flaticon.com/512/1076/1076983.png',
		iconSize: [32, 32],
		iconAnchor: [16, 32],
		popupAnchor: [0, -32],
	});

	return (
		<div style={{ height: 'calc(100vh - 5rem - 56px)', width: '100%' }}>
			<MapContainer center={[50.376, -4.137]} zoom={13} ref={mapRef} style={{ height: '100%', width: '100%' }}>
				<TileLayer url={tileValues[mapLayerID]} />	
				<ImageOverlay
					url="https://www.pngmart.com/files/23/Editing-Red-Glow-PNG-Pic.png"
					bounds={imageBounds2}
					opacity={0.4}
				/>
				<ImageOverlay
					url="https://www.pngmart.com/files/23/Editing-Red-Glow-PNG-Pic.png"
					bounds={imageBounds3}
					opacity={0.2}
				/>
				<ImageOverlay
					url="https://www.pngmart.com/files/23/Editing-Red-Glow-PNG-Pic.png"
					bounds={imageBounds4}
					opacity={0.3}
				/>
				{showDemoRoute && (
					<>
						<Marker position={[50.422, -4.12]} icon={customIcon}>
							<Popup>Start Point</Popup>
						</Marker>
						<Marker position={[50.37, -4.148]} icon={customIcon}>
							<Popup>End Point</Popup>
						</Marker>{' '}
					</>
				)}
				{showDemoRoute && route.length > 0 && <Polyline positions={route} color="yellow" />}
			</MapContainer>
		</div>
	);
}
