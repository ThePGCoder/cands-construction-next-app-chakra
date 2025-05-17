"use client";

import React, { useContext, useEffect } from "react";
import { Center } from "@chakra-ui/react";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import TiledImageList from "../components/TiledImageList";

const images = [
  {
    src: "/gallery/chesterton/1.jpg",
  },

  {
    src: "/gallery/chesterton/3.jpg",
  },
  {
    src: "/gallery/chesterton/4.jpg",
  }, 
  {
    src: "/gallery/chesterton/5.jpg",
  },
  {
    src: "/gallery/chesterton/6.jpg",
  },
  {
    src: "/gallery/chesterton/7.jpg",
    caption: "Kitchen",
  },
  {
    src: "/gallery/chesterton/8.jpg",
  },

  {
    src: "/gallery/chesterton/10.jpg",
  },
  {
    src: "/gallery/chesterton/11.jpg",
  },
  {
    src: "/gallery/chesterton/12.jpg",
  },
  {
    src: "/gallery/chesterton/13.jpg",
  },
  {
    src: "/gallery/chesterton/14.jpg",
  },
  {
    src: "/gallery/chesterton/15.jpg",
  },
  {
    src: "/gallery/chesterton/16.jpg",
  },
  {
    src: "/gallery/chesterton/17.jpg",
  },
  {
    src: "/gallery/chesterton/18.jpg",
  },
  {
    src: "/gallery/chesterton/19.jpg",
  },
  {
    src: "/gallery/chesterton/20.jpg",
  },
  {
    src: "/gallery/chesterton/21.jpg",
  },
  {
    src: "/gallery/chesterton/22.jpg",
  },
  {
    src: "/gallery/chesterton/23.jpg",
  },
  {
    src: "/gallery/chesterton/24.jpg",
  },
  {
    src: "/gallery/chesterton/25.jpg",
  },
  {
    src: "/gallery/chesterton/26.jpg",
  },
  {
    src: "/gallery/chesterton/27.jpg",
  },
  {
    src: "/gallery/chesterton/28.jpg",
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
