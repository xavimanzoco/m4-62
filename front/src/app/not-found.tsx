import Link from "next/link";
import React from "react";

const PageMotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Página no encontrada</h2>
        <p className="text-gray-600 mb-6">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          href="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default PageMotFound;