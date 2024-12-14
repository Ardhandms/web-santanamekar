import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Spot Lokasi {""}
        <span className="text-blue-600">Desa Santanamekar</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-cemter justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <a
                href={link}
                className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[40vh] lg:h-[55vh] mb-10"
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#12162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </a>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
