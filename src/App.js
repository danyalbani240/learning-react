import React, { useState } from "react";
import HookCounter from "./HookCounter";
import HookObject from "./HookObject";
import HookArray from "./HookArray";
import Product from "./product/Product";
import ProductList from "./product-list/ProductList";
import "./App.css";

//class component
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Products</h1>
                <ProductList />
            </div>
        );
    }
}

export default App;
