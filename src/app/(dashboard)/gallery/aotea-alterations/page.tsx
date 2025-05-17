"use client";

import React, { useContext, useEffect } from "react";
import { Center } from "@chakra-ui/react";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import TiledImageList from "../components/TiledImageList";

const images = [
  {
    src: "/gallery/catlins-glenn/1.jpg",
  },
  {
    src: "/gallery/catlins-glenn/2.jpg",
  },
  {
    src: "/gallery/catlins-glenn/3.jpg",
  },
  {
    src: "/gallery/catlins-glenn/4.jpg",
  },
  {
    src: "/gallery/catlins-glenn/5.jpg",
  },
  {
    src: "/gallery/catlins-glenn/6.jpg",
  },
  {
    src: "/gallery/catlins-glenn/7.jpg",
  },
  {
    src: "/gallery/catlins-glenn/8.jpg",
  },
  {
    src: "/gallery/catlins-glenn/9.jpg",
  },
  {
    src: "/gallery/catlins-glenn/10.jpg",
  },
  {
    src: "/gallery/catlins-glenn/11.jpg",
  },
  {
    src: "/gallery/catlins-glenn/12.jpg",
  },
  {
    src: "/gallery/catlins-glenn/13.jpg",
  },
  {
    src: "/gallery/catlins-glenn/14.jpg",
  },
  {
    src: "/gallery/catlins-glenn/15.jpg",
  },
  {
    src: "/gallery/catlins-glenn/16.jpg",
  },
];

const ThorndonVilla: React.FC = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Aotea Alterations");
  }, []);

  return (
    <>
      <Center fontFamily="corinthia" fontSize={40}>
        Aotea Alterations
      </Center>
      <TiledImageList images={images} />
    </>
  );
};

export default ThorndonVilla;
