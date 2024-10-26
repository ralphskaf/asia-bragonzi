import React, { createContext, useState, useContext } from "react";

const VideoContext = createContext();

export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <VideoContext.Provider value={{ isVideoOpen, setIsVideoOpen }}>
      {children}
    </VideoContext.Provider>
  );
};
