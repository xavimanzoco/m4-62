import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 m-auto shadow-sm m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://google.com/" className="hover:underline">Xavier™</a>. Todos los derechos reservados.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Sobre</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Terminos</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licencias</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
    );
}

export default Footer

