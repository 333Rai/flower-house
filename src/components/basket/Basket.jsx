import React, { useContext } from 'react';
import { BasketContext } from '../../store/BasketContext';
import styles from './Basket.module.css';
import BasketCard from './basket_card/BasketCard';

const Basket = ({ onHideModal, totalPrice }) => {
	const context = useContext(BasketContext);
	return (
		<div className={styles.basket}>
			<div className={styles.basket__content}>
				{context.data.map((elem) => (
					<BasketCard
						key={elem.id}
						id={elem.id}
						name={elem.name}
						image={elem.image}
						price={elem.price}
						quantity={elem.quantity}
					/>
				))}
			</div>
			<div className={styles.basket__bottomPart}>
				<div className={styles.bottomPart__info}>
					<h3 className={styles.bottomPart__title}>Общая сумма</h3>
					<span className={styles.bottomPart__totalAmount}>
						{totalPrice}
						<span style={{ fontSize: 15, fontStyle: 'italic' }}>
							сом
						</span>
					</span>
				</div>
				<div className={styles.bottomPart__actions}>
					<button
						className={styles.bottomPart__button}
						onClick={onHideModal}
					>
						Закрыть
					</button>
					<button className={styles.bottomPart__button}>
						Заказать
					</button>
				</div>
			</div>
		</div>
	);
};

export default Basket;
