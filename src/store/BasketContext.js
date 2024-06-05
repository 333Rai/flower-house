import { Slide } from '@mui/material';
import { createContext, useState } from 'react';

export const BasketContext = createContext();
const BasketProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const basketItems = data.length > 0 ? data.length : null;
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
		severity: '',
		Transition: Slide,
	});
	const closeSnackbar = () => {
		setSnackbar((prevState) => ({
			...prevState,
			open: false,
			message: '',
			severity: '',
		}));
	};
	const successSnackbar = () => {
		setSnackbar((prevState) => ({
			...prevState,
			open: true,
			message: 'Успешно добавлен в корзину!',
			severity: 'success',
		}));
	};
	const failedSnackbar = () => {
		setSnackbar((prevState) => ({
			...prevState,
			open: true,
			message: 'Этот товар уже есть в корзине!',
			severity: 'error',
		}));
	};
	const calculateTotalAmount = () => {
		const sum = data.reduce((acc, { price, quantity }) => {
			return (acc += quantity * price);
		}, 0);
		return sum;
	};
	const addToBasket = (newElem) => {
		return () => {
			setData((prevState) => {
				const doesExistElem = prevState.find((oldElem) => {
					if (oldElem.id === newElem.id) {
						return true;
					}
					return undefined;
				});
				if (!doesExistElem) {
					successSnackbar();
					return [newElem, ...prevState];
				}

				if (doesExistElem) {
					failedSnackbar();
				}
				return prevState;
			});
		};
	};
	const removeElem = (id) => {
		setData((prevState) => {
			const updatedData = prevState.filter((elem) => {
				if (elem.id !== id) {
					return elem;
				}
				return null;
			});
			return updatedData;
		});
	};

	const state = {
		data,
		addToBasket,
		snackbar,
		closeSnackbar,
		basketItems,
		calculateTotalAmount,
		removeElem,
	};
	return (
		<BasketContext.Provider value={state}>
			{children}
		</BasketContext.Provider>
	);
};

export default BasketProvider;
