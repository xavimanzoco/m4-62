import React from "react";

const productos = [
    { nombre: "Auriculares Bluetooth", descripcion: "Sonido envolvente y batería de larga duración." },
    { nombre: "Smartwatch Deportivo", descripcion: "Monitorea tu actividad física y recibe notificaciones." },
    { nombre: "Mochila Antirrobo", descripcion: "Ideal para viajes y uso diario, con compartimentos seguros." },
    { nombre: "Lámpara LED Inteligente", descripcion: "Controla la luz desde tu móvil y ahorra energía." },
    { nombre: "Botella Térmica", descripcion: "Mantiene tus bebidas frías o calientes por horas." },
];

function getProductoAleatorio() {
    const indice = Math.floor(Math.random() * productos.length);
    return productos[indice];
}

export default function LandingPage() {
    const producto = getProductoAleatorio();

    return (
        <main
            style={{
                fontFamily: "sans-serif",
                padding: "2rem",
                textAlign: "center",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #e0e7ff 0%, #f9fafb 100%)",
            }}
        >
            <h1 style={{ color: "#1e293b", fontSize: "2.5rem", marginBottom: "1rem", letterSpacing: "1px" }}>
                ¡Bienvenido a nuestra tienda!
            </h1>
            <h2 style={{ color: "#2563eb", fontWeight: 500, marginBottom: "2rem" }}>
                Este producto es para vos:
            </h2>
            <div
                style={{
                    margin: "2rem auto",
                    padding: "2rem",
                    border: "1px solid #dbeafe",
                    borderRadius: "16px",
                    maxWidth: "400px",
                    background: "#fff",
                    boxShadow: "0 4px 24px rgba(37, 99, 235, 0.08)",
                }}
            >
                <h3 style={{ color: "#0ea5e9", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {producto.nombre}
                </h3>
                <p style={{ color: "#334155", marginBottom: "1.5rem" }}>
                    {producto.descripcion}
                </p>
                <button
                    style={{
                        padding: "0.75rem 1.5rem",
                        background: "linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "1rem",
                        boxShadow: "0 2px 8px rgba(37, 99, 235, 0.15)",
                        transition: "background 0.2s",
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = "#1d4ed8")}
                    onMouseOut={e => (e.currentTarget.style.background = "linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%)")}
                >
                    ¡Lo quiero!
                </button>
            </div>
        </main>
    );
}