import { useContext, useState } from 'react';
import img01 from '../../assets/catalog/01.png';
import img02 from '../../assets/catalog/02.png';
import img03 from '../../assets/catalog/03.png';
import img04 from '../../assets/catalog/04.png';
import img05 from '../../assets/catalog/05.png';
import img06 from '../../assets/catalog/06.png';
import { BasketContext } from '../../store/BasketContext';
import Snackbar from '../UI/snackbar/Snackbar';
import styles from './Catalog.module.css';
import ProductCard from './product_card/ProductCard';

const Catalog = () => {
	const [quantity, setQuantity] = useState(1);
	const catalog = [
		{
			id: 'SCS1',
			name: 'Зачарованные лепестки',
			price: 220,
			image: img01,
			quantity: 1,
		},
		{
			id: 'HSD2',
			name: 'Цветочная гармония',
			price: 300,
			image: img02,
			quantity: 1,
		},
		{
			id: 'MDK3',
			name: 'Шепчущие луга',
			price: 550,
			image: img03,
			quantity: 1,
		},
		{
			id: 'LSI4',
			name: 'Весенняя серенада',
			price: 470,
			image: img04,
			quantity: 1,
		},
		{
			id: 'VSW5',
			name: 'Безмятежное блаженство',
			price: 340,
			image: img05,
			quantity: 1,
		},
		{
			id: 'DEO6',
			name: 'Цветущее великолепие',
			price: 430,
			image: img06,
			quantity: 1,
		},
		{
			id: 'DEO6',
			name: 'Цветущее великолепие',
			price: 550,
			image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStGkoGZCjqevZ3m-bcFo9r82NrQEHkPkGcg01zrwp5no8LfCb1',
			quantity: 1,
		},
		{
			id: 'DEO6',
			name: 'Лавандовая свежесть',
			price: 600,
			image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbDYLRroRfnEuUs-ysof_EDP02TFs44rPPwaGL-XRvOfh0TmLW',
			quantity: 1,
		},
	];
	const context = useContext(BasketContext);
	const inputChangeHandler = (event) => {
		const { value } = event.target;
		setQuantity(+value);
	};

	return (
		<>
			<Snackbar
				{...context.snackbar}
				handleClose={context.closeSnackbar}
			/>
			<section id='catalog'>
				<div className='wrapper'>
					<section className={styles.catalog}>
						<h1 className={styles.catalog__title}>
							Каталог цветочных изысков на любой случай жизни
						</h1>
						<div className={styles.catalog__content}>
							{catalog.map((elem) => (
								<ProductCard
									key={elem.id}
									id={elem.id}
									name={elem.name}
									price={elem.price}
									image={elem.image}
									onAddToBasket={context.addToBasket}
									onChange={inputChangeHandler}
									quantity={quantity}
								/>
							))}
						</div>
					</section>
				</div>
			</section>
		</>
	);
};

export default Catalog;
