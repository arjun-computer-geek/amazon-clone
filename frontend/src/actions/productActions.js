const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = require("../constants/productConstants")

const listProducts = () => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await (await fetch('http://localhost:8000/api/products')).json;
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    }
    catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }

}

export { listProducts };