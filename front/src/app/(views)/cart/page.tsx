import React from "react";
import CreateOrder from "./components/create-order";
import ProductsCartList from "./components/product-cart-list";

const PageCart = () => {

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Carrito de Compras</h1>
      <ProductsCartList />

      <CreateOrder />
    </div>
  );
}

export default PageCart