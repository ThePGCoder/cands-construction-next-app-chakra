"use client";

import React, { useContext, useEffect } from "react";
import { Center } from "@chakra-ui/react";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import TiledImageList from "../components/TiledImageList";

const images = [
  {
    src: "/gallery/chesterton/1.JPG",
  },

  {
    src: "/gallery/chesterton/3.JPG",
  },
  {
    src: "/gallery/chesterton/4.JPG",
  }, 
  {
    src: "/gallery/chesterton/5.JPG",
  },
  {
    src: "/gallery/chesterton/6.JPG",
  },
  {
    src: "/gallery/chesterton/7.JPG",
    caption: "Kitchen",
  },
  {
    src: "/gallery/chesterton/8.JPG",
  },

  {
    src: "/gallery/chesterton/10.JPG",
  },
  {
    src: "/gallery/chesterton/11.JPG",
  },
  {
    src: "/gallery/chesterton/12.JPG",
  },
  {
    src: "/gallery/chesterton/13.JPG",
  },
  {
    src: "/gallery/chesterton/14.JPG",
  },
  {
    src: "/gallery/chesterton/15.JPG",
  },
  {
    src: "/gallery/chesterton/16.JPG",
  },
  {
    src: "/gallery/chesterton/17.JPG",
  },
  {
    src: "/gallery/chesterton/18.JPG",
  },
  {
    src: "/gallery/chesterton/19.JPG",
  },
  {
    src: "/gallery/chesterton/20.JPG",
  },
  {
    src: "/gallery/chesterton/21.JPG",
  },
  {
    src: "/gallery/chesterton/22.JPG",
  },
  {
    src: "/gallery/chesterton/23.JPG",
  },
  {
    src: "/gallery/chesterton/24.JPG",
  },
  {
    src: "/gallery/chesterton/25.JPG",
  },
  {
    src: "/gallery/chesterton/26.JPG",
  },
  {
    src: "/gallery/chesterton/27.JPG",
  },
  {
    src: "/gallery/chesterton/28.JPG",
  },
];

const JohnsonvilleVilla: React.FC = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Johnsonville Villa");
  }, []);

  return (
    <>
      <Center fontFamily="corinthia" fontSize={40}>
        Johnsonville Villa
      </Center>
      <TiledImageList images={images} />
    </>
  );
};

export default JohnsonvilleVilla;
