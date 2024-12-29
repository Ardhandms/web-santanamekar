import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SpotDesa from "@/components/SpotDesa";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Umkm from "@/components/Umkm";
import { navItems } from "@/data";
import Biodata from "@/components/Biodata";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Umkm />
        <SpotDesa />
        <Biodata />
        <Footer />
      </div>
    </main>
  );
}
