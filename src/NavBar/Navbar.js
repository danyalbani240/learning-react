// import "./product.css";
import styles from "./navbar.module.css";

const Navbar = (props) => {
	return (
		<header className={styles.header}>
			<h1>Danyal Shop</h1>
			<span className={styles.total}>{props.totalSum}</span>
		</header>
	);
};
export default Navbar;
