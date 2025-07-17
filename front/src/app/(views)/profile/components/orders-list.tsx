"use client"
import { useAuthContext } from "@/context/authContext";
import { getUserOrders } from "@/services/orders";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

const OrdersList = () => {
    const [orders, setOrders] = useState<IOrder[] | null>();
    const [loading, setLoading] = useState<boolean | null>(true);

    const { token } = useAuthContext();
    useEffect(() => {
        const request = async () => {
            try {
                setLoading(true);

                if (token === null) {
                    throw Error("No token dont exist");
                }
                const response = await getUserOrders(token!);

                setOrders(response);
            }catch (error) {
                console.warn("Error fetching orders:", (error as Error)?.message);
                setOrders([]);
            }
            finally {
                setLoading(false);
            }
        }

        if (typeof token === "string") {
            request();
        }
    }, [token]);

    if(loading) {
        return <Loader />;
    }
    return (

        <ul>
            {orders?.map(order => (
            <li key={order.id} style={{ marginBottom: "2rem", border: "1px solid #ccc", borderRadius: 6, padding: "1rem" }}>
              <div><strong>ID:</strong> {order.id}</div>
              <div><strong>Estado:</strong> {order.status}</div>
              <div><strong>Fecha:</strong> {new Date(order.date).toLocaleString()}</div>
              <div>
              <strong>Productos:</strong>
              <ul style={{ marginLeft: "1rem" }}>
                {order.products.map(product => (
                <li key={product.id} style={{ marginBottom: "0.5rem" }}>
                  <img src={product.image} alt={product.name} style={{ width: 50, height: 50, objectFit: "cover", marginRight: 8, verticalAlign: "middle" }} />
                  <span>{product.name} - ${product.price}</span>
                  <div style={{ fontSize: "0.9em", color: "#555" }}>{product.description}</div>
                  <div style={{ fontSize: "0.9em" }}>Stock: {product.stock}</div>
                  <div style={{ fontSize: "0.9em" }}>Categoría ID: {product.categoryId}</div>
                </li>
                ))}
              </ul>
              </div>
            </li>
            ))}
            {!Boolean(orders?.length) && <span> No hay ordenes para este usuario</span>}
        </ul>

    );
}
export default OrdersList;