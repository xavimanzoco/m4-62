import { getProducts } from "@/services/products";
import ProductsList from "./components/products-list";

const getData = async () => {
  const products = await getProducts();
  const categories: any[] = []
  return { 
    products,
    categories
  };
}

export default async function Home() {
  const { products } = await getData();
  return (
    <div>
      <section className="w-full h-96 flex items-center justify-center relative">
        
        <img 
            src="https://plus.unsplash.com/premium_photo-1661751844960-598e1f867b71?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8" 
            alt="Hero Image"
            className="w-full h-full rounded-lg object-cover"
        />
      </section>
      <section>
        <h1 className="mb-5 mt-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center">Todas las herramientas</h1>
        <ProductsList products={products} />
      </section>
        
    </div>
  )
}