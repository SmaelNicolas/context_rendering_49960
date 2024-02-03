import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./cartWidget.css";

export const CartWidget = () => {
	const { cantidadCarrito } = useContext(CartContext);
	return (
		<Link to="/cart" className="container--cartWidget">
			<div className="cart--icon">🛒</div>
			<div className="cart--quantity">{cantidadCarrito()}</div>
		</Link>
	);
};
