"use client";
import { useTrack } from "@/context/TracksContext";
import Image from "next/image";
import React from "react";

const page = () => {
  const { setTrack } = useTrack();
  const tracks = [
    {
      name: "Tablero de tiza",
      path: "85.FL_Tablero de tiza.mp3",
    },
    {
      name: "Fósforos",
      path: "12.FL_Fósforos.mp3",
    },
    {
      name: "Hojas quemándose",
      path: "90.FL_Hojas quemándose.mp3",
    },
    {
      name: "Masticar",
      path: "93.FL_Masticar.mp3",
    },    
  ];
  return (
    <section className="justify-around flex">
    <div>
      <h2 className="text-white font-bold text-[30px]">Región Amazonas</h2>
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
        <div className="flex items-center gap-2 text-white"><span className="font-bold text-xl">Referencia</span>/<p> Cine</p></div>
    </div>
  </section>
  
  );
};

export default page;
