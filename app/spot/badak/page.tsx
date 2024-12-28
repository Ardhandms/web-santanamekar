import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 mt-6">
        Curug Badak Bagian{" "}
        <span className="text-yellow-500">Desa Santanamekar</span>
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
        <Image
          src="/curug-batu-blek.jpg"
          alt="Curug Batu Blek"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />

        <div className="max-w-lg">
          <p className="text-m leading-7">
            Curug Batu Blek adalah salah satu destinasi wisata alam yang
            terletak di Kecamatan Cisayong, Kabupaten Tasikmalaya. Air terjun
            ini menawarkan keindahan alam yang memukau dengan suasana yang sejuk
            dan asri, dikelilingi oleh bebatuan alami serta pepohonan hijau.
          </p>
          <p className="text-m leading-7 mt-4">
            Tempat ini cocok untuk Anda yang ingin menikmati ketenangan alam
            atau sekadar bersantai bersama keluarga dan teman. Selain itu, Curug
            Batu Blek juga menjadi lokasi favorit para fotografer untuk
            mengabadikan keindahan alam Tasikmalaya.
          </p>
          <p className="text-m leading-7 mt-4">
            Lokasi Curug Batu Blek mudah diakses dan memiliki fasilitas dasar
            seperti area parkir, warung makanan, serta tempat istirahat
            sederhana. Pastikan Anda mematuhi aturan kebersihan dan menjaga
            kelestarian alam saat berkunjung.
          </p>
        </div>
      </div>

      <div className="mt-2 mb-5 text-center">
        <Link href="/">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
            ← Kembali ke Beranda
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
