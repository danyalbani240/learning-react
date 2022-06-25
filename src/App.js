import React, { useState } from "react";
import ProductList from "./product-list/ProductList";
import Navbar from "./NavBar/Navbar";
import "./App.css";

const App = () => {
	const [products, setProducts] = useState([
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
	]);
	//handlers
	const handleDelete = (product) => {
		console.log(product);
		let filteredProducts = products.filter(
			(item) => item.title !== product.title
		);
		setProducts(filteredProducts);
	};
	const incrementProduct = (product) => {
		let newProduct = { ...product };
		newProduct["number"] = product.number + 1;
		//findIndex
		let index = products.findIndex((item) => item.id === product.id);
		let productsClone = [...products];
		productsClone.splice(index, 1, newProduct);
		setProducts(productsClone);
	};
	const decrementProduct = (product) => {
		if (product.number == 1) {
			handleDelete(product);
			return;
		}
		let newProduct = { ...product };
		newProduct["number"] = product.number - 1;
		//findIndex
		let index = products.findIndex((item) => item.id === product.id);
		let productsClone = [...products];
		productsClone.splice(index, 1, newProduct);
		setProducts(productsClone);
	};

	const handleChange = (event, product) => {
		let index = products.findIndex((item) => item.id === product.id);
		let clonedProduct = { ...products[index] };
		clonedProduct.title = event.target.value;
		let updatedProducts = [...products];
		products.splice(index, 1, clonedProduct);
		setProducts(updatedProducts);
	};
	return (
		<div className="container">
			<Navbar
				totalSum={
					products.filter((product) => product.number >= 1).length
				}
			/>
			<h1>Products</h1>
			<ProductList
				onIncrement={incrementProduct}
				onDecrement={decrementProduct}
				onDelete={handleDelete}
				onChange={handleChange}
				products={products}
			/>
		</div>
	);
};

export default App;
