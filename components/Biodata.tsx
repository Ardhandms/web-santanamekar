import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { testimonials } from "@/data/index";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

function Biodata() {
  return (
    <div className="py-10">
      <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl py-8"
        words="Berkenalan dengan Anggota KKN Kelompok 45 Unsil"
      />
      <AnimatedTestimonials testimonials={testimonials} />
      <div className="mt-12 border-t border-gray-300 pt-8"></div>
    </div>
  );
}

export default Biodata;
