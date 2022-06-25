import { Fragment } from "react";
import Product from "../product/Product.js";
import {
	useProducts,
	useProductsActions,
} from "../Providers/ProductsProvider.js";

// class ProductList extends Component {
// 	renderProducts = () => {
// 		return this.props.products.map((product) => {
// 			return (
// 				<Product
// 					key={product.id}
// 					product={product}
// 					onIncrement={() => this.props.onIncrement(product)}
// 					onDecrement={() => this.props.onDecrement(product)}
// 					onDelete={() => this.props.onDelete(product)}
// 					onChange={(e) => this.props.onChange(e, product)}
// 				/>
// 			);
// 		});
// 	};
// 	render() {
// 		return (
// 			<Fragment>
// 				{!this.props.products.length && "Go shop"}
// 				{this.renderProducts()}
// 			</Fragment>
// // 		);
// 	}
// }

const ProductList = () => {
	const products = useProducts();
	const { handleChange, handleDelete, decrementProduct, incrementProduct } =
		useProductsActions();
	return (
		<Fragment>
			{products.map((product) => {
				return (
					<Product
						key={product.id}
						product={product}
						onIncrement={() => incrementProduct(product)}
						onDecrement={() => decrementProduct(product)}
						onDelete={() => handleDelete(product)}
						onChange={(e) => handleChange(e, product)}
					/>
				);
			})}
		</Fragment>
	);
};

export default ProductList;
