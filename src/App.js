import React from "react";
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

	//change Handlers
	handleDelete = (product) => {
		console.log(product);
		let filteredProducts = this.state.products.filter(
			(item) => item.title !== product.title
		);
		this.setState({
			products: filteredProducts,
		});
	};
	incrementProduct = (product) => {
		let productNewNum = ++product.number;
		let newProduct = { ...product, number: productNewNum };
		// my way of adding increment button
		let newProducts = [
			...this.state.products.filter(
				(item) => item.title !== product.title
			),
			newProduct,
		];
		this.setState({
			product: newProducts,
		});
	};
	decrementProduct = (product) => {
		if (product.number === 1) {
			this.handleDelete(product);
			return;
		}
		let productNewNum = --product.number;
		let newProduct = { ...product, number: productNewNum };
		// my way of adding decrement button
		let newProducts = [
			...this.state.products.filter(
				(item) => item.title !== product.title
			),
			newProduct,
		];
		this.setState({
			product: newProducts,
		});
	};

	handleChange = (event, product) => {
		let products = [...this.state.products];
		let selectedProductIndex = products.findIndex(
			(element) => element.title === product.title
		);
		products[selectedProductIndex].title = event.target.value;
		this.setState({ products });
	};
	//
	render() {
		return (
			<div className="container">
				<Navbar />
				<h1>Products</h1>
				<ProductList
					onIncrement={this.incrementProduct}
					onDecrement={this.decrementProduct}
					onDelete={this.handleDelete}
					onChange={this.handleChange}
					products={this.state.products}
				/>
			</div>
		);
	}
}

export default App;
