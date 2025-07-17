export interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	stock: number;
	image: string;
	categoryId: number;
}

export const products: IProduct[]   = [
	{
		"id": 1,
		"name": "Martillo de Acero",
		"description": "Martillo resistente con cabeza de acero forjado y mango ergonómico de fibra de vidrio. Ideal para trabajos de carpintería y construcción.",
		"price": 25,
		"stock": 50,
		"image": "https://www.lusqtoff.com.ar/truper/wp-content/uploads/2024/04/16702.jpg",
		"categoryId": 1
	},
	{
		"id": 2,
		"name": "Destornillador Phillips",
		"description": "Juego de destornilladores profesionales con punta magnética para mayor precisión. Incluye 3 tamaños diferentes.",
		"price": 8,
		"stock": 100,
		"image": "https://reguesrl.com.ar/wp-content/uploads/2024/11/Destornillador_Phillips.jpg",
		"categoryId": 1
	},
	{
		"id": 3,
		"name": "Llave Inglesa Ajustable",
		"description": "Llave ajustable de 10 pulgadas con mecanismo de precisión para trabajos de fontanería y mecánica.",
		"price": 18,
		"stock": 75,
		"image": "https://www.milwaukeetool.com/--/web-images/sc/b25b849b02934cb6b5977f13d9d5d12c?hash=006231bf5f34a4a51cc081c03a80fae5&lang=en",
		"categoryId": 1
	},
	{
		"id": 4,
		"name": "Taladro Percutor 750W",
		"description": "Taladro eléctrico profesional con función percutor, velocidad variable y empuñadura anti-vibraciones.",
		"price": 120,
		"stock": 30,
		"image": "https://bergalloypastrone.vtexassets.com/arquivos/ids/156958/Taladro-Percutor-Barovo-Te75b-750w-13mm-3100rpm-Veloc-Variab-1.jpg?v=638016257782130000",
		"categoryId": 2
	},
	{
		"id": 5,
		"name": "Sierra Circular 1800W",
		"description": "Sierra circular potente con láser guía, ajuste de profundidad y ángulo para cortes precisos en madera y metal.",
		"price": 150,
		"stock": 20,
		"image": "https://casabernabesca.com/wp-content/uploads/2017/11/2853.jpg",
		"categoryId": 2
	},
	{
		"id": 6,
		"name": "Pintura Blanca Mate 5L",
		"description": "Pintura acrílica de alta cobertura para interiores, acabado mate y rápida secado. Cubre aproximadamente 12m² por litro.",
		"price": 35,
		"stock": 60,
		"image": "https://pintureriasoceano.com.ar/wp-content/uploads/2021/06/TERSILUX-ESMALTE-MATE-3en1-BLANCO-4L.jpg",
		"categoryId": 3
	},
	{
		"id": 7,
		"name": "Cinta Métrica 8m",
		"description": "Cinta métrica profesional de 8 metros con carcasa resistente a impactos y sistema de bloqueo automático.",
		"price": 10,
		"stock": 120,
		"image": "https://andresmerino.com.ar/wp-content/uploads/2023/03/Truper-Cinta-Metrica-flexometro-8M.png",
		"categoryId": 4
	},
	{
		"id": 8,
		"name": "Guantes de Trabajo",
		"description": "Guantes de protección con refuerzos en palma y dedos, material resistente a cortes y abrasiones.",
		"price": 12,
		"stock": 200,
		"image": "https://oportunidades-vip.com.ar/wp-content/uploads/2025/07/Guantes_Trabajo_Antideslizantes_Reforzados_Tela_Y_Goma_300_D_734555-MLA80024852110_102024-O-6-1200x1200.jpg",
		"categoryId": 5
	},
	{
		"id": 9,
		"name": "Escalera Telescópica 3.5m",
		"description": "Escalera extensible profesional con sistema de bloqueo seguro, peso máximo soportado 150kg y peldaños antideslizantes.",
		"price": 180,
		"stock": 15,
		"image": "https://image.made-in-china.com/2f0j00PYTbdqVMbUpA/En-131-Multipurpose-Telescopic-Ladder-Multifunction-Telescopic-Little-Giant-Ladder.webp",
		"categoryId": 6
	},
	{
		"id": 10,
		"name": "Candado de Seguridad",
		"description": "Candado de acero endurecido con mecanismo anti-palanca y resistencia a cortes. Incluye 2 llaves.",
		"price": 15,
		"stock": 80,
		"image": "https://ecoway.com.ar/cdn/shop/files/CNDP0384AM_20_1_1c1db867-21a2-4e9e-b369-353601b04244.jpg?v=1745847742",
		"categoryId": 7
	},
	{
		"id": 11,
		"name": "Broca para Concreto 10mm",
		"description": "Juego de brocas para hormigón y mampostería con punta de widia para mayor durabilidad.",
		"price": 5,
		"stock": 150,
		"image": "https://bite.vtexassets.com/arquivos/ids/169194/32470.png?v=638334032934400000",
		"categoryId": 8
	},
	{
		"id": 12,
		"name": "Nivel Laser",
		"description": "Nivel láser autónivelante con alcance de 20 metros, ideal para albañilería y trabajos de precisión.",
		"price": 85,
		"stock": 25,
		"image": "https://www.abrafersrl.com.ar/wp-content/uploads/DNLI-3603.jpg",
		"categoryId": 4
	},
	{
		"id": 13,
		"name": "Carretilla de Obra",
		"description": "Carretilla profesional de 100L con estructura reforzada, rueda neumática y capacidad de carga 200kg.",
		"price": 75,
		"stock": 18,
		"image": "https://images.kkeu.de/is/image/BEG/Dispositivos_de_transporte_y_carros/Carretillas/Carretilla_para_obras_pdplarge-mrd--540571_AFS_00_00_00_5956687.jpg",
		"categoryId": 9
	},
	{
		"id": 14,
		"name": "Caja de Herramientas",
		"description": "Maletín organizador de herramientas con 35 compartimentos, estructura rígida y cerradura de seguridad.",
		"price": 45,
		"stock": 40,
		"image": "https://www.lusqtoff.com.ar/truper/wp-content/uploads/2024/04/11145.jpg",
		"categoryId": 10
	},
	{
		"id": 15,
		"name": "Extensión Eléctrica 10m",
		"description": "Cable de extensión con 3 tomas, protección contra sobretensiones y cubierta resistente a la intemperie.",
		"price": 28,
		"stock": 65,
		"image": "https://materialeszonaesmeralda.com/cdn/shop/products/42.jpg?v=1664319007",
		"categoryId": 11
	}
]