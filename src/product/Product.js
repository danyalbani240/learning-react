// import "./product.css";
import styles from "./product.module.css";
const Product = (props) => {
    return (
        <div className={styles.product}>
            <h1> {props.title}</h1>
            <p>{props.price}</p>
            <p>{props.children}</p>
        </div>
    );
};
export default Product;
