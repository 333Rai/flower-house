import React from 'react';
import PraiseImage from '../../assets/images/03.png';
import styles from './PraiseYourself.module.css';

const PraiseYourself = () => {
	return (
		<div className='wrapper'>
			<section id='about' className={styles.praiceYourself}>
				<div className={styles.praiceYourself__info}>
					<h1 className={styles.praiceYourself__title}>
						Ароматная сказка: <br /> Переплетение воспоминаний с
						цветами
					</h1>
					<p className={styles.praiceYourself__description}>
						Цветочный магазин Floral Haven возник из страсти к
						природе. изысканные цветы, создающие рай, где красота
						цветов может вдохновлять и возвышать. Каждый цветок,
						который украшает в нашем магазине проводится тщательный
						отбор, гарантирующий, что только самые свежие и яркие
						лепестки попадут в наш ассортимент. договоренности. С
						тщательным вниманием к деталям наши опытные флористы
						вручную собирают самые свежие цветы, создавая
						очаровательные композиции, которые становятся символами
						любви, радости и красоты в драгоценные моменты жизни.
						Хотите ли вы сделайте сюрприз любимому человеку или
						украсьте мероприятие, магазин Blossom Flower - идеальный
						выбор.
					</p>
				</div>
				<div className={styles.praiceYourself__imageWrap}>
					<img
						className={styles.praiceYourself__image}
						src={PraiseImage}
						alt='praise-img'
					/>
				</div>
			</section>
		</div>
	);
};

export default PraiseYourself;
