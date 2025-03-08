"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <Link href={`/products#product-${product.id}`} className="block">
            <motion.div
                ref={cardRef}
                className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.div className="relative h-48 w-full mb-4" style={{ y }}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 flex-grow">{product.description}</p>
                <div className="mt-4">
                    <span className="text-lg font-bold text-indigo-600">
                        ${product.price}
                    </span>
                </div>
            </motion.div>
        </Link>
    );
}