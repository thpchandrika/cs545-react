import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProductNumber = () => {
    const personName = useSelector(state => state.personName);
    const navigate = useNavigate();
    const clearProduct = {
        productNumber: '',
        productName: '',
        productPrice: ''
    };
    const [product, setProduct] = useState(clearProduct);

    const handleChangeField = e => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleNext = () => {
        const updatedProduct = {
            ...product,
            productNumber: parseInt(product.productNumber)
        }
        navigate("/addproductname", { state: { product: updatedProduct } });
    }

    return (
        <div>
            <h1>Enter Product Number</h1>
            <div>User: <span id="personName">{personName}</span></div>
            <div>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Product Number</td>
                            <td><input type="number"
                                id="productNumber"
                                name="productNumber"
                                placeholder="Enter Product Number"
                                value={product.productNumber}
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

export default AddProductNumber;