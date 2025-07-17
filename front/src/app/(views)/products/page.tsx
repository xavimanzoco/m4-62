import { categories } from "@/helpers/categories";
import React from "react";
import ProductsList from "../(home)/components/products-list";
import { getProductsByCategory } from "@/services/products";
import Link from "next/link";
import { routes } from "@/routes";
import clsx from "clsx";

const ProductsPage = async ({

  searchParams,
}: {
  searchParams?: { category?: string };
}) => {
  const { category = undefined } = (searchParams) || {};
  console.log("Category:", category);
  const products = await getProductsByCategory(category || "all");

  return (
    <div className="flex gap-8">
      {/* Sidebar de categorías */}
      <aside className="min-w-[220px] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-6 border-b pb-2">Categorías</h2>
        <ul className="list-none p-0 space-y-3">
          <li>
            <Link href={routes.products + `?category=all`}>
              <span
                className={clsx(
                  "cursor-pointer transition-colors hover:text-blue-600 hover:underline",
                  { "font-bold text-blue-700": category === "all" || !category }
                )}
              >
                Ver Todas
              </span>
            </Link>
          </li>
          {categories.map((currentCategory) => (
            <li key={currentCategory.id}>
              <Link href={routes.products + `?category=${currentCategory.id}`}>
                <span
                  className={clsx(
                    "cursor-pointer transition-colors hover:text-blue-600 hover:underline",
                    {
                      "font-bold text-blue-700":
                        currentCategory.id.toLocaleString() === category,
                    }
                  )}
                >
                  {currentCategory.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {/* Lista de productos */}
      <main className="flex-1 bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-8 border-b pb-3">Productos</h1>
        <ProductsList products={products} />
      </main>
    </div>
  );
}


export default ProductsPage