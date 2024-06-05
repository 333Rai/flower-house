import React from 'react';
import styles from './Support.module.css';

const Support = () => {
	return (
		<div className={styles.support}>
			<h4 className={styles.support__title}>Поддержка</h4>
			<ul className={styles.support__list}>
				<li className={styles.support__item}>Доставка и оплата</li>
				<li className={styles.support__item}>Помощь и поддержка</li>
				<li className={styles.support__item}>
					Обслуживание в течение 24/7 часов
				</li>
			</ul>
		</div>
	);
};

export default Support;
