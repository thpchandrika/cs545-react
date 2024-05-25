import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AddProductPrice = () => {
    const personName = useSelector(state => state.personName);
    const navigate = useNavigate();
    const location = useLocation();
    const [product, setProduct] = useState(location.state.product);
    const dispatch = useDispatch();

    const handleChangeField = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const handleNext = e => {
        const updatedProduct = {
            ...product,
            productPrice: parseFloat(product.productPrice)
        }
        dispatch({ type: "addproduct", product: updatedProduct });
        navigate("/productlist");
    }

    return (
        <div>
            <h1>Enter Product Price</h1>
            <div>User: <span id="personName">{personName}</span></div>
            <div>Product Number: {product.productNumber}</div>
            <div>Product Name: {product.productName}</div>
            <div>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Product Price</td>
                            <td><input type="number"
                                id="productPrice"
                                name="productPrice"
                                placeholder="Enter Product Price"
                                value={product.productPrice}
                                onChange={handleChangeField}
                            /></td>
                        </tr>
                    </tbody>
                </table>
                <button id="nextBtn" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default AddProductPrice;