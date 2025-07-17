'use client';

import { IProduct } from "@/helpers/products";
import { routes } from "@/routes";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import AddCartButton from "./add-cart-button";


const ProductCard: FC<Partial<IProduct>> = (product) => { 
    const {
        description,
        id,
        image,
        name,
        price,
        // stock,
} = product
    const router = useRouter()
    const handleClick = () => {
        router.push(`${routes.product_detail}/${id}/${name}`);
    };
    return (

        <div className="w-full max-w-sm">
            <div
                className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer flex flex-col h-[450px]"
                onClick={handleClick}
            >
                <div className="flex-1 flex items-center justify-center">
                    <img
                        className="p-8 rounded-t-lg object-contain h-48 w-full"
                        src={image || "/docs/images/products/apple-watch.png"}
                        alt={name || "product image"}
                    />
                </div>
                <div className="px-5 pb-5 flex flex-col justify-between flex-none">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {name || "Product Name"}
                    </h5>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                        {description || "Product description"}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${price || "00.0"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-4 px-5 pb-5">
                <AddCartButton product={product} />
            </div>
        </div>

    )
}

export default ProductCard;