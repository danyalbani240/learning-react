import React, { useState } from "react";
import ProductList from "./components/product-list/ProductList";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import ProductsProvider, {
	useProducts,
	useProductsActions,
} from "./components/Providers/ProductsProvider";
import Filter from "./common/Filter/Filter";
const App = () => {
	return (
		<div className="container">
			<ProductsProvider>
				<Navbar />
				<Filter />
				<h1 style={{ color: "#AE3BCB" }}>Products</h1>
				<ProductList />
			</ProductsProvider>
		</div>
	);
};

export default App;
