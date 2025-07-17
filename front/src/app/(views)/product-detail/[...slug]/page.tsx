import AddCartButton from "@/components/ui/product-card/add-cart-button";
import { routes } from "@/routes";
import { getProductById } from "@/services/products";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page({
    params,
}: {
    params: Params<{ slug: string[] }>;

}) {

    const { slug } = await params;
    const id = slug[0];

    const product = await getProductById(id);

    if (!product) {
        return redirect(routes.notFound);
    }

    return (
    <div style={{ 
      maxWidth: 600, 
      margin: "2rem auto", 
      padding: "2rem", 
      border: "1px solid #eee", 
      borderRadius: 8 
    }}>
      <h1 style={{ marginBottom: 16 }}>{product.name}</h1>
      
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{ 
            width: "100%", 
            maxHeight: 300, 
            objectFit: "cover", 
            borderRadius: 8, 
            marginBottom: 16 
          }}
        />
      )}

      <p style={{ fontSize: 18, marginBottom: 8 }}>
        <strong>Precio:</strong> ${product.price}
      </p>
      
      <p style={{ color: "#555", marginBottom: 16 }}>
        {product.description}
      </p>
      
      <AddCartButton product={product} />
    </div>

    )
}
