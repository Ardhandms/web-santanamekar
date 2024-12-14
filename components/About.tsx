import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center min-h-screen mb-20" // Ensure full height
      style={{ backgroundImage: "url('/latarland2.png')" }}
    >
      <div className="relative flex items-center justify-center">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h1 className="heading mb-5">
              Selamat Datang, {""}
              <span className="text-yellow-300">Di Desa Santanamekar</span>
            </h1>

            <p className="text-center md:tracking-wider mb-1 text-sm md:text-lg lg:text-1xl">
              Desa Santanamekar adalah salah satu desa yang berada di wilayah
              Kecamatan Cisayong, Kabupaten Tasikmalaya, Jawa Barat. Dengan luas
              wilayah yang mencakup hamparan sawah, perbukitan hijau, serta
              pemukiman penduduk yang asri, Desa Santanamekar menjadi contoh
              nyata keharmonisan antara alam dan kehidupan masyarakatnya.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative my-2 z-10">
        <Image src="/homepage.png" width={400} height={400} alt="Profile" />
      </div>
    </section>
  );
};

export default About;
