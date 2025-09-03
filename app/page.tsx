import Image from "next/image";
import { Header } from "@/components/ui/header";
import { About } from "@/components/ui/about";
import {Skills} from "@/components/ui/skills";
import { Projects } from "@/components/ui/projects";
import {Hire} from "@/components/ui/hire";
import { Testimonials } from "@/components/ui/testimonials";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import {Loader} from "@/components/ui/loader"


export default function Home() {
  return (
  <main>
    <Nav/>
    <Loader/>
   <section id="header">
     <Header/>
   </section>
   <section id="about">
      <About/>
   </section>
   <section id="skills">
      <Skills/>
   </section>
   <section id="projects">
      <Projects/>
   </section>
   <section id="hire">
      <Hire/>
   </section>
   <section id="testimonials">
  <Testimonials/> 
   </section>
   <section id="footer">
 <Footer/>
   </section>
  </main>
  );
}
