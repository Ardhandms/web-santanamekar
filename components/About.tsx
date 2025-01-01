import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center min-h-screen mb-20"
      style={{ backgroundImage: "url('/latarland2.png')" }}
    >
      <div className="relative flex items-center justify-center">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h1 className="heading mb-5">
              Selamat Datang, {""}
              <span className="text-yellow-300">Di Desa Santanamekar</span>
            </h1>

            <p className="md:tracking-wider mb-3 text-sm md:text-lg lg:text-1xl">
              Desa Wisata Santanamekar merupakan salah satu desa yang terletakdi
              Kecamatan Cisayong Kabupaten Tasikmalaya Provinsi Jawa Barat. Desa
              Wisata Santanamekar berjarak sekitar 20 km atau 45 menitdari
              Ibukota Kabupaten Tasikmalaya. Rute menuju Desa Santanamekar dapat
              dilalui dengan menggunakan moda transportasi motordan mobil.
            </p>
            <p className=" md:tracking-wider mb-1 text-sm md:text-lg lg:text-1xl">
              Jumlah penduduk di Desa Santanamekar yaitu sebanyak 4415 jiwa.
              Secaraadministrasi Desa Santanamekar terdiri dari 3 dusun yaitu
              Dusun Citepus (4 RW & 11 RT), Dusun Leuwibodas (2 RW & 8 RT), dan
              Dusun Cigaleuh (2 RW & 8RT) dengan total 8 RW dan 27 RT.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative my-2 z-10">
        <Image src="/homepage.png" width={350} height={350} alt="Profile" />
      </div>
    </section>
  );
};

export default About;
