import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

// const productsToPreLoad: IProduct[] = [
//   {
//     name: "iPhone 11",
//     price: 699,
//     description:
//       "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
//     image:
//       "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
//     categoryId: 1,
//     stock: 10,
//   },
//   {
//     name: "MacBook Air",
//     price: 999,
//     description:
//       "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
//     image:
//       "https://www.apple.com/v/macbook-air/a/images/meta/og__d5k62k8b4qka.png",
//     categoryId: 2,
//     stock: 10,
//   },
//   {
//     name: "iPad Pro",
//     price: 799,
//     description:
//       "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
//     image:
//       "https://www.apple.com/v/ipad-pro/a/images/meta/og__d8m6x7smkntm.png",
//     categoryId: 3,
//     stock: 10,
//   },
//   {
//     name: "Apple Watch Series 6",
//     price: 399,
//     description:
//       "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
//     image:
//       "https://www.apple.com/v/apple-watch-series-6/a/images/meta/og__c1zv8c8n7q06.png",
//     categoryId: 4,
//     stock: 10,
//   },
//   {
//     name: "AirPods Pro",
//     price: 249,
//     description:
//       "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
//     image:
//       "https://www.apple.com/v/airpods-pro/a/images/meta/og__c1zv8c8n7q06.png",
//     categoryId: 5,
//     stock: 10,
//   },
//   {
//     name: "HomePod mini",
//     price: 99,
//     description:
//       "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
//     image:
//       "https://www.apple.com/v/homepod-mini/a/images/meta/og__d5k62k8b4qka.png",
//     categoryId: 6,
//     stock: 10,
//   },
// ];
const productsToPreLoad: IProduct[] = [
  {
    name: "Martillo de Acero",
    price: 25,
    description: "Martillo resistente con cabeza de acero forjado y mango ergonómico de fibra de vidrio. Ideal para trabajos de carpintería y construcción.",
    image: "https://www.lusqtoff.com.ar/truper/wp-content/uploads/2024/04/16702.jpg",
    categoryId: 1,
    stock: 50,
  },
  {
	
		name: "Destornillador Phillips",
		description: "Juego de destornilladores profesionales con punta magnética para mayor precisión. Incluye 3 tamaños diferentes.",
		price: 8,
		stock: 100,
		image: "https://reguesrl.com.ar/wp-content/uploads/2024/11/Destornillador_Phillips.jpg",
		categoryId: 1
	},
	{
		name: "Llave Inglesa Ajustable",
		description: "Llave ajustable de 10 pulgadas con mecanismo de precisión para trabajos de fontanería y mecánica.",
		price: 18,
		stock: 75,
		image: "https://www.milwaukeetool.com/--/web-images/sc/b25b849b02934cb6b5977f13d9d5d12c?hash=006231bf5f34a4a51cc081c03a80fae5&lang=en",
		categoryId: 1
	},
	{

		name: "Taladro Percutor 750W",
		description: "Taladro eléctrico profesional con función percutor, velocidad variable y empuñadura anti-vibraciones.",
		price: 120,
		stock: 30,
		image: "https://bergalloypastrone.vtexassets.com/arquivos/ids/156958/Taladro-Percutor-Barovo-Te75b-750w-13mm-3100rpm-Veloc-Variab-1.jpg?v=638016257782130000",
		categoryId: 2
	},
	{
		
		name: "Sierra Circular 1800W",
		description: "Sierra circular potente con láser guía, ajuste de profundidad y ángulo para cortes precisos en madera y metal.",
		price: 150,
		stock: 20,
		image: "https://casabernabesca.com/wp-content/uploads/2017/11/2853.jpg",
		categoryId: 2
	},
	{
		
		name: "Pintura Blanca Mate 5L",
		description: "Pintura acrílica de alta cobertura para interiores, acabado mate y rápida secado. Cubre aproximadamente 12m² por litro.",
		price: 35,
		stock: 60,
		image: "https://pintureriasoceano.com.ar/wp-content/uploads/2021/06/TERSILUX-ESMALTE-MATE-3en1-BLANCO-4L.jpg",
		categoryId: 3
	},
	{
		name: "Cinta Métrica 8m",
		description: "Cinta métrica profesional de 8 metros con carcasa resistente a impactos y sistema de bloqueo automático.",
		price: 10,
		stock: 120,
		image: "https://andresmerino.com.ar/wp-content/uploads/2023/03/Truper-Cinta-Metrica-flexometro-8M.png",
		categoryId: 4
	},
	{
		name: "Guantes de Trabajo",
		description: "Guantes de protección con refuerzos en palma y dedos, material resistente a cortes y abrasiones.",
		price: 12,
		stock: 200,
		image: "https://oportunidades-vip.com.ar/wp-content/uploads/2025/07/Guantes_Trabajo_Antideslizantes_Reforzados_Tela_Y_Goma_300_D_734555-MLA80024852110_102024-O-6-1200x1200.jpg",
		categoryId: 5
	},
	{
		name: "Escalera Telescópica 3.5m",
		description: "Escalera extensible profesional con sistema de bloqueo seguro, peso máximo soportado 150kg y peldaños antideslizantes.",
		price: 180,
		stock: 15,
		image: "https://image.made-in-china.com/2f0j00PYTbdqVMbUpA/En-131-Multipurpose-Telescopic-Ladder-Multifunction-Telescopic-Little-Giant-Ladder.webp",
		categoryId: 6
	},
	{
		name: "Candado de Seguridad",
		description: "Candado de acero endurecido con mecanismo anti-palanca y resistencia a cortes. Incluye 2 llaves.",
		price: 15,
		stock: 80,
		image: "https://ecoway.com.ar/cdn/shop/files/CNDP0384AM_20_1_1c1db867-21a2-4e9e-b369-353601b04244.jpg?v=1745847742",
		categoryId: 7
	},
	{
		name: "Broca para Concreto 10mm",
		description: "Juego de brocas para hormigón y mampostería con punta de widia para mayor durabilidad.",
		price: 5,
		stock: 150,
		image: "https://bite.vtexassets.com/arquivos/ids/169194/32470.png?v=638334032934400000",
		categoryId: 8
	},
	{
		name: "Nivel Laser",
		description: "Nivel láser autónivelante con alcance de 20 metros, ideal para albañilería y trabajos de precisión.",
		price: 85,
		stock: 25,
		image: "https://www.abrafersrl.com.ar/wp-content/uploads/DNLI-3603.jpg",
		categoryId: 4
	},
	{
		name: "Carretilla de Obra",
		description: "Carretilla profesional de 100L con estructura reforzada, rueda neumática y capacidad de carga 200kg.",
		price: 75,
		stock: 18,
		image: "https://images.kkeu.de/is/image/BEG/Dispositivos_de_transporte_y_carros/Carretillas/Carretilla_para_obras_pdplarge-mrd--540571_AFS_00_00_00_5956687.jpg",
		categoryId: 9
	},
	{
		name: "Caja de Herramientas",
		description: "Maletín organizador de herramientas con 35 compartimentos, estructura rígida y cerradura de seguridad.",
		price: 45,
		stock: 40,
		image: "https://www.lusqtoff.com.ar/truper/wp-content/uploads/2024/04/11145.jpg",
		categoryId: 10
	},
	{
		
		name: "Extensión Eléctrica 10m",
		description: "Cable de extensión con 3 tomas, protección contra sobretensiones y cubierta resistente a la intemperie.",
		price: 28,
		stock: 65,
		image: "https://materialeszonaesmeralda.com/cdn/shop/products/42.jpg?v=1664319007",
		categoryId: 11
	}
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
