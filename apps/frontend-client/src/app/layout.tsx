import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";

const Header = dynamic(()=>import("@/components/organisms/header/Header"))
const Footer = dynamic(()=>import("@/components/organisms/footer/Footer"))
import { AuthProvider } from "@/context/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Lomnov",
  description:
    "Sell and rent your 2nd hand items on lomnov.com, the Cambodia #1 buy and sell website. Post free online classified ads of your property, real estate, home, land, shop, condo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
