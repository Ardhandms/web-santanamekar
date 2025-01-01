import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-12 pb-10" id="contact">
      <div className="flex flex-col item-center text-center">
        <h1 className="heading lg:max-w-[150vw] text-center">
          Terima Kasih telah mengunjungi{" "}
          <span className="text-green-500">Desa Santanamekar</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Mari bersama-sama menjaga dan membangun desa menuju masa depan yang
          lebih baik.
        </p>

        <div className="flex items-center justify-center md:gap-8 gap-8 my-5">
          <p className="md:text-base text-sm md:font-normal font-light">
            Hubungi Kami (Contact Person) :
          </p>

          <a href="https://wa.me/0881022972152">
            <img src="/whatsapp.png" alt="WhatsApp" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=desawisatasantanamekar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/iconemail.png" alt="Email" />
          </a>
        </div>
      </div>

      <div className="flex mt-5 md:flex-row flex-col justify-between md:gap-3 gap-6">
        <p className="md:text-base text-sm md:font-normal font-light mt-8">
          Copyright © 2024 Desa Santanamekar | KKN 45 UNSIL
        </p>
      </div>
    </footer>
  );
};

export default Footer;
