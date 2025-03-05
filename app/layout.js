import "./globals.css";
import Topbar from "../components/topbar";
import Header from "../components/header";
import Footer from "../components/Footer";
import Bottombar from "../components/bottombar";

export const metadata = {
    title: "Your Site Title",
    description: "Your site description here",
    viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            {/* The metadata API should automatically inject the viewport meta tag.
            If it doesn’t work for some reason, you can also include it manually: */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
        <Topbar />
        <Header />
        <main className="p-4">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
