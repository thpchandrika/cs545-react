import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const ProductList = () => {
    const location = useLocation();
    const personName = useSelector(state => state.personName);
    const navigate = useNavigate();
    const productList = useSelector(state => state.productList);
    const dispatch = useDispatch();

    const handleAddProduct = e => {
        navigate("/addproductnumber");
    }

    const handleRemove = e => {
        dispatch({ type: "remove_product", productNumber: e.target.value })
    }

    return (
        <div>
            <h1>Products</h1>
            <div>User: <span id="personName">{personName}</span></div>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Product Number</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList.map(product => (
                                <tr key={product.productNumber}>
                                    <td>{product.productNumber}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productPrice}</td>
                                    <td><button onClick={handleRemove}
                                        value={product.productNumber}>remove</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <button id="addProductBtn" onClick={handleAddProduct}>Add New Product</button>
            </div>
        </div>
    )
}

export default ProductList;