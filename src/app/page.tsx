import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Trust from "@/sections/Trust";
import Gallery from "@/sections/Gallery";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <Services />
      <Process />
      <Trust />
      <Gallery />
      <FAQ />
      <Contact />
    </div>
  );
}
