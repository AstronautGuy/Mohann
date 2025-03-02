import "./globals.css";
import Topbar from "../components/topbar";
import Header from "../components/header";
import Footer from "../components/Footer";
import Bottombar from "../components/bottombar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <Topbar />
        <Header />
        <main className="p-4">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
