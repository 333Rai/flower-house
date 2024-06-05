import React from 'react';
import styles from './Categoties.module.css';

const Categories = () => {
	return (
		<div className={styles.categories}>
			<h4 className={styles.categories__title}>Категории</h4>
			<ul className={styles.categories__list}>
				<li className={styles.categories__item}>О нас</li>
				<li className={styles.categories__item}>Каталог</li>
				<li className={styles.categories__item}>Контакт</li>
			</ul>
		</div>
	);
};

export default Categories;
