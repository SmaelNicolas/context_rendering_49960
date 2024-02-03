import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { ItemCopy } from "./components/Item/ItemCopy";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Loading } from "./components/Loading/Loading";
import { Navbar } from "./components/Navbar/Navbar";
import { CartProvider } from "./context/CartContext";

const myItem = {
	id: 1,
	stock: 10,
	title: "Razer Cynosa V2 - US",
	img: "https://i.ibb.co/0DwNRHg/razer-cynosa-v2-500x500.png",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis officia dignissimos! Expedita quod voluptatem molestias id maxime explicabo ipsa.",
	price: 59.99,
	category: "teclado",
};

function App() {
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);

	const date = new Date();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	// RETURN TEMPRANO
	// if (loading) return <h2>Cargando...</h2>;

	return (
		// <div>
		// 	{/* TERNARIO */}
		// 	{loading ? <Loading /> : <ItemCopy item={myItem} />}
		// 	{/* {loading && <h2>Cargando...</h2>}
		// 	{!loading && <ItemCopy item={myItem} />} */}
		// 	<button
		// 		style={{ padding: "20px 100px" }}
		// 		onClick={() => setCount(count + 1)}>
		// 		COUNT
		// 	</button>
		// 	<div>{count}</div>
		// 	<Footer date={date} />
		// </div>

		<CartProvider>
			<div className="container--app">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route
							path="/category/:idCategory"
							element={<ItemListContainer />}
						/>
						<Route
							path="/items/:idItem"
							element={<ItemDetailContainer />}
						/>
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</BrowserRouter>
			</div>
		</CartProvider>

		// <AppContext.Consumer>
		// 	{mensaje=> <div>{mensaje}</div>}
		// </AppContext.Consumer>
	);
}

export default App;
