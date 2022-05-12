import Product from "../product/Product.js";
import { Fragment } from "react";
import { Component } from "react";

class ProductList extends Component {
	state = {
		products: [
			{
				price: "200$",
				title: "javascript course",
				number: 1,
			},
			{
				price: "300$",
				title: "Vue course",
				number: 1,
			},
			{
				price: "400$",
				title: "Nuxt course",
				number: 1,
			},
			{
				price: "500$",
				title: "Pwa course",
				number: 1,
			},
			{
				price: "600$",
				title: "Design Pattern course",
				number: 1,
			},
		],
	};

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
	handleChange = (product) => {};
	render() {
		return (
			<Fragment>
				{this.state.products.map((product) => {
					return (
						<Product
							delete={(e) => this.handleDelete(product)}
							key={product.title}
							price={product.price}
							title={product.title}
							number={product.number}
							increment={() => this.incrementProduct(product)}
							updateTitle={() => {
								this.handleChange(product);
							}}
						>
							this is a good {product.title}
						</Product>
					);
				})}
			</Fragment>
		);
	}
}
export default ProductList;
