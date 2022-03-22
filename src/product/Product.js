// import "./product.css";
import styles from "./product.module.css";
const Product = (props) => {
    return (
        <div className={styles.product} onClick={props.delete}>
            <h1>product name: {props.title}</h1>
            <p>product-price:{props.price}</p>
        </div>
    );
};
export default Product;
