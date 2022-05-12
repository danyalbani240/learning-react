// import "./product.css";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
const Product = (props) => {
	return (
		<div className={styles.product}>
			<h1>product name: {props.title}</h1>
			<p>product-price:{props.price}</p>
			<p className={styles.badge}> {props.number}</p>

			<button className={styles.button} onClick={props.increment}>
				+
			</button>
			<button
				className={`${styles.button} ${
					props.number === 1 ? styles.remove : null
				}`}
				onClick={props.decrement}
			>
				{props.number === 1 ? <BiTrash /> : "-"}
			</button>
			<input
				type="text"
				onChange={props.updateTitle}
				value={props.title}
				className={styles.titleChanger}
			/>
			<button className={styles.button} onClick={props.delete}>
				delete
			</button>
		</div>
	);
};
export default Product;
