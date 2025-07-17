"use client"
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { IProduct } from "@/helpers/products";
import { routes } from "@/routes";
import Link from "next/link";
import React, { FC } from "react"
import { toast } from "react-toastify";

const AddCartButton: FC<{ product: Partial<IProduct> }> = ({ product }) => {

    const { isAuth } = useAuthContext();
    const { addToCart, isProductInCart } = useCartContext();
    const isOnCart = isProductInCart(product?.id || 0);
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        addToCart(product);

        return toast.success("Producto agregado al carrito", {
            autoClose: 1000,
        });

    };


    if (!isAuth)
        return (
            <div>
                <p>Por favor, <Link href={routes.login} className="text-primary">inicia sesion</Link> para agregar productos al carrito</p>
            </div>
        )

    if (isOnCart) {
        return <button className="text-white bg-primary-50 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled cursor-not-allowed">Producto agregado</button>
    }

    return <button className="text-white bg-primary hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddToCart}>Agregar al carrito</button>

}

export default AddCartButton;