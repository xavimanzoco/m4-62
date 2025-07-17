"use client";
import Modal from "@/components/layout/modal";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { routes } from "@/routes";
import { postOrders } from "@/services/orders";
import { CreateOrderDto } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateOrder = () => {
    const { resetCart } = useCartContext();
    const router = useRouter();
    const {token, user } = useAuthContext();
    const {cart} = useCartContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    const handleOrder = async () => {
        try{
            const payload:CreateOrderDto = {
                products: cart?.map((product) => product.id!) || [],
                userId: user?.id!,
            };

            const response = await postOrders (token || "", payload );

            if (!response || response?.error) {
                return toast.error("Ocurrio un error al crear la orden");
            }

            toast.success(`Orden creada con exito` );
            setTimeout(() => {
                resetCart();
            }, 1990);

            setTimeout(() => {
                router.push(routes.profile);
            }, 2000);
        }catch (error) {
            console.warn("Error creating order:", (error as Error)?.message);
            return toast.error("Ocurrio un error al crear la orden");
    }
}
    return (

        <>
        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-full shadow-lg font-bold text-lg hover:from-primary-700 hover:to-primary-900 transition-all duration-200"
            onClick={onOpen}
          >
            Crear Orden
          </button>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <div className="p-8 flex flex-col items-center">
            <div className="mb-6 text-xl font-semibold text-gray-800 text-center">
              ¿Estás seguro que deseas crear la orden?
            </div>
            <div className="flex gap-4">
              <button
            className="px-6 py-2 bg-primary-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition"
            onClick={handleOrder}
              >
            Confirmar
              </button>
              <button
            className="px-6 py-2 bg-gray-800 text-white rounded-full font-semibold shadow hover:bg-red-700 transition"
            onClick={onClose}
              >
            Cancelar
              </button>
            </div>
          </div>
        </Modal>
            
        </>
)
}
export default CreateOrder;
