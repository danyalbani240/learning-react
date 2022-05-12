import React, { useState } from "react";
import ProductList from "./product-list/ProductList";
import Navbar from "./NavBar/Navbar";
import "./App.css";

//class component
class App extends React.Component {
	state = {
		products: [
			{
				price: "200$",
				title: "javascript course",
				number: 1,
				id: "2",
			},
			{
				price: "300$",
				title: "Vue course",
				number: 1,
				id: "3",
			},
			{
				price: "400$",
				title: "Nuxt course",
				number: 1,
				id: "4",
			},
			{
				price: "500$",
				title: "Pwa course",
				number: 1,
				id: "5",
			},
			{
				price: "600$",
				title: "Design Pattern course",
				number: 1,
				id: "6",
			},
		],
	};
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
