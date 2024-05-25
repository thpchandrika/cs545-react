import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const AddProductName = () => {
    const personName = useSelector(state => state.personName);
    const navigate = useNavigate();
    const location = useLocation();
    const [product, setProduct] = useState(location.state.product);

    const handleChangeField = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const handleNext = e => {
        navigate("/addproductprice", { state: { product: product } });
    }

    return (
        <div>
            <h1>Enter Product Name</h1>
            <div>User: <span id="personName">{personName}</span></div>
            <div>Product Number: {product.productNumber}</div>
            <div>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Product Name</td>
                            <td><input type="text"
                                id="productName"
                                name="productName"
                                placeholder="Enter Product Name"
                                value={product.productName}
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

export default AddProductName;