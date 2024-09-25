import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./components/Cart/Cart";
import ProdCategory from "./components/ProdCategory/ProdCategory";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components//Newsletter/Newsletter";
import AppContext from "./utils/AppContext";
import Products from "./components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProdCategory/:id" element={<ProdCategory />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          {/* <Route path="/Products/:id" element={<Products />} /> */}
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
