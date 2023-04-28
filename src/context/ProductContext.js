import axios from "axios";

import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    //* fetching products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                const data = response.data;
                // console.log("data:", data);
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
