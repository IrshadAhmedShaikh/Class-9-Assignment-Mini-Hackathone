import About from "@/components/about";
import Contact from "@/components/contact";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import Skill from "@/components/skill";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
  
    </div>
  );
}
