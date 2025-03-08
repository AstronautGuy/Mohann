import "./globals.css";
import Topbar from "../components/topbar";
import Header from "../components/header";
import Footer from "../components/Footer";
import AOSInitializer from "@/components/AOSInitializer";


export const metadata = {
    title: "Your Site Title",
    description: "Your site description here",
};
export const viewport = {
    width: "device-width",
    initialScale: 1,
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <AOSInitializer />
        <Topbar />
        <Header />
        <main className="p-4">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
