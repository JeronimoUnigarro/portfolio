import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ importa el Navbar

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
      <body className="bg-black text-white"> {/* ✅ fondo oscuro y texto blanco */}
        <Navbar /> {/* ✅ se muestra en todas las páginas */}
        <main className="pt-16">{children}</main> {/* pt-16 para no tapar el contenido */}
      </body>
    </html>
  );
}
