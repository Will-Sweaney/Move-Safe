import Image from 'next/image';

import Slider from '@mui/joy/Slider';
import Navbar from 'components/Navbar';
import ActionMenuLeft from 'components/ActionMenuLeft';
import Map from 'components/Map';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Map/>
			<ActionMenuLeft/>
		</div>
	);
}
