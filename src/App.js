import React, { useState } from "react";
// import HookCounter from "./HookCounter";
// import HookObject from "./HookObject";
// import HookArray from "./HookArray";
import Product from "./product/Product";
import "./App.css";
/*
let me explain this commit.
read this at the end of watching code
in classed methods this is undefind so we should bind it in constructor like down here we did it.
but this is not the godd way because if we have lots of methods it will be bad wat's the best way?
the first way we did it we should use arrow functions like simple reducePrice method

*/
//class component
class App extends React.Component {
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
    constructor() {
        super();
        this.reducePrice2 = this.reducePrice2.bind(this);
    }
    //question why we can't use simple method for this?
    reducePrice = () => {
        this.setState({
            products: [
                {
                    price: "100$",
                    title: "javascript course",
                },
                {
                    price: "200$",
                    title: "Vue course",
                },
                {
                    price: "300$",
                    title: "Nuxt course",
                },
                {
                    price: "400$",
                    title: "Pwa course",
                },
                {
                    price: "500$",
                    title: "Design Pattern course",
                },
            ],
        });
    };
    //let's try this.
    reducePrice2() {
        console.log(this);

        this.setState({
            products: [
                {
                    price: "100$",
                    title: "javascript course",
                },
                {
                    price: "200$",
                    title: "Vue course",
                },
                {
                    price: "300$",
                    title: "Nuxt course",
                },
                {
                    price: "400$",
                    title: "Pwa course",
                },
                {
                    price: "500$",
                    title: "Design Pattern course",
                },
            ],
        });
    }
    //the result is an error .

    render() {
        return (
            <div className="container">
                <h1>Products</h1>
                {this.state.products.map((product) => {
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
                <button onClick={this.reducePrice2}>Offer</button>
            </div>
        );
    }
}

export default App;
