import { useState, useEffect } from "react";
import ShoppingCartStorage from "./ShoppingCartStorage";

/*
Custom hook for getting the local products stored in cart
*/
const useProducts = (initProd) => {
  const [products, setProducts] = useState(initProd);
  const fetchProducts = async () => {
    const initialProducts = await ShoppingCartStorage.getProducts();
    setProducts(initialProducts);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, refetch: fetchProducts };
};
export default useProducts;
