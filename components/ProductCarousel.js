"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Product One",
        description: "This is a description for product one.",
        price: "29.99",
        image: "/products/product1.jpg", // Place these images in /public/products/
    },
    {
        id: 2,
        name: "Product Two",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/products/product2.jpg",
    },
    {
        id: 3,
        name: "Product Three",
        description: "This is a description for product three.",
        price: "49.99",
        image: "/products/product3.jpg",
    },
    {
        id: 4,
        name: "Product Four",
        description: "This is a description for product four.",
        price: "59.99",
        image: "/products/product4.jpg",
    },
    {
        id: 5,
        name: "Product Five",
        description: "This is a description for product five.",
        price: "69.99",
        image: "/products/product5.jpg",
    },
    {
        id: 6,
        name: "Product Six",
        description: "This is a description for product six.",
        price: "79.99",
        image: "/products/product6.jpg",
    },
    {
        id: 7,
        name: "Product Seven",
        description: "This is a description for product seven.",
        price: "89.99",
        image: "/products/product7.jpg",
    },
    {
        id: 8,
        name: "Product Eight",
        description: "This is a description for product eight.",
        price: "99.99",
        image: "/products/product8.jpg",
    },
];

export default function ProductCarousel() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
                <motion.div
                    className="flex space-x-8 overflow-x-auto overflow-y-hidden pb-4 cursor-grab"
                    drag="x"
                    dragConstraints={{ left: -500, right: 0 }} // Adjust based on your content width
                >
                    {products.map((product) => (
                        <div key={product.id} className="min-w-[250px]">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
