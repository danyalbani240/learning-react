import Product from "../product/Product.js";
import { Fragment } from "react";
import { Component } from "react";
// const ProductList = (props) => {
//     return (
//         <Fragment>
//             {props.products.map((product) => {
//                 return (
//                     <Product
//                         key={product.title}
//                         price={product.price}
//                         title={product.title}
//                     >
//                         this is a good {product.title}
//                     </Product>
//                 );
//             })}
//         </Fragment>
//     );
// };

class ProductList extends Component {
    state = {
        products: [
            {
                price: "200$",
                title: "javascript course",
            },
            {
                price: "300$",
                title: "Vue course",
            },
            {
                price: "400$",
                title: "Nuxt course",
            },
            {
                price: "500$",
                title: "Pwa course",
            },
            {
                price: "600$",
                title: "Design Pattern course",
            },
        ],
    };

    handleDelete = (event, product) => {
        let index = this.props.products.findIndex(
            (item) => item.title === product.title
        );
        event.currentTarget.parentNode.parentNode.removeChild(
            event.currentTarget.parentNode
        );

        this.props.products.splice(index, index + 1);
    };
    render() {
        return (
            <Fragment>
                {this.props.products.map((product) => {
                    return (
                        <Product
                            delete={(e) => this.handleDelete(e, product)}
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
    }
}
export default ProductList;
