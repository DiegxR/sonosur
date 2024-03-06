"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import amazonas from "../../../public/images/amazonas.png";
import andina from "../../../public/images/andina.png";
import caribe from "../../../public/images/caribe.png";
import pacifico from "../../../public/images/pacifico.png";
import orinoquia from "../../../public/images/orinoquia.png";
import {  usePathname } from "next/navigation";
import { useTrack } from "@/context/TracksContext";
import StatesChanger from "@/components/StatesChanger";

const Pagelayout = ({ children }: { children: React.ReactNode }) => {
  const {  AudioRender } = useTrack();
  const [bgSrc, setbgSrc] = useState(amazonas);
  const path = usePathname();
  const locations = [
    { name: "Caribe", path: "caribe" },
    { name: "Pacífico", path: "pacifico" },
    { name: "Andina", path: "andina" },
    { name: "Orinoquía", path: "orinoquia" },
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
      case "/andina":
        setbgSrc(andina);
        break;
      case "/amazonas":
        setbgSrc(amazonas);
        break;
      case "/orinoquia":
        setbgSrc(orinoquia);
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
            height: "85vh",
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
          <StatesChanger/>
        </section>
      </section>
      <section className="py-[5%] h-[50vh] w-full bg-[#0F1B27]">
        <div>{children}</div>
      </section>
      <footer className="h-[10vh]">Footer</footer>
      <div className="fixed left-0 bottom-0 w-full">{AudioRender}</div>
    </>
  );
};

export default Pagelayout;
