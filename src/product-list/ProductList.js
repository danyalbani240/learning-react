import Product from "../product/Product.js";
import { Fragment } from "react";
import { Component } from "react";

class ProductList extends Component {
	renderProducts = () => {
		return this.props.products.map((product) => {
			return (
				<Product
					key={product.id}
					product={product}
					onIncrement={() => this.props.onIncrement(product)}
					onDecrement={() => this.props.onDecrement(product)}
					onDelete={() => this.props.onDelete(product)}
					onChange={(e) => this.props.onChange(e, product)}
				/>
			);
		});
	};
	render() {
		return (
			<Fragment>
				{!this.props.products.length && "Go shop"}
				{this.renderProducts()}
			</Fragment>
		);
	}
}
export default ProductList;
