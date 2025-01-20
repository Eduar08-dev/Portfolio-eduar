import Image from "next/image";
import HomeComponent from "../components/HomeComponent/HomeComponent";
import AboutMe from "@/components/AboutMe/AboutMe";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <HomeComponent />
      <AboutMe />
    </div>


  );
}
