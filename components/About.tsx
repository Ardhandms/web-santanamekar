import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className=" relative flex items-center justify-center">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w[60vw] flex flex-col items-center justify-center">
            <h1 className="heading mb-5">
              Halo semua, {""}
              <span className="text-blue-500">kenalin</span>
            </h1>

            <p className="text-center md:tracking-wider mb-1 text-sm md:text-lg lg:text-2xl">
              Aku Ardhan Dimas Nuryadin, seorang mahasiswa Jurusan Informatika
              Fakultas Teknik di Universitas Siliwangi, Tasikmalaya. Aku
              mempunyai ketertarikan dengan bidang Networking dan Cybersecurity
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative my-2 z-10">
        <Image src="/Profile.jpg" width={300} height={300} alt="Profile" />
      </div>
    </section>
  );
};

export default About;
