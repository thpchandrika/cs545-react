import EnterName from "./component/EnterName";
import ProductList from "./component/ProductList";
import AddProductNumber from "./component/AddProductNumber";
import AddProductName from "./component/AddProductName";
import AddProductPrice from "./component/AddProductPrice";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnterName />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/addproductnumber" element={<AddProductNumber />} />
        <Route path="/addproductname" element={<AddProductName />} />
        <Route path="/addproductprice" element={<AddProductPrice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
