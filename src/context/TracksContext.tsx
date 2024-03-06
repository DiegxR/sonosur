"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface TracksContextType {
  setTrack: any;
  track: string;
  AudioRender: React.ReactNode;
}

// Crear el contexto
const TrackContext = createContext<TracksContextType | null>(null);

export const TrackContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [track, setTrack] = useState("");
  const [AudioRender, setAudioRender] = useState(<></>);

  useEffect(() => {
    console.log(track);
    setAudioRender(
      <audio
        resource=""
        className="w-full bg-[#0F1B27] audioTracker"
        autoPlay
        controls
        id="audio"
        src={`/audio/${track}`}
      />
    );
  }, [track]);

  return (
    <TrackContext.Provider value={{ setTrack, track, AudioRender }}>
      {children}
    </TrackContext.Provider>
  );
};

export const useTrack = () => {
  const context = useContext(TrackContext);
  if (!context) {
    throw new Error(
      "useToggleDashboard debe ser usado dentro de un ToggleDashboardProvider"
    );
  }
  return context;
};
