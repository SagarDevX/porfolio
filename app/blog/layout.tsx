import type { Metadata } from "next";
import { Inter ,Cormorant_Garamond} from "next/font/google";
import "../globals.css";
import Container from "../components/container";
import BlogFooter from "./Blog-footer";


const inter = Inter({
 weight:["400" , "500" , "600" ,"700" , "800" , "900"] ,
 subsets:["latin"]
});
const CormorantGaramond = Cormorant_Garamond({
 weight:["400" , "500" , "600" ,"700" ] ,
 subsets:["latin"],
 variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
     <Container className="min-h-screen flex flex-col justify-between item pt-2 ">
      {children}
      <BlogFooter/>
     </Container>
  );
}
