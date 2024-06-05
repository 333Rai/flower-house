import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<h4 className={styles.contacts__title}>+996703001555</h4>
			<ul className={styles.contacts__list}>
				<li className={styles.contacts__item}>
					rai.zheenbekov@gmail.com
				</li>
				<li className={styles.contacts__item}>
					г. Бишкек, ж/м Кок-Жар
				</li>
				<li className={styles.contacts__item}>10:00 - 19:00</li>
			</ul>
		</div>
	);
};

export default Contacts;
