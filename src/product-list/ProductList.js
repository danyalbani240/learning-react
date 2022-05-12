import Product from "../product/Product.js";
import { Fragment } from "react";
import { Component } from "react";

class ProductList extends Component {
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
