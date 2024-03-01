"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import amazonas from "../../../public/images/amazonas.png";
import andina from "../../../public/images/andina.png";
import caribe from "../../../public/images/caribe.png";
import pacifico from "../../../public/images/pacifico.png";
import { useRouter } from "next/navigation";

const Pagelayout = ({ children }: { children: React.ReactNode }) => {
  const [bgSrc, setbgSrc] = useState(amazonas);
  const router = useRouter();
  const path = window.location.pathname;
  const locations = [
    { name: "Caribe", path: "caribe" },
    { name: "Pacífico", path: "pacifico" },
    { name: "Andina", path: "andina" },
    { name: "Orinoquia", path: "orinoquia" },
    { name: "Amazonas", path: "amazonas" },
  ];
  useEffect(() => {
    console.log(path);
    switch (path) {
      case "/pacifico":
        setbgSrc(pacifico);
        break;
      case "/caribe":
        setbgSrc(caribe);
        break;
      default:
        break;
    }
  }, [path]);

  return (
    <>
      <section className="w-full h-[100%] ">
        <section
          className="w-full flex flex-col justify-between  px-[12%] py-20"
          style={{
            backgroundImage: `url(${bgSrc.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "70vh",
          }}
        >
          <div>
            <Image
              width={200}
              height={100}
              src="/images/Logo sono sur.png"
              alt=""
            />
            <article className="flex flex-col mt-10 gap-3 font-semibold text-white">
              <div className="flex gap-2 items-center">
                <span className="icon-[mdi--circle] text-2xl text-[#D5DDCE]"></span>
                <h4>Descarga contenidos</h4>
              </div>
              <div className="border-t-[1px] w-[200px] border-white"></div>
              <div className="flex gap-2 items-center">
                <span className="icon-[mdi--circle] text-2xl text-[#D5DDCE]"></span>
                <h4>Conocer más</h4>
              </div>
            </article>
          </div>
          <section className="relative">
            <ul className="flex absolute -top-[17px] w-full justify-between">
              {locations.map((location) => (
                <li
                  onClick={() => router.push(`/${location.path}`)}
                  className="flex cursor-pointer flex-col items-center justify-center"
                >
                  <span className="icon-[mdi--circle] text-[35px] hover:animate-spin text-[#FFD522]"></span>
                  <p className="text-white">{location.name}</p>
                </li>
              ))}
            </ul>
            <div className="border-t-[2.4px]   border-white"></div>
          </section>
        </section>
      </section>
      <section className="p-[10%] h-[50vh] w-full bg-[#0F1B27]">
        {children}
      </section>
    </>
  );
};

export default Pagelayout;
