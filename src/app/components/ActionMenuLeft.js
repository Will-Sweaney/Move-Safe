"use client"

import styles from 'styles/ActionMenu.module.css';
import Button from '@mui/joy/Button';

export default function Home() {

    const handleClick = () => {
        console.log('test');
    }
    
	return (
		<div className={styles.menu_body}>
			<Button
				color="primary"
				aria-label="add"
				className={styles.button}
				onClick={() => {
                    handleClick
                }}
			>
				test
			</Button>
		</div>
	);
}
