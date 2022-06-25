import React, { useState } from "react";
import ProductList from "./product-list/ProductList";
import Navbar from "./NavBar/Navbar";
import "./App.css";
import ProductsProvider, {
	useProducts,
	useProductsActions,
} from "./Providers/ProductsProvider";

const App = () => {
	return (
		<div className="container">
			<ProductsProvider>
				<Navbar />
				<h1>Products</h1>
				<ProductList />
			</ProductsProvider>
		</div>
	);
};

export default App;
