import Product from "../product/Product.js";
import { Fragment } from "react";
import { Component } from "react";

class ProductList extends Component {
	handleDelete = (product) => {
		console.log(product);
		let filteredProducts = this.state.products.filter(
			(item) => item.title != product.title
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
				(item) => item.title != product.title
			),
			newProduct,
		];
		this.setState({
			product: newProducts,
		});
	};
	decrementProduct = (product) => {
		if (product.number == 1) {
			this.handleDelete(product);
			return;
		}
		let productNewNum = --product.number;
		let newProduct = { ...product, number: productNewNum };
		// my way of adding decrement button
		let newProducts = [
			...this.state.products.filter(
				(item) => item.title != product.title
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
	renderProducts = () => {
		return this.state.products.map((product) => {
			return (
				<Product
					delete={(e) => this.handleDelete(product)}
					key={product.id}
					price={product.price}
					title={product.title}
					number={product.number}
					increment={() => this.incrementProduct(product)}
					decrement={() => this.decrementProduct(product)}
					updateTitle={(event) => {
						this.handleChange(event, product);
					}}
				/>
			);
		});
	};
	render() {
		return (
			<Fragment>
				{!this.state.products.length && "Go shop"}
				{this.renderProducts()}
			</Fragment>
		);
	}
}
export default ProductList;
