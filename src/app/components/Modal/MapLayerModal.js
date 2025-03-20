import React, { useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
	{
		id: 1,
		title: 'Dark',
		description: 'A basic dark-themed map.',
	},
	{
		id: 2,
		title: 'Sattelite',
		description: 'Sattelite imagery of terrain. May be harder to distinguish',
	},
];

export default function MapLayerModal({ open, setOpen, onLayerChange }) {
	const [selectedCard, setSelectedCard] = useState(0);

	const handleClose = () => {
		setOpen(false);
	};

	const handleLayerChange = (id) => {
		setSelectedCard(id);
		onLayerChange(id);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Select Map Layer</DialogTitle>
			<DialogContent>
				<Box
					sx={{
						width: '100%',
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
						gap: 2,
					}}
				>
					{cards.map((card, index) => (
						<Card key={index}>
							<CardActionArea
								onClick={() => handleLayerChange(index)}
								data-active={selectedCard === index ? '' : undefined}
								sx={{
									height: '100%',
									'&[data-active]': {
										backgroundColor: 'action.selected',
										'&:hover': {
											backgroundColor: 'action.selectedHover',
										},
									},
								}}
							>
								<CardContent sx={{ height: '100%' }}>
									<Typography variant="h5" component="div">
										{card.title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{card.description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</Box>
			</DialogContent>
		</Dialog>
	);
}
