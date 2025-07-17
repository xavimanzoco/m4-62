"use client";
import { useCartContext } from "@/context/cartContext";
import React from "react";
import ProductCartCard from "./product-card-cart";

const ProductsCartList = () => {
    const { cart, priceTotal } = useCartContext();

      if (cart === null) {
    return <div>Loading</div>
  }

    return (
        <>
            <ul className="divide-y divide-gray-200 mb-6">
                {cart?.map((product) => (
                    <ProductCartCard key={product.id} {...product || null} />
                ))}
            </ul>
            <div className="flex justify-between items-center border-t pt-4">
                <span className="text-lg font-semibold text-gray-700">Total:</span>
                <span className="text-xl font-bold text-black">${priceTotal()}</span>
            </div>
        </>
    )
}

export default ProductsCartList;