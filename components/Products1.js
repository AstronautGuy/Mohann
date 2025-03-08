import ProductCarousel from "../components/ProductCarousel";

const productsForPage1 = [
    {
        id: 1,
        name: "Category One",
        description: "This is a description for product one.",
        price: "29.99",
        image: "/products/product1.jpg",
    },
    {
        id: 2,
        name: "Category Two",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/products/product2.jpg",
    },
    {
        id: 3,
        name: "Category Three",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/products/product2.jpg",
    },
    {
        id: 4,
        name: "Category Four",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/products/product2.jpg",
    },
];

export default function Products1() {
    return <ProductCarousel heading="Categories We Deal In!!" products={productsForPage1} />;
}
