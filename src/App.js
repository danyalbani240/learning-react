import Product from "./Product";
const App = () => {
  return (
    <div className="pass">
      <h1>Products</h1>
      <Product price="200$" title="javascript course" >
        this is a good javascript course
      </Product>
    </div>
  );
};
export default App;
