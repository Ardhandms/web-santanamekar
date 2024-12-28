"use client"; // Menandakan ini adalah komponen client

import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function page() {
  // State untuk mengontrol gambar yang aktif
  const [activeImage, setActiveImage] = useState(0);

  // Daftar gambar
  const images = [
    { src: "/gula.jpg", alt: "Gula Aren" },
    { src: "/gula2.jpg", alt: "Proses Pembuatan Gula Aren" },
    { src: "/gula3.jpg", alt: "Gula Aren" },
    // Tambahkan gambar lainnya di sini
  ];

  // Fungsi untuk mengganti gambar
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length); // Loop kembali ke gambar pertama
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length); // Loop ke gambar terakhir
  };

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="pb-20 pt-28 mb-24" id="hero">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          UMKM Peternak Puyuh{" "}
          <span className="text-yellow-500">Desa Santanamekar</span>
        </h1>
        <div className="relative w-full max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center mt-8">
          <div className="w-full flex justify-center">
            <div className="transition-all duration-500 ease-in-out transform">
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                width={160}
                height={160}
                className="rounded-xl shadow-xl mx-auto object-cover"
              />
            </div>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
            <Image
              src={images[(activeImage + 1) % images.length].src}
              alt={images[(activeImage + 1) % images.length].alt}
              width={80}
              height={40}
              className="rounded-lg shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            />
          </div>

          {/* Tombol Navigasi dengan Ukuran Lebih Kecil */}
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

        <div className="py-6 px-5 sm:px-20">
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-2">
            Desa Santanamekar dikenal sebagai salah satu penghasil gula aren
            berkualitas tinggi di daerah ini. Gula aren yang diproduksi oleh
            UMKM lokal desa ini dibuat dengan bahan-bahan alami tanpa campuran
            bahan kimia, sehingga menghasilkan rasa yang autentik dan khas.
          </p>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-2">
            Proses pembuatan gula aren melibatkan beberapa tahapan mulai dari
            penyadapan nira, pemasakan hingga menjadi gula cair atau gula cetak.
            UMKM di desa ini tidak hanya berkomitmen terhadap kualitas produk,
            tetapi juga mendukung pemberdayaan masyarakat lokal melalui
            pelibatan langsung dalam proses produksi.
          </p>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-2">
            Produk gula aren dari Desa Santanamekar telah dipasarkan ke berbagai
            daerah, bahkan mulai merambah ke pasar nasional. Kelezatan dan
            kualitasnya menjadikannya salah satu pilihan favorit konsumen yang
            peduli terhadap produk alami dan sehat.
          </p>
          <div className="mt-6 text-center">
            <Link href="/ ">
              <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                ← Kembali ke UMKM
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
