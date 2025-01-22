// Import Statements
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Knightsbridge House (Nonthaburi)",
    description: "Singapore-based Knightsbridge House International School, opening in Nonthaburi, Bangkok in May 2025. Providing exceptional and accessible education focused on academic excellence and holistic development."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-background">
                <div className="relative max-w-screen-xl mx-auto sm:px-6 lg:px-8">
                    <Header />
                </div>
                <main className="relativeflex-grow">
                    {children}
                </main>
                <div className="relative mx-auto">
                    <Footer />
                </div>
            </body>
        </html>
    );
};
