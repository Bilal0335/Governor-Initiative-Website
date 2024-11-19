import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/app/component/Footer/Footer";
import Header from "@/app/component/Header/index";
const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Governor Initiative",
  description:
    "Governor Initiative Artificial Intelligence, Web 3.0 and Metaverse",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
      type: "image/png"
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* Header */}
        <Header />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
