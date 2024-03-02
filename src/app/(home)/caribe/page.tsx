"use client";
import React, { useState } from "react";
import Player from '@madzadev/audio-player'
import "@madzadev/audio-player/dist/index.css";
const page = () => {
  const [track, setTrack] = useState<any>([])
  const track1 = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: ["house"],
    },
  ];
  const track2 = [
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: ["dnb"],
    },
  ];
  const track3 = [
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },
  ];
  return (
    <div>
      <h2 className="text-white font-bold text-[30px]">Región Caribe</h2>
      <div className="w-full h-10">
        <p className="text-white cursor-pointer" onClick={()=> setTrack(track1)}>Track 1</p>
        <p className="text-white cursor-pointer"  onClick={()=> setTrack(track2)}>Track 2</p>
        <p className="text-white cursor-pointer"  onClick={()=> setTrack(track3)}>Track 3</p>
        <audio src='https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3' />
        <Player listTrack={track}/>
      </div>
    </div>
  );
};

export default page;
