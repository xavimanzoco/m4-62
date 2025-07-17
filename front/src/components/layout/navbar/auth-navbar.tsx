'use client';
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { routes } from "@/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCartOutline, IoLogOutOutline } from "react-icons/io5";
import { PiUserCircleDuotone } from "react-icons/pi";

export const AuthNavbar = () => {
    const { isAuth, resetUserData } = useAuthContext();

    const pathname = usePathname();

    const { total, resetCart } = useCartContext();
    
    const { user } = useAuthContext();

const logout = () => {
    resetUserData();
    resetCart();
    if(pathname === routes.home) {
    location.href = routes.login;

    return;
    }
};

if (isAuth === null) {
    return <div>Loading...</div>

}

 if (!isAuth) {
    return (
    <div className="gap-2 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link href={routes.login}>
        <button  className="text-primary bg-white hover:bg-primary-50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Iniciar sesión</button></Link>
        <Link href={routes.register}>
        <button  className="text-primary bg-white hover:bg-primary-50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Registrarse</button></Link>
    </div>
    );
 }
    return (
        <div className="gap-2 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href={routes.cart}>
                <div className="relative">
                    <IoCartOutline className="h-8 w-8 text-white" />
                    {Boolean(total) &&  
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                            {total}
                        </span>
                    }
                </div>
            </Link>
                <Link href={routes.profile} className="flex items-center space-x-2 rtl:space-x-reverse">
                    <PiUserCircleDuotone className=" h-8 w-8 text-white" />
                    <span>{user.name}</span>
                </Link>
        
            <div onClick={logout} className="cursor-pointer">
                
                    <IoLogOutOutline className=" h-8 w-8 text-white" />
                
        </div>
        </div>
    )
        
}