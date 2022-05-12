// import "./product.css";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
const Product = (props) => {
	return (
		<div className={styles.product}>
			<h1>product name: {props.product.title}</h1>
			<p>product-price:{props.product.price}</p>
			<p className={styles.badge}> {props.product.number}</p>

			<button className={styles.button} onClick={props.onIncrement}>
				+
			</button>
			<button
				className={`${styles.button} ${
					props.product.number === 1 && styles.remove
				}`}
				onClick={props.onDecrement}
			>
				{props.product.number === 1 ? <BiTrash /> : "-"}
			</button>
			<input
				type="text"
				onChange={props.onChange}
				value={props.product.title}
				className={styles.titleChanger}
			/>
			<button className={styles.button} onClick={props.onDelete}>
				delete
			</button>
		</div>
	);
};
export default Product;
