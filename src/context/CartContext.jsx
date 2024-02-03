import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	const ejemplo = "Mi Carrito";

	const handleAdd = (item, quantity) => {
		// if(isInCart(item)){
		//     sumar la cantidad a ese item
		// }else{
		//     agregar el producto al carrito
		// setCarrito([...carrito, { ...item, cantidad: quantity }]);
		// }
		setCarrito([...carrito, { ...item, cantidad: quantity }]);
	};

	// const isInCart = ()=>{
	//     return true/false
	// }

	const precioTotal = () => {
		// RECORRER TODO EL CARRITO E IR ACUMULANDO EL PRECIO DE CADA PRODUCTO
		//TENGAN EN CUENTA QUE LOS PRODUCTOS PUEDEN TENER CANTIDADES
		//PRECIO * CANTIDAD
	};

	const cantidadCarrito = () => {
		// RECORRER TODO EL CARRITO E IR ACUMULANDO LAS CANTIDADES DE CADA PRODUCTO

		return carrito.length;
	};

	const eliminarProducto = (id) => {
		//FILTRAR EL CARRITO DE ESE PRODUCTO
	};

	useEffect(() => {
		// console.log(carrito);
	}, [carrito]);

	return (
		<CartContext.Provider
			value={{
				ejemplo,
				carrito,
				setCarrito,
				handleAdd,
				cantidadCarrito,
				precioTotal,
			}}>
			{children}
		</CartContext.Provider>
	);
};
