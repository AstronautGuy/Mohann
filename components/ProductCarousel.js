"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ heading, products }) {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                {heading && <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>}
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