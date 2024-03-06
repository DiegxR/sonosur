"use client";
import { useTrack } from "@/context/TracksContext";
import Image from "next/image";
import React from "react";

const page = () => {
  const { setTrack } = useTrack();
  const tracks = [
    {
      name: "Coger cafe",
      path: "74. FL_RecogerCafe.mp3",
    },
    {
      name: "Motor de lancha",
      path: "76.FL_Motor Lancha.mp3",
    },
    {
      name: "Tos de mujer",
      path: "79.FL_TosMujer.mp3",
    },
    {
      name: "Ramasde limpia indigena",
      path: "81.FL_Ramas de limpia indigena.mp3",
    },
  ];
  return (
    <section className="justify-around flex">
      <div>
        <h2 className="text-white font-bold text-[30px]">Región Orinoquía</h2>
        {tracks.map((track, index) => (
          <div
            key={index}
            onClick={() => setTrack(track.path)}
            className="w-full group flex items-center gap-2 h-10"
          >
            <span className="icon-[mdi--circle-medium] text-white"></span>
            <p className="text-white underline cursor-pointer">{track.name}</p>
          </div>
        ))}
      </div>
      <div>
        <Image width={200} height={200} alt="" src="/images/colombia.png" />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2 text-white">
          <span className="font-bold text-xl">Referencia</span>/<p> Cine</p>
        </div>
      </div>
    </section>
  );
};

export default page;
