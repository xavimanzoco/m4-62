import Link from "next/link";
import React, { FC } from "react";

interface NavItemProps {
    href: string;
    label: string;

}

const NavItem: FC<NavItemProps> = (
    {href ="#",
    label= "Label Link"}
) => {

    return (
            <li>
                <Link 
                href={href} className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent text-white" aria-current="page">{label}</Link>
            </li>
    )
};

export default NavItem;