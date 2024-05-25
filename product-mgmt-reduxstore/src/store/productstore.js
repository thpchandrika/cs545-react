import { configureStore } from "@reduxjs/toolkit";

const productReducer = (state = { personName: "", productList: [] }, action) => {
    if (action.type === 'set_person_name') {
        return {
            ...state,
            personName: action.personName
        }
    }
    if (action.type === 'addproduct') {
        return {
            ...state,
            productList: state.productList.concat(action.product)
        }
    }
    if (action.type === 'remove_product') {
        return {
            ...state,
            productList: state.productList.filter(product =>
                product.productNumber !== parseInt(action.productNumber))
        }
    }
    return state;
}

const productstore = configureStore({
    reducer: productReducer
});

export default productstore;