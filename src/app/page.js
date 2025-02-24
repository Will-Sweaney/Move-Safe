"use client"

import dynamic from "next/dynamic";


import Navbar from 'components/Navbar';
import ActionMenuLeft from 'components/ActionMenuLeft';

const DynamicMap = dynamic(() => import("components/Map"), { ssr: false });

export default function Home() {
	return (
		<div>
			<Navbar />
			<DynamicMap/>
			<ActionMenuLeft/>
		</div>
	);
}
