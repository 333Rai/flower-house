import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import React, { useContext, useState } from 'react';
import { BasketContext } from '../../store/BasketContext';
import Modal from '../UI/modal/Modal';
import Basket from '../basket/Basket';
import styles from './Header.module.css';

const Header = () => {
	const [isBasketModal, setBasketModal] = useState(false);
	const showBasketModal = () => setBasketModal(true);
	const hideBasketModal = () => setBasketModal(false);
	const context = useContext(BasketContext);
	const disabledBasketButton = context.data.length < 1 ? true : false;
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
		<>
			<Modal handleClose={hideBasketModal} open={isBasketModal}>
				<Basket
					totalPrice={context.calculateTotalAmount()}
					onHideModal={hideBasketModal}
				/>
			</Modal>
			<header id={styles.header}>
				<div className='wrapper'>
					<header className={styles.header}>
						<nav className={styles.header__nav}>
							<ul className={styles.header__list}>
								<li className={styles.header__item}>
									<a
										className={styles.header__link}
										href='#about'
										onClick={handleSmoothScroll}
									>
										О нас
									</a>
								</li>
								<li className={styles.header__item}>
									<a
										className={styles.header__link}
										href='#catalog'
										onClick={handleSmoothScroll}
									>
										Каталог
									</a>
								</li>
								<li className={styles.header__item}>
									<a
										className={styles.header__link}
										href='#footer'
										onClick={handleSmoothScroll}
									>
										Контакты
									</a>
								</li>
							</ul>
						</nav>
						<a
							href='#главная'
							className={styles.header__logo}
							onClick={handleSmoothScroll}
						>
							Floral Haven
						</a>
						<div className={styles.header__actions}>
							<button className={styles.header__button}>
								<SearchRoundedIcon />
							</button>
							<button className={styles.header__button}>
								<PersonRoundedIcon />
							</button>
							<button
								onClick={showBasketModal}
								className={`${styles.header__button} ${styles.basketButton}`}
								disabled={disabledBasketButton}
							>
								<span className={styles.basketLength}>
									{context.basketItems}
								</span>
								<ShoppingCartRoundedIcon />
							</button>
						</div>
					</header>
				</div>
			</header>
		</>
	);
};

export default Header;
