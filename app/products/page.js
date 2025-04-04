"use client"

import Products2 from "@/components/Products2";

const products = [
    { id: 1, name: "Industrial Equipments", description: "Description for product one.", price: "29.99", image: "/images/products/industrial.jpg" },
    { id: 2, name: "SS Feed Hoppers", description: "Description for product two.", price: "39.99", image: "/images/products/hoppers.jpg" },
    { id: 3, name: "SS Storage Tanks", description: "Description for product three.", price: "49.99", image: "/images/products/tanks.jpg" },
    { id: 4, name: "Dairy Equipments", description: "Description for product four.", price: "59.99", image: "/images/products/dairy.jpg" },
    { id: 5, name: "SS Custom Tanks", description: "Description for product five.", price: "59.99", image: "/images/products/custom.jpg" },
    { id: 6, name: "SS Storage Silos", description: "Description for product six.", price: "59.99", image: "/images/products/silos.jpg" },
];

export default function ProductPage() {
    return (
        <>
            <div className="container mx-auto px-4 mt-35 pt-20 pb-20">
                <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

                {products.map((product) => (
                    <section key={product.id} id={`product-${product.id}`} className="py-16 border-b">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-lg" />
                            <div>
                                <h2 className="text-3xl font-semibold">{product.name}</h2>
                                <p className="text-gray-600 mt-2">{product.description}</p>
                                <p className="text-xl font-semibold mt-4">${product.price}</p>
                            </div>
                        </div>
                        <Products2 />
                    </section>
                ))}
            </div>
        </>
    );
}
