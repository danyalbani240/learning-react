import React, { useState } from "react";
import ProductList from "./product-list/ProductList";
import Navbar from "./NavBar/Navbar";
import "./App.css";

//class component
class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Navbar />
				<h1>Products</h1>
				<ProductList />
			</div>
		);
	}
}

export default App;
