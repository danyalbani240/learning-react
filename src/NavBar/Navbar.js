// import "./product.css";
import styles from "./navbar.module.css";

const Navbar = (props) => {
	return (
		<header className={styles.header}>
			<h1>Danyal Shop</h1>
			<span className={styles.total}>0</span>
		</header>
	);
};
export default Navbar;
