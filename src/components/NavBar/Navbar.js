// import "./product.css";
import { useProducts } from "../Providers/ProductsProvider";
import styles from "./navbar.module.css";

const Navbar = () => {
	const totalSum = useProducts().filter(
		(product) => product.number >= 1
	).length;
	return (
		<header className={styles.header}>
			<h1>Danyal Shop</h1>
			<span className={styles.total}>{totalSum}</span>
		</header>
	);
};
export default Navbar;
