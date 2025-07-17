'use server';

import { IProduct } from "@/helpers/products";
import axios from "axios";

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL || "http://localhost:3004"
});


export const getProducts = async () => {
    try {
        const response = await axiosApiBack.get('/products');

        if (!response.data || !Array.isArray(response.data)) {
            console.warn("Invalid response data format", response.data);
            return [];
        }

        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching products:", error.message);
        }

        return [];
    }
}

export const getProductById = async (id:string): Promise<IProduct | null> => {
    try {
        const response = await axiosApiBack.get('/products/' + id);

        if (!response.data) {
            console.warn("Invalid product data format", response.data);
            return null;
        }

        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching product:", error?.message);
        }

        return null;
    }
}

export const getProductsByCategory = async (categoryId: string): Promise<IProduct[]> => {
    try {
        const response = await axiosApiBack.get("/products/category/" + categoryId);

        if (!response.data || !Array.isArray(response.data)) {
            console.warn("Invalid products by category data format", response.data);
            return [];
        }

        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching products by category:", error?.message);
        }

        return [];
    }
}