import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
 weight:["400" , "500" , "600" ,"700" , "800" , "900"] ,
 subsets:["latin"]
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
