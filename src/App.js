import './App.css';
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import PraiseYourself from './components/praise_yourself/PraiseYourself';
import BasketProvider from './store/BasketContext';

const AppContent = () => {
	return (
		<div>
			<Header />
			<Hero />
			<PraiseYourself />
			<Catalog />
			<Footer />
		</div>
	);
};

const App = () => {
	return (
		<BasketProvider>
			<AppContent />
		</BasketProvider>
	);
};

export default App;
