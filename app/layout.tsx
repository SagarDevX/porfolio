import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});
const CormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body className={`${inter.className} ${CormorantGaramond.variable} antialiased bg-neutral-100 dark:bg-[#100F0F]`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>

    </html>
  );
}
