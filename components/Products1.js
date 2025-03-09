import ProductCarousel from "../components/ProductCarousel";

const productsForPage1 = [
    {
        id: 1,
        name: "INDUSTRIAL EQUIPMENTS",
        description: "This is a description for product one.",
        price: "29.99",
        image: "/images/products/industrial.jpg",
    },
    {
        id: 2,
        name: "SS FEED HOPPERS",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/images/products/hoppers.jpg",
    },
    {
        id: 3,
        name: "SS STORAGE TANKS",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/images/products/tanks.jpg",
    },
    {
        id: 4,
        name: "DAIRY EQUIPMENTS",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/images/products/dairy.jpg",
    },
    {
        id: 5,
        name: "SS CUSTOM TANKS",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/images/products/custom.jpg",
    },
    {
        id: 6,
        name: "SS STORAGE SILOS",
        description: "This is a description for product two.",
        price: "39.99",
        image: "/images/products/silos.jpg",
    },
];

export default function Products1() {
    return <ProductCarousel heading="Categories We Deal In!!" products={productsForPage1} />;
}
