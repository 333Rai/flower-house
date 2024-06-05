import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = (props) => {
	return (
		<form
			className={styles.productCard}
			onSubmit={(event) => event.preventDefault()}
		>
			<div className={styles.productCard__imageWrap}>
				<img
					className={styles.productCard__image}
					src={props.image}
					alt='product'
				/>
			</div>
			<div className={styles.productCard__content}>
				<h4 className={styles.productCard__name} title={props.name}>
					{props.name}
				</h4>
				<div className={styles.productCard__actions}>
					<input
						className={styles.productCard__input}
						onChange={props.onChange}
						type='number'
						min='1'
						max='5'
						defaultValue='1'
					/>
					<button
						className={styles.productCard__button}
						onClick={props.onAddToBasket({
							name: props.name,
							price: props.price,
							image: props.image,
							id: props.id,
							quantity: props.quantity,
						})}
					>
						<ShoppingCartRoundedIcon />
					</button>
				</div>
			</div>
			<span className={styles.productCard__price}>
				{props.price}&nbsp;сом
			</span>
		</form>
	);
};

export default ProductCard;
