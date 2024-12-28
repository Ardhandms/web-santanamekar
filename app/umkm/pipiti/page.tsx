import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="py-20 px-6 sm:px-20">
      <h1 className="text-3xl font-bold text-center mb-10">
        UMKM Kerajinan Pipiti{" "}
        <span className="text-yellow-500">Desa Santanamekar</span>
      </h1>
      <div className="max-w-4xl mx-auto">
        <Image
          src="/"
          alt="Gula Aren"
          width={240}
          height={120}
          className="rounded-xl shadow-lg mb-8 mx-auto"
        />
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
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          Desa Santanamekar dikenal sebagai salah satu penghasil gula aren
          berkualitas tinggi di daerah ini. Gula aren yang diproduksi oleh UMKM
          lokal desa ini dibuat dengan bahan-bahan alami tanpa campuran bahan
          kimia, sehingga menghasilkan rasa yang autentik dan khas.
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          Proses pembuatan gula aren melibatkan beberapa tahapan mulai dari
          penyadapan nira, pemasakan hingga menjadi gula cair atau gula cetak.
          UMKM di desa ini tidak hanya berkomitmen terhadap kualitas produk,
          tetapi juga mendukung pemberdayaan masyarakat lokal melalui pelibatan
          langsung dalam proses produksi.
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          Produk gula aren dari Desa Santanamekar telah dipasarkan ke berbagai
          daerah, bahkan mulai merambah ke pasar nasional. Kelezatan dan
          kualitasnya menjadikannya salah satu pilihan favorit konsumen yang
          peduli terhadap produk alami dan sehat.
        </p>
        <div className="mt-10 text-center">
          <Link href="/ ">
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
              ← Kembali ke UMKM
            </button>
          </Link>
        </div>
        <Image
          src="/"
          alt="Proses Pembuatan Gula Aren"
          width={240}
          height={240}
          className="rounded-xl shadow-lg mt-8 mx-auto"
        />
      </div>
    </div>
  );
}

export default page;
