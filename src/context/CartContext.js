import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const [itemAmount, setItemAmount] = useState(0);

    // *
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount;
        }, 0);
        setTotal(total);
    });

    //* update item amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setItemAmount(amount);
        }
    }, [cart]);

    // * add to cart
    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };

        // * checking if item is already in cart

        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
        // console.log("newItem:", newItem);
        // console.log(`${product.title} addToCart`);
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    // * remove cart
    const clearCart = () => {
        setCart([]);
    };

    //* increase amount
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        // console.log("item:", cartItem);
        addToCart(cartItem, id);
    };

    // * decrease amount

    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        // console.log("item:", cartItem);

        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }

        if (cartItem.amount < 2) {
            removeFromCart(id);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseAmount,
                decreaseAmount,
                itemAmount,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
