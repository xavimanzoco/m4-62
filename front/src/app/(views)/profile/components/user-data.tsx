"use client";
import { useAuthContext } from "@/context/authContext";
import { Loader } from "lucide-react";
import React from "react";

const UserData = () => {
    const { user } = useAuthContext();

    if (user === null) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader className="animate-spin w-10 h-10 text-primary" />
                <span className="ml-4 text-grey-700 text-lg font-medium">Cargando usuario...</span>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center py-12">
                <span className="text-gray-400 text-lg">No hay datos de usuario disponibles</span>
            </div>
        );
    }

    return (
        <div className="mb-10 p-8  rounded-2xl shadow-lg border border-blue-100 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-grey-700 mb-6 text-center">Datos del Usuario</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                    <span className="w-32 font-semibold text-gray-700">Nombre:</span>
                    <span className="text-gray-900">{user.name}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-32 font-semibold text-gray-700">Email:</span>
                    <span className="text-gray-900">{user.email}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-32 font-semibold text-gray-700">Dirección:</span>
                    <span className="text-gray-900">{user.address}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-32 font-semibold text-gray-700">Teléfono:</span>
                    <span className="text-gray-900">{user.phone}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-32 font-semibold text-gray-700">Rol:</span>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-grey-700 font-semibold text-sm">{user.role}</span>
                </div>
            </div>
        </div>
    );
}

    export default UserData
