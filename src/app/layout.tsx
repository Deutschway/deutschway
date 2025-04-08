import Navbar from './components/Navbar';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';  // Asegúrate de que la ruta sea correcta

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DeutschWay',
  description: 'Domina el alemán del nivel A1 al B1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}