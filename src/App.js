import React from "react";
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
class App extends React.Component {
  render() {
    return (
      <div className="pass">
        <h1>Products</h1>
        <Product price="200$" title="javascript course">
          this is a good javascript course
        </Product>
      </div>
    );
  }
}
export default App;
