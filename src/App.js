import React, { useState } from "react";
import ProductList from "./product-list/ProductList";
import Navbar from "./NavBar/Navbar";
import "./App.css";
import ProductsProvider, {
	useProducts,
	useProductsActions,
} from "./Providers/ProductsProvider";
import Filter from "./Filter/Filter";

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
