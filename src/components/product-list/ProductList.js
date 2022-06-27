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
	const dispatch = useProductsActions();
	return (
		<Fragment>
			{products.map((product) => {
				return (
					<Product
						key={product.id}
						product={product}
						onIncrement={() =>
							dispatch({ type: "increment", id: product.id })
						}
						onDecrement={() =>
							dispatch({ type: "decrement", id: product.id })
						}
						onDelete={() =>
							dispatch({ type: "delete", id: product.id })
						}
						onChange={(e) =>
							dispatch({
								type: "change",
								id: product.id,
								event: e,
							})
						}
					/>
				);
			})}
		</Fragment>
	);
};

export default ProductList;
