import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
	const handleSmoothScroll = (event) => {
		event.preventDefault();
		const targetID = event.currentTarget.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetID);

		window.scrollTo({
			top: targetElement.offsetTop,
			behavior: 'smooth',
		});
	};
	return (
		<div className={styles.navbar}>
			<a
				href='#главная'
				className={styles.navbar__logo}
				onClick={handleSmoothScroll}
			>
				FLORAL HAVEN
			</a>
			<div className={styles.navbar__group}>
				<a className={styles.navbar__link} href='#!'>
					<InstagramIcon />
				</a>
				<a className={styles.navbar__link} href='#!'>
					<FacebookIcon />
				</a>
				<a className={styles.navbar__link} href='#!'>
					<MailOutlineIcon />
				</a>
				<a className={styles.navbar__link} href='#!'>
					<TelegramIcon />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
