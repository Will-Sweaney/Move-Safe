import React from 'react';

import Navbar from 'components/Navbar';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const teamMembers = [
	{
		'Oskar Kielch': {
			desc: 'Finalised the logo and design for Move Safe',
			linkedinURL: 'https://www.linkedin.com/in/oskar-kielch-974109325/',
			bannerURL: 'https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq',
			profileImageURL:
				'https://media.licdn.com/dms/image/v2/D4E03AQGtuqaGlMfcTw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724697575316?e=1747872000&v=beta&t=ta0vXqL8t3rQ42CkDP7jB3lFpdgKhv2Bgttunkh7v9c',
		},
	},
	{ 
		'Conrad Scott': { 
			desc: '', 
			linkedinURL: '#', 
			bannerURL: '#', 
			profileImageURL: '#' 
		} 
	},
	{
		'David Maduagwu': {
			desc: 'Aspiring graphics designer currently studying at City college Plymouth',
			linkedinURL: 'https://www.linkedin.com/in/david-maduagwu-b0439033b/',
			bannerURL: 'https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq',
			profileImageURL:
				'https://media.licdn.com/dms/image/v2/D4D03AQGw4VZotby9ww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732885171063?e=1747872000&v=beta&t=-Pg-dRHiHXuLT2jXUzJAK0LmMRXGfVgeC-rEjrpq73c',
		},
	},
	{ 
		'Quinn Fell': { 
			desc: '', 
			linkedinURL: '#', 
			bannerURL: '#', 
			profileImageURL: '#' 
		} 
	},
	{
		'Tain Phillips': {
			desc: 'Produced the presentation and managed the team',
			linkedinURL: 'https://www.linkedin.com/in/tain-phillips-a6226732a/',
			bannerURL:
				'https://media.licdn.com/dms/image/v2/D5616AQEZEZqczjNESw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1732885336667?e=1747872000&v=beta&t=mNBKRqynGWdqq2CQhzuTZtRIrCD-iKzuEM0mvqt4euA',
			profileImageURL:
				'https://media.licdn.com/dms/image/v2/D5603AQFJ72EvifxM0g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732885078696?e=1747872000&v=beta&t=Pfc4Oo2IWTsnHD6R6l-U2rAUxDDLZI10LIYdsa3ht1Q',
		},
	},
	{
		'Will Sweaney': {
			desc: 'Developed this demo and guided the concept of the solution',
			linkedinURL: 'https://www.linkedin.com/in/will-sweaney/',
			bannerURL:
				'https://media.licdn.com/dms/image/v2/D4E16AQELcAkg-Ny6og/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1727094419701?e=1747872000&v=beta&t=oQj-LH34wNmy9chAzBbBLcplFpUaCkKxcWFer-pgd28',
			profileImageURL:
				'https://media.licdn.com/dms/image/v2/D4E03AQFSoRg3xv5YGw/profile-displayphoto-shrink_400_400/B4EZN_Oq9VHEAg-/0/1733006373092?e=1747872000&v=beta&t=976arm_4o--Hjqa7bJDeWlVnUW9LU_Jyw-dGl7kf060',
		},
	},
];

export default function Home() {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', overflow: 'auto', height: '100%' }}>
			<Navbar title={'About Us'} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', m: '1rem' }}>
				{teamMembers.map((item, index) => {
					const member = item[Object.keys(item)];
					return (
						<Card sx={{ maxWidth: 420 }} key={index}>
							<CardMedia sx={{ height: 140 }} image={member.bannerURL} />
							<CardContent>
								<Box sx={{ position: 'relative' }}>
									<Avatar
										src={member.profileImageURL}
										sx={{ position: 'absolute', top: -48, width: 64, height: 64 }}
									/>
									<Typography gutterBottom variant="h5" component="div" sx={{ pt: '1rem' }}>
										{Object.keys(item)}
									</Typography>
									<Typography variant="body2" sx={{ color: 'text.secondary' }}>
										{member.desc}
									</Typography>
								</Box>
							</CardContent>
							<CardActions>
								<Button size="small" href={member.linkedinURL} target="_blank">
									Linkedin
								</Button>
							</CardActions>
						</Card>
					);
				})}
			</Box>
		</Box>
	);
}
