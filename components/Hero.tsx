import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-16 mb-2" id="hero">
      <div className="absolute top-0 right-0 p-4 z-50 flex gap-2">
        <Image
          src="/logosantana.png"
          width={80}
          height={80}
          className="w-12 h-auto sm:w-16 sm:h-auto"
          alt="Logo Santana"
        />
        <Image
          src="/logounsil.png"
          width={80}
          height={50}
          className="w-12 h-auto sm:w-16 sm:h-auto"
          alt="Logo Unsil"
        />
      </div>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="green"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="green"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="yellow" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            KKN Unsil | Kelompok 45
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi, Selamat Datang Di Desa Santanamekar. "
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Kecamatan Cisayong, Kabupaten Tasikmalaya.
          </p>

          {/* Container untuk tombol */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="#about" className="w-full sm:w-auto">
              <MagicButton
                title="Santanamekar ?"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#umkm" className="w-full sm:w-auto">
              <MagicButton
                title="UMKM"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#projects" className="w-full sm:w-auto">
              <MagicButton
                title="Spot Wisata"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <MagicButton
                title="Contact Person"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          <div className="flex justify-center relative mt-20 z-10">
            <Image src="/petasantana.jpg" width={750} height={750} alt="Peta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
