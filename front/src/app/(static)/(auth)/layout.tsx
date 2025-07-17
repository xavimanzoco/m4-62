import { routes } from "@/routes";
import Link from "next/link";
import { FC } from "react";
import { PiHammer } from "react-icons/pi";

interface LayoutMainAuthProps {
    children: React.ReactNode;
}
const LayoutMainAuth: FC<LayoutMainAuthProps> = ({ children }) => {
        return (
            

            <div className="flex min-h-screen">
                {/* Left side: white background with card */}
                <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white">
                    
                    <Link href={routes.home} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <PiHammer />
                    <span className="self-center text-2xl text-inherit font-black whitespace-nowrap dark:text-white">HAMMER STORE</span>
                    </Link>
                    
                    <div className="w-full max-w-md p-4 rounded-lg shadow-lg bg-white">
                        {children}
                    </div>
                </div>
                {/* Right side: full image */}
                <div className="hidden md:block md:w-1/2 h-screen">
                    <img
                        src="https://media.istockphoto.com/id/596042932/es/foto/conjunto-de-herramientas-de-trabajo-de-la-mano-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=KFPIvtYGal_ZyadcyUY44Y28DbdfEcPVtjOXnl-Vn7E="
                        alt="Auth Background"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        
            
            
        );
    }
    
    export default LayoutMainAuth;