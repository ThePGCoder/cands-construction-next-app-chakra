"use client";

import React, { useContext, useEffect } from "react";
import { Center } from "@chakra-ui/react";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import TiledImageList from "../components/TiledImageList";

const images = [
  {
    src: "/gallery/moana/1.jpeg",
  },

  {
    src: "/gallery/moana/3.jpeg",
  },
  {
    src: "/gallery/moana/4.jpeg",
  },
  {
    src: "/gallery/moana/5.jpeg",
  },
  {
    src: "/gallery/moana/6.jpeg",
  },
  {
    src: "/gallery/moana/7.jpeg",
    caption: "Kitchen",
  },
  {
    src: "/gallery/moana/8.jpeg",
  },

  {
    src: "/gallery/moana/10.jpeg",
  },
  {
    src: "/gallery/moana/11.jpeg",
  },
  {
    src: "/gallery/moana/12.jpeg",
  },
];

const PlimmertonBeachHouse: React.FC = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Plimmerton Beach House");
  }, []);

  return (
    <>
      <Center fontFamily="corinthia" fontSize={40}>
        Plimmerton Beach House
      </Center>
      <TiledImageList images={images} />
    </>
  );
};

export default PlimmertonBeachHouse;
