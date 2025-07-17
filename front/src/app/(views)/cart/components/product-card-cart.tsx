"use client";
import { useCartContext } from "@/context/cartContext";
import { IProduct } from "@/helpers/products";
import React from "react";

const ProductCartCard = (product:Partial <IProduct> | null) => {
    const {removeFromCart} = useCartContext();
    if (!product) {
        return; 
    }

    return (
        <li key={product.id} className="flex items-center justify-between py-4">
            <div className="flex items-center">
                {product.image && (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded mr-4 border border-gray-200"
                    />
                )}
                <div>
                    <span className="font-medium text-gray-700">{product.name}</span>
                    <span className="block text-sm text-gray-400">Descripcion: {product.description}</span>
                </div>
            </div>
            <span className="text-lg font-semibold text-indigo-600">${product.price}</span>
            <button
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                onClick={() => removeFromCart(product.id || 0)}
            >
                BORRAR
            </button>
        </li>
    );

    }

    export default ProductCartCard;