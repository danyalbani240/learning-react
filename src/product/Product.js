// import "./product.css";
import styles from "./product.module.css";
//simple using fargment
import { Fragment } from "react";
const Product = (props) => {
    return (
        <Fragment>
            <h1> {props.title}</h1>
            <p>{props.price}</p>
            <p>{props.children}</p>
        </Fragment>
    );
};
export default Product;
