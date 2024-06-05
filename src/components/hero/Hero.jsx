import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import React from 'react';
import Image01 from '../../assets/images/01.png';
import Image02 from '../../assets/images/02.png';
import styles from './Hero.module.css';

const Hero = () => {
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
		<section id='главная'>
			<div className='wrapper'>
				<section className={styles.hero}>
					<div className={styles.hero__topPart}>
						<h1 className={styles.topPart__title}>
							Откройте для себя восхитительную коллекцию нашего
							цветочного магазина
						</h1>
						<div className={styles.topPart__imageWrap}>
							<img
								className={styles.topPart__image}
								src={Image01}
								alt='hero-img'
							/>
						</div>
					</div>
					<div className={styles.hero__bottomPart}>
						<div className={styles.bottomPart__imageWrap}>
							<img
								className={styles.bottomPart__image}
								src={Image02}
								alt='hero-img'
							/>
						</div>
						<div className={styles.bottomPart__content}>
							<p className={styles.bottomPart__description}>
								Добро пожаловать в наш очаровательный цветочный
								магазин, где расцветает красота и воплощаются
								мечты. Окунитесь в мир ярких красок,
								пленительных ароматов и мастерства, которые не
								оставят вас равнодушными.
							</p>
							<a
								href='#catalog'
								className={styles.bottomPart__button}
								onClick={handleSmoothScroll}
							>
								Наш каталог
								<ArrowRightAltRoundedIcon />
							</a>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Hero;
