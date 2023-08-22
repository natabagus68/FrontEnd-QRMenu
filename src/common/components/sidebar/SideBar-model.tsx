import { useState } from "react";

export const useSideBar = () => {
  const [products, setProducts] = useState(false);
  const openProduct = () => setProducts(!products);
  return {
    products,
    openProduct,
  };
};
