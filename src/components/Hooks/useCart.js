import { useEffect, useState } from "react"
import { getStoredCart } from "../Pages/Orders/Utilities/AddToDb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);
        console.log(keys)
        fetch('https://whispering-tor-70957.herokuapp.com/productByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(foods => {
                for (const id in storedCart) {
                    const addedProduct = foods.find(food => food._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart);
            })

    }, []);

    return [cart, setCart];
}

export default useCart;