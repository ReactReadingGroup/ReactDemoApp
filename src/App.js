import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import { ProductObj } from "./Components/Products/ProductsObj";

function App() {
  return (
      <>
        <Nav />
        <Products productObj={ProductObj}/>
        <Footer />
      </>
  );
}

export default App;
