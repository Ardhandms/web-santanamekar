"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Umkm() {
  const [activeIndex, setActiveIndex] = useState(0); // Indeks untuk menampilkan card aktif

  // Daftar UMKM
  const umkms = [
    {
      title: "Gula Aren & Kawung",
      description: "Usaha Produksi gula aren daerah setempat.",
      image: "/fotoUmkm/gula6.png",
      link: "/umkm/gulaaren",
    },
    {
      title: "Japilus",
      description: "Produksi makanan ringan dengan nama merk Japilus.",
      image: "/fotoUmkm/japilus1.jpg",
      link: "/umkm/japilus",
    },
    {
      title: "Pipiti",
      description:
        "Kerajinan tangan berbahan dasar bambu untuk wadah nasi atau kantong.",
      image: "/fotoUmkm/pipiti1.jpg",
      link: "/umkm/pipiti",
    },
    {
      title: "Ternak Puyuh",
      description: "Peternakan hewan puyuh untuk pemanfaatan telurnya.",
      image: "/puyuh1.jpg",
      link: "/umkm/telurpuyuh",
    },
    {
      title: "Ternak Ikan",
      description:
        "Budidaya ikan mas, nila, dan lainnya untuk bibit atau konsumsi.",
      image: "/fotoUmkm/ikan3.png",
      link: "/umkm/ternakikan",
    },
  ];

  // Fungsi untuk navigasi slider (next dan previous)
  const nextSlide = () => {
    if (isMobile) {
      // Untuk mobile (2 card per slide vertikal)
      if (activeIndex + 2 >= umkms.length) {
        setActiveIndex(0); // Kembali ke awal
      } else {
        setActiveIndex((prev) => prev + 2);
      }
    } else {
      // Untuk desktop (2 card per slide horizontal)
      if (activeIndex + 2 >= umkms.length) {
        setActiveIndex(0); // Kembali ke awal
      } else {
        setActiveIndex((prev) => prev + 2);
      }
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      // Untuk mobile
      setActiveIndex((prev) => (prev - 2 < 0 ? 0 : prev - 2));
    } else {
      // Untuk desktop
      setActiveIndex((prev) => (prev - 2 < 0 ? 0 : prev - 2));
    }
  };

  // Mendapatkan ukuran layar untuk mendukung responsivitas
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  // Mendapatkan card aktif berdasarkan ukuran layar
  const activeCards = isMobile
    ? umkms.slice(activeIndex, activeIndex + 2) // 2 card vertikal untuk mobile
    : umkms.slice(activeIndex, activeIndex + 2); // 2 card horizontal untuk desktop

  return (
    <div className="py-14" id="umkm">
      <h1 className="heading py-12">
        UMKM Desa <span className="text-yellow-500">Santanamekar</span>
      </h1>
      <div className="relative w-full px-4">
        {/* Wrapper untuk card */}
        <div
          className={`flex ${
            isMobile
              ? "flex-col items-center gap-6"
              : "flex-row items-center gap-6"
          } justify-center`}
        >
          {activeCards.map((umkm, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-black border-black/[0.1] dark:border-white/[0.2] w-[20rem] sm:w-[16rem] h-auto rounded-xl p-6 border"
            >
              <h2 className="text-xl font-bold text-neutral-600 dark:text-white">
                {umkm.title}
              </h2>
              <p className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300">
                {umkm.description}
              </p>
              <Image
                src={umkm.image}
                height="1000"
                width="1000"
                className="h-40 w-full object-cover rounded-xl mt-4"
                alt={umkm.title}
              />
              <div className="flex justify-between items-center mt-6">
                <Link
                  href={umkm.link}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Coba Lihat →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi slider */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-full"
          onClick={prevSlide}
        >
          ←
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-full"
          onClick={nextSlide}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Umkm;
