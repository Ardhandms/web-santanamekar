"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

function Umkm() {
  return (
    <div className="py-14" id="umkm">
      <h1 className="heading">
        UMKM Desa {""}
        <span className="text-yellow-500">Santanamekar</span>
      </h1>
      <CardContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        {/* Card 1 */}
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Gula Aren
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300"
          >
            Usaha Produksi gula aren daerah setempat.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/umkm-gulaaren.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="/umkm/gulaaren"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Coba Lihat →
            </CardItem>
          </div>
        </CardBody>

        {/* Card 2 */}
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Japilus
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300"
          >
            Produksi makanan ringan dengan nama merk Japilus.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/fotoUmkm/japilus1.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="/umkm/japilus"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Coba Lihat →
            </CardItem>
          </div>
        </CardBody>
        {/* Card 3 */}
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Pipiti
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300"
          >
            Kerajinan tangan berbahan dasar bambu yang biasa digunakan untuk
            wadah nasi ataupun bisa digunakan sebagai kantong.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/fotoUmkm/pipiti1.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="/umkm/pipiti"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Coba Lihat →
            </CardItem>
          </div>
        </CardBody>
        {/* Card 4 */}
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Ternak Puyuh
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300"
          >
            Usaha di bidang peternakan khusus nya hewan puyuh yang dibudidayakan
            untuk pemanfaatan telurnya.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/puyuh1.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="/umkm/telurpuyuh"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Coba Lihat →
            </CardItem>
          </div>
        </CardBody>
        {/* Card 5 */}
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Ternak Ikan
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300"
          >
            Usaha di bidang perikanan air tawar seperti ikan mas yang
            dibudidayakan untuk pemanfaatan telurnya.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/fotoUmkm/ikan2.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="/umkm/ternakikan"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Coba Lihat →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default Umkm;
