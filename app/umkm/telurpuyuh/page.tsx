"use client"; // Menandakan ini adalah komponen client

import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Page() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { src: "/fotoUmkm/puyuh1.png", alt: "KKN 45 Puyuh" },
    { src: "/puyuh1.jpg", alt: "Komoditas Puyuh" },
    { src: "/puyuh2.jpg", alt: "KKN 45 Puyuh" },
    // Tambahkan gambar lainnya di sini
  ];

  // Fungsi untuk mengganti gambar
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Mengatur interval untuk mengganti gambar setiap 3 detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000); // 3000 ms = 3 detik

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="pb-20 pt-16 mb-24" id="gulaaren">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          UMKM Komoditas Puyuh{" "}
          <span className="text-yellow-500">Desa Santanamekar</span>
        </h1>
        <div className="relative w-full max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center mt-8">
          {/* Slider Container */}
          <div
            className="slider-container"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${activeImage * 100}%)`, // Geser slider
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="slide"
                style={{ flexShrink: 0, width: "100%" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={180} // Ukuran gambar yang lebih kecil
                  height={180} // Ukuran gambar yang lebih kecil
                  className="rounded-xl shadow-xl mx-auto object-cover"
                  style={{
                    objectFit: "cover", // Memastikan gambar ter-crop sesuai ukuran container
                  }}
                />
              </div>
            ))}
          </div>

          {/* Tombol Navigasi */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white w-8 h-8 rounded-full shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out flex justify-center items-center"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white w-8 h-8 rounded-full shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out flex justify-center items-center"
          >
            &#8594;
          </button>
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
          <Spotlight
            className="top-28 left-80 h-[80vh] w-[50vw]"
            fill="yellow"
          />
        </div>

        <div className="py-6 px-5 sm:px-20 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-2">
            Desa Santanamekar, Kecamatan Cisayong, memiliki salah satu sektor
            UMKM unggulan berupa budidaya puyuh untuk menghasilkan telur
            berkualitas tinggi. Telur puyuh yang dihasilkan oleh para peternak
            lokal dikenal memiliki cita rasa yang lezat dan kandungan gizi yang
            baik, sehingga menjadi favorit masyarakat lokal maupun luar daerah.
            Usaha ini tidak hanya menjadi mata pencaharian, tetapi juga
            mengangkat potensi desa sebagai penghasil komoditas unggulan.
          </p>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-2">
            Dengan perawatan yang cermat dan pakan berkualitas, peternakan puyuh
            di Desa Santanamekar berhasil mempertahankan produksi telur secara
            konsisten. Selain dijual dalam bentuk mentah, telur puyuh ini juga
            diolah menjadi berbagai produk makanan siap saji yang memberikan
            nilai tambah bagi UMKM lokal. Komoditas ini menjadi salah satu roda
            penggerak ekonomi desa, membuka peluang usaha baru, dan memperkuat
            kesejahteraan masyarakat.
          </p>

          <div className="mt-12 text-center">
            <Link href="/ ">
              <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                ← Kembali ke UMKM
              </button>
            </Link>
          </div>

          <div className="mt-10 w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
              Video Komoditas Ternak Puyuh
            </h2>
            <div className="rounded-xl shadow-xl overflow-hidden">
              <video
                controls
                className="w-full h-full object-contain rounded-xl"
                style={{ maxHeight: "90vh" }}
              >
                <source src="/fotoUmkm/videoternakpuyuh.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
