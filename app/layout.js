import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event_Manager",
  description: "By kamalesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include the Inter font styles */}
        <style>{inter.css}</style>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
