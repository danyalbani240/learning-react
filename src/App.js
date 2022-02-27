import React, { useState } from "react";
import HookCounter from "./HookCounter";
import HookObject from "./HookObject";
import Product from "./Product";

//functinal component
// const App = () => {
//   return (
//     <div className="pass">
//       <h1>Products</h1>
//       <Product price="200$" title="javascript course" >
//         this is a good javascript course
//       </Product>
//     </div>
//   );
// };
//class component
// class App extends React.Component {
//     state = {
//         products: [
//             {
//                 price: "200$",
//                 title: "javascript course",
//             },
//             {
//                 price: "300$",
//                 title: "Vue course",
//             },
//             {
//                 price: "400$",
//                 title: "Nuxt course",
//             },
//             {
//                 price: "500$",
//                 title: "Pwa course",
//             },
//             {
//                 price: "600$",
//                 title: "Design Pattern course",
//             },
//         ],
//     };
//     reducePrice = () => {
//         this.setState({
//             products: [
//                 {
//                     price: "100$",
//                     title: "javascript course",
//                 },
//                 {
//                     price: "200$",
//                     title: "Vue course",
//                 },
//                 {
//                     price: "300$",
//                     title: "Nuxt course",
//                 },
//                 {
//                     price: "400$",
//                     title: "Pwa course",
//                 },
//                 {
//                     price: "500$",
//                     title: "Design Pattern course",
//                 },
//             ],
//         });
//     };
//     render() {
//         return (
//             <div className="pass">
//                 <h1>Products</h1>
//                 {this.state.products.map((product) => {
//                     return (
//                         <Product
//                             key={product.title}
//                             price={product.price}
//                             title={product.title}
//                         >
//                             this is a good {product.title}
//                         </Product>
//                     );
//                 })}
//                 <button onClick={this.reducePrice}>Offer</button>
//             </div>
//         );
//     }
// }

//functional again
const App = () => {
    // const [products, setProducts] = useState([
    //     {
    //         price: "100$",
    //         title: "javascript course",
    //     },
    //     {
    //         price: "200$",
    //         title: "Vue course",
    //     },
    //     {
    //         price: "300$",
    //         title: "Nuxt course",
    //     },
    //     {
    //         price: "400$",
    //         title: "Pwa course",
    //     },
    //     {
    //         price: "500$",
    //         title: "Design Pattern course",
    //     },
    // ]);
    // const reducePrice = () => {
    //     setProducts([
    //         {
    //             price: "200$",
    //             title: "javascript course",
    //         },
    //         {
    //             price: "300$",
    //             title: "Vue course",
    //         },
    //         {
    //             price: "400$",
    //             title: "Nuxt course",
    //         },
    //         {
    //             price: "500$",
    //             title: "Pwa course",
    //         },
    //         {
    //             price: "550$",
    //             title: "Design Pattern course",
    //         },
    //     ]);
    // };
    return (
        <div className="pass">
            {/* <h1>Products</h1>
            {products.map((product) => {
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
            <button onClick={reducePrice}>Offer</button> */}
            {/* <HookCounter /> */}
            {/* <HookObject /> */}
        </div>
    );
};
export default App;
