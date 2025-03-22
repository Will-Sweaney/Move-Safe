'use client';

import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';

const tileValues = [
	'http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
	'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
];

const Map = forwardRef(({ showDemoRoute, mapLayerID, showFriends }, ref) => {
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
		const start = '-4.120,50.42';
		const end = '-4.148,50.370';

		const url = `https://router.project-osrm.org/route/v1/driving/${start};${end}?overview=full&geometries=geojson`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data.routes && data.routes.length > 0) {
				const coordinates = data.routes[0].geometry.coordinates.map((coord) => [coord[1], coord[0]]);
				setRoute(coordinates);

				if (mapRef.current) {
					mapRef.current.setView([50.396, -4.137], 13);
				}
			}
		} catch (error) {
			console.error('Error fetching route:', error);
		}
	};

	useImperativeHandle(ref, () => ({
		gotoCurrentLocation() {
			if (mapRef.current) {
				mapRef.current.setView([50.42, -4.12], 16);
			}
		},
	}));

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
		[50.4, -4.09],
	];

	const customIcon = L.icon({
		iconUrl: 'https://cdn-icons-png.flaticon.com/512/1076/1076983.png',
		iconSize: [32, 32],
		iconAnchor: [16, 32],
		popupAnchor: [0, -32],
	});

	const customIconLocation = L.icon({
		iconUrl: 'https://www.onlygfx.com/wp-content/uploads/2022/03/blue-circle-round-3d-button-4.png',
		iconSize: [12, 12],
		iconAnchor: [6, 6],
	});

	const customIconPerson = L.icon({
		iconUrl: 'https://cdn3.iconfinder.com/data/icons/maps-and-navigation-7/65/68-1024.png',
		iconSize: [32, 32],
		iconAnchor: [16, 32],
		popupAnchor: [0, -32],
	});

	return (
		<div style={{ height: 'calc(100vh - 5rem - 56px)', width: '100%' }}>
			<MapContainer center={[50.42, -4.12]} zoom={15} ref={mapRef} style={{ height: '100%', width: '100%' }}>
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
				{showFriends && (
					<>
						<Marker position={[50.402, -4.12]} icon={customIconPerson}>
							<Popup>Alex</Popup>
						</Marker>
						<Marker position={[50.372, -4.148]} icon={customIconPerson}>
							<Popup>Bob</Popup>
						</Marker>
						<Marker position={[50.35, -4.108]} icon={customIconPerson}>
							<Popup>Charlie</Popup>
						</Marker>
						<Marker position={[50.371, -4.14]} icon={customIconPerson}>
							<Popup>Dean</Popup>
						</Marker>
						<Marker position={[50.367, -4.158]} icon={customIconPerson}>
							<Popup>Fin</Popup>
						</Marker>
						<Marker position={[50.4, -4.16]} icon={customIconPerson}>
							<Popup>Gareth</Popup>
						</Marker>
					</>
				)}
				{showDemoRoute && (
					<Marker position={[50.37, -4.148]} icon={customIcon}>
						<Popup>Destination</Popup>
					</Marker>
				)}
				{showDemoRoute && route.length > 0 && <Polyline positions={route} color="yellow" />}
				<Marker position={[50.42, -4.12]} icon={customIconLocation} />
			</MapContainer>
		</div>
	);
});

export default Map;
