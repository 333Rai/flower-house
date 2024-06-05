import React from 'react';
import styles from './Footer.module.css';
import Categories from './categories/Categories';
import Contacts from './contacts/Contacts';
import Navbar from './navbar/Navbar';
import Support from './support/Support';

const Footer = () => {
	return (
		<footer id='footer'>
			<div className='wrapper'>
				<footer className={styles.footer}>
					<Navbar />
					<Categories />
					<Support />
					<Contacts />
				</footer>
			</div>
		</footer>
	);
};

export default Footer;
