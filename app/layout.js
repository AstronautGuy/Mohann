import "./globals.css";
import Topbar from "../components/topbar";
import Header from "../components/header";
import Footer from "../components/footer";
import AOSInitializer from "@/components/AOSInitializer";
import WhatsAppButton from "@/components/FloatingButtons";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
    title: "Mohann Engineers",
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
        <WhatsAppButton phoneNumber="919825039020" />
        </body>
        </html>
    );
}
