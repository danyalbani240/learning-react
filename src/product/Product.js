// import "./product.css";
import styles from "./product.module.css";
const Product = (props) => {
    return (
        <div className={styles.product}>
            <h1>product name: {props.title}</h1>
            <p>product-price:{props.price}</p>
            <p>number: {props.number}</p>
            <button onClick={props.increment}>increment</button>
            <button onClick={props.delete}>delete</button>
        </div>
    );
};
export default Product;
