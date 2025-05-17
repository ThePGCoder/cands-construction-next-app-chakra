"use client";

import React, { useContext, useEffect } from "react";
import { Center } from "@chakra-ui/react";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import TiledImageList from "../components/TiledImageList";

const images = [
  {
    src: "/gallery/burnell/1.jpg",
  },

  {
    src: "/gallery/burnell/3.jpg",
  },
  {
    src: "/gallery/burnell/4.jpg",
  }, 
  {
    src: "/gallery/burnell/5.jpg",
  },
  
];

const ThorndonVilla: React.FC = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Thorndon Villa");
  }, []);

  return (
    <>
      <Center fontFamily="corinthia" fontSize={40}>
        Thorndon Villa
      </Center>
      <TiledImageList images={images} />
    </>
  );
};

export default ThorndonVilla;
