import { updateCartValue } from "./updateCartValue";

export const getCartPrductFromLS = () => {
    let cartProducts = localStorage.getItem("cartProductLS")
    if (!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts)
    //update the cart button value
    updateCartValue(cartProducts)

    return cartProducts
}