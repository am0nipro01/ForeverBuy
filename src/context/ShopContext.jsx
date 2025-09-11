import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '€';
    const delivery_fee = 100;

    const value = {
        products
    }

    return (
        <ShopContext.Provider>
            {props.children}
        </ShopContext.Provider>
    )
}