import { ActionTypes } from "./ActionTypes"

 export const addToCart = (product)=>{
    return{
        type : ActionTypes.ADD_TO_CART,
        payload : product
    }
}