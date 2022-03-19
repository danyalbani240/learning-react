import "./product.css";
const Product = (props) => {
    return (
        <div className="product">
            <h1> {props.title}</h1>
            <p>{props.price}</p>
            <p>{props.children}</p>
        </div>
    );
};
export default Product;
