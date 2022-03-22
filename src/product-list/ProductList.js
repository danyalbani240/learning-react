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

    handleDelete = (product) => {
        console.log(product);
        let filteredProducts = this.state.products.filter(
            (item) => item.title != product.title
        );
        this.setState({
            products: filteredProducts,
        });
    };
    render() {
        return (
            <Fragment>
                {this.state.products.map((product) => {
                    return (
                        <Product
                            delete={(e) => this.handleDelete(product)}
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
