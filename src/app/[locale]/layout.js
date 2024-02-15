import { Inter } from "next/font/google";
import "./globals.css";
import { useLocale } from "next-intl";
import Navbar from "../../components/main/Navbar";
import StarsCanvas from "../../components/main/StarBackground";
import Footer from "../../components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mj Aristizabal",
  description: "My portfolio with next",
};

export default function RootLayout({ children }) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
