'use client';

import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';

const tileValues = [
	'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
	'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
];

const Map = forwardRef(({ demoRoute, mapLayerID, showFriends }, ref) => {
	const [Leaflet, setLeaflet] = useState(null);
	const [route, setRoute] = useState([]);
	const [destinationMarkerPosition, setDestinationMarkerPosition] = useState([0, 0]);
	const mapRef = useRef(null);

	const routes = {
		0: ['-4.120,50.42', '-4.148,50.370'],
		1: ['-4.120,50.42', '-4.108,50.373'],
		2: ['-4.120,50.42', '-4.148,50.370'],
		3: ['-4.120,50.42', '-4.148,50.370'],
	};

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
		if (demoRoute != null) {
			fetchRoute(demoRoute);
		}
	}, [demoRoute]);

	const fetchRoute = async (routeID) => {
		// TODO: fix route 0
		const start = routes[routeID][0];
		const end = routes[routeID][1];
		setDestinationMarkerPosition(routes[routeID][1]);

		const url = `https://router.project-osrm.org/route/v1/driving/${start};${end}?overview=full&geometries=geojson`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data.routes && data.routes.length > 0) {
				const coordinates = data.routes[0].geometry.coordinates.map((coord) => [coord[1], coord[0]]);
				setRoute(coordinates);

				if (mapRef.current) {
					switch (demoRoute) {
						case 0:
							setDestinationMarkerPosition([50.42, -4.12]);
							mapRef.current.setView([50.396, -4.137], 13);
							break;
						case 1:
							setDestinationMarkerPosition([50.373, -4.108]);
							mapRef.current.setView([50.396, -4.137], 13);
							break;
						case 2:
							setDestinationMarkerPosition([50.42, -4.12]);
							mapRef.current.setView([50.396, -4.137], 13);
							break;
						case 3:
							setDestinationMarkerPosition([50.42, -4.12]);
							mapRef.current.setView([50.396, -4.137], 13);
							break;
						default:
							break;
					}
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
			<MapContainer
				center={destinationMarkerPosition || [0, 0]}
				zoom={15}
				ref={mapRef}
				style={{ height: '100%', width: '100%' }}
			>
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
				{demoRoute && (
					<Marker position={[50.37, -4.148]} icon={customIcon}>
						<Popup>Destination</Popup>
					</Marker>
				)}
				{demoRoute && route.length > 0 && <Polyline positions={route} color="yellow" />}
				<Marker position={[50.42, -4.12]} icon={customIconLocation} />
			</MapContainer>
		</div>
	);
});

export default Map;
