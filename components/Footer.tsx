import React from "react";

import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col item-center text-center">
        <h1 className="heading lg:max-w-[150vw] text-center">
          Ready to take you into{" "}
          <span className="text-blue-500">digitalization</span> to the next
          level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me and discuss how we can achive our goals together
        </p>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between md:gap-3 gap-6 ">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ardhan
        </p>

        <div className="flex items-center md:gap-8 gap-8 mt-3">
          <a href="https://www.instagram.com/ardhandms_?igsh=a3ZscDVseWMwYXQx">
            <img src="/instagram.png" />
          </a>
          <a href="https://wa.me/082320997062">
            <img src="/whatsapp.png" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
