import React from "react";
// import NavItem from "./nav-item";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiHammer } from "react-icons/pi";
// import { NavLinks } from "@/contants/navLinks";
import Link from "next/link";
import { routes } from "@/routes";
import { AuthNavbar } from "./auth-navbar";

export const Navbar = () => {
  return (
        <>
        <nav className="bg-primary-700 p-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={routes.home}
         className="flex items-center space-x-3 rtl:space-x-reverse">
            <PiHammer />
            <span className="self-center text-2xl text-inherit font-black whitespace-nowrap dark:text-white">HAMMER STORE</span>
        </Link>
        <div className="gap-2 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <RxHamburgerMenu />
            </button>
        </div>
        {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col text-white font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {NavLinks.map((link) => (
                <NavItem key={link.href} href={link.href} label={link.label} />
            ))}

            </ul>
        </div> */}
        <AuthNavbar />
        </div>
        </nav>
        </>
  );
}