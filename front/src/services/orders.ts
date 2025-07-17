"use server"

import { CreateOrderDto } from "@/types";
import { axiosApiBack } from ".";

export const postOrders = async (token: string, body: CreateOrderDto) => {
    try {
        const response = await axiosApiBack.post('/orders', body, {
            headers: {
                Authorization: token,
            }
        });


        if (!response.data) {
            console.warn("Order not created", response.data);
            return {
                message: "Order not created",
                error: response?.data || "Unknown error"
            };
        }

        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error creatin order products:", error.message);


            return {
                message: "Order not created",
                error: error?.message || "Ocurrio un error"
            };
        }
        return null;
    }

};

export const getUserOrders = async (token: string) => {
    try {
        const response = await axiosApiBack.get('/users/orders', {
            headers: {
                Authorization: token,
            }
        }
        );

        if (!response.data || !Array.isArray(response.data)) {
            console.warn("Invalid orders data format", response.data);
            return [];
        }

        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching order list:", error.message);
        }

        return [];
    }
}