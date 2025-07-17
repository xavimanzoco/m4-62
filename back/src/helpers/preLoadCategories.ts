import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
    { name: 'Herramientas Manuales' },          // Martillos, destornilladores, alicates, etc.
    { name: 'Herramientas Eléctricas' },       // Taladros, sierras, lijadoras, etc.
    { name: 'Pinturas y Accesorios' },         // Pinturas, brochas, rodillos, etc.
    { name: 'Instrumentos de Medición' },       // Cintas métricas, niveles, calibradores
    { name: 'Equipo de Seguridad' },            // Guantes, gafas, cascos, arneses
    { name: 'Andamios y Escaleras' },           // Escaleras de extensión, andamios
    { name: 'Cerraduras y Herrajes' },          // Candados, bisagras, cerrojos
    { name: 'Brocas y Accesorios' },            // Brocas, discos de corte, lijas
    { name: 'Equipo para Construcción' },       // Carretillas, mezcladoras, palas
    { name: 'Organización de Herramientas' },   // Cajas, maletines, paneles
    { name: 'Electricidad e Iluminación' },     // Cables, extensiones, portalámparas
    { name: 'Fontanería' },                     // Llaves de tubo, desatascadores
    { name: 'Jardinería y Exteriores' },        // Cortacéspedes, mangueras
    { name: 'Fijaciones y Adhesivos' },         // Tornillos, clavos, pegamentos
    { name: 'Maquinaria Pesada' }               // Compactadoras, hormigoneras
];
const categoriesToPreLoad1: ICategory[] = [
    { name: 'Smartphones' },
    { name: 'Laptops' },
    { name: 'Tablets' },
    { name: 'Headphones' },
    { name: 'Cameras' },
    { name: 'Printers' },
    { name: 'Monitors' },
    { name: 'Storage' },
    { name: 'Accessories' }
];

export const preLoadCategories = async () => {
    const categories = await CategoryRepository.find();
    if (!categories.length) await AppDataSource.createQueryBuilder().insert().into(Category).values(categoriesToPreLoad).execute();
    console.log('Categories preloaded');
}