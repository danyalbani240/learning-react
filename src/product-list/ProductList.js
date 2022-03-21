import Product from "../product/Product.js";
import { Fragment } from "react";
const ProductList = (props) => {
    return (
        <Fragment>
            {props.products.map((product) => {
                return (
                    <Product
                        key={product.title}
                        price={product.price}
                        title={product.title}
                    >
                        this is a good {product.title}
                    </Product>
                );
            })}
        </Fragment>
    );
};

export default ProductList;
