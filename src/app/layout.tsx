import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; 

export const metadata: Metadata = {
  title: "Portafolio Jeronimo Unigarro",
  description: "Mi portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-black text-white"> 
        <Navbar /> 
        <main className="pt-16">{children}</main> 
      </body>
    </html>
  );
}
