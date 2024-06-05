import CloseIcon from '@mui/icons-material/Close';
import React, { useContext } from 'react';
import { BasketContext } from '../../../store/BasketContext';
import styles from './BasketCard.module.css';

const BasketCard = ({ id, name, price, quantity }) => {
	const context = useContext(BasketContext);
	return (
		<div className={styles.basketCard}>
			<div className={styles.basketCard__info}>
				<h3 className={styles.basketCard__name}>{name}</h3>
				<div className={styles.basketCard__additionally}>
					<span className={styles.basketCard__price}>
						{price}
						<span style={{ fontSize: 15, fontStyle: 'italic' }}>
							сом
						</span>
					</span>
					<span className={styles.basketCard__quantity}>
						x{quantity}
					</span>
				</div>
			</div>
			<div className={styles.basketCard__actions}>
				<button
					className={styles.basketCard__button}
					onClick={() => context.removeElem(id)}
				>
					<CloseIcon />
				</button>
			</div>
		</div>
	);
};

export default BasketCard;
