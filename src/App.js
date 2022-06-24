import React from "react";
// import ProductList from "./product-list/ProductList";
// import Navbar from "./NavBar/Navbar";
import HookCounter from "./HookCounter";
import HoverCounter from "./HoverCounter";
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
	componentDidUpdate(prevProps, prevState) {
		console.log(prevState);
	}
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
		let newProduct = { ...product };
		newProduct["number"] = product.number + 1;
		//findIndex
		let index = this.state.products.findIndex(
			(item) => item.id === product.id
		);
		let productsClone = [...this.state.products];
		productsClone.splice(index, 1, newProduct);
		this.setState({
			products: productsClone,
		});
	};
	decrementProduct = (product) => {
		let newProduct = { ...product };
		newProduct["number"] = product.number - 1;
		//findIndex
		let index = this.state.products.findIndex(
			(item) => item.id === product.id
		);
		let productsClone = [...this.state.products];
		productsClone.splice(index, 1, newProduct);
		this.setState({
			products: productsClone,
		});
	};

	handleChange = (event, product) => {
		let index = this.state.products.findIndex(
			(item) => item.id === product.id
		);
		let clonedProduct = { ...this.state.products[index] };
		clonedProduct.title = event.target.value;
		let products = [...this.state.products];
		products.splice(index, 1, clonedProduct);
		this.setState({
			products,
		});
	};

	render() {
		return (
			<div className="container">
				<Navbar
					totalSum={
						this.state.products.filter(
							(product) => product.number >= 1
						).length
					}
				/>
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
