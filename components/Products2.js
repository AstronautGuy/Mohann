import ProductCarousel from "../components/ProductCarousel";

const productsForPage2 = [
    {
        id: 1,
        name: "Product One",
        description: "This is a description for product one.",
        price: "29.99",
        image: "/products/product1.jpg",
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
        description: "This is a description for product two.",
        price: "39.99",
        image: "/products/product2.jpg",
    },
    {
        id: 4,
        name: "Product Four",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/products/product2.jpg",
    },
    {
        id: 5,
        name: "Product Five",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/products/product2.jpg",
    },
    {
        id: 6,
        name: "Product Six",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/products/product2.jpg",
    },
    {
        id: 7,
        name: "Product Seven",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/products/product2.jpg",
    },
];

export default function Products2() {
    return <ProductCarousel products={productsForPage2} />;
}
