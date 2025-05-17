"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Center,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import TiledImageList from "../components/TiledImageList";

const images = [
  {
    src: "/gallery/kirton-drive/2.jpg",
  },
  {
    src: "/gallery/kirton-drive/3.jpg",
  },
  {
    src: "/gallery/kirton-drive/4.jpg",
  },
  {
    src: "/gallery/kirton-drive/5.jpg",
  },

  {
    src: "/gallery/kirton-drive/7.jpg",
  },
  {
    src: "/gallery/kirton-drive/8.jpg",
  },
  {
    src: "/gallery/kirton-drive/9.jpg",
  },

  {
    src: "/gallery/kirton-drive/11.jpg",
  },

  {
    src: "/gallery/kirton-drive/12.jpg",
  },
  {
    src: "/gallery/kirton-drive/13.jpg",
  },
  {
    src: "/gallery/kirton-drive/14.jpg",
  },
  {
    src: "/gallery/kirton-drive/15.jpg",
  },
  {
    src: "/gallery/kirton-drive/16.jpg",
  },
  {
    src: "/gallery/kirton-drive/17.jpg",
  },
  {
    src: "/gallery/kirton-drive/18.jpg",
  },
  {
    src: "/gallery/kirton-drive/19.jpg",
  },
  {
    src: "/gallery/kirton-drive/20.jpg",
  },
  {
    src: "/gallery/kirton-drive/21.jpg",
  },
  {
    src: "/gallery/kirton-drive/22.jpg",
  },
  {
    src: "/gallery/kirton-drive/23.jpg",
  },
  {
    src: "/gallery/kirton-drive/24.jpg",
  },
  {
    src: "/gallery/kirton-drive/25.jpg",
  },
  {
    src: "/gallery/kirton-drive/26.jpg",
  },
  {
    src: "/gallery/kirton-drive/27.jpg",
  },
  {
    src: "/gallery/kirton-drive/28.jpg",
  },
  {
    src: "/gallery/kirton-drive/29.jpg",
  },
  {
    src: "/gallery/kirton-drive/30.jpg",
    caption: "Kitchen",
  },
  {
    src: "/gallery/kirton-drive/31.jpg",
  },
  {
    src: "/gallery/kirton-drive/32.jpg",
  },
  {
    src: "/gallery/kirton-drive/33.jpg",
  },
  {
    src: "/gallery/kirton-drive/34.jpg",
  },
  {
    src: "/gallery/kirton-drive/35.jpg",
  },
  {
    src: "/gallery/kirton-drive/36.jpg",
  },
  {
    src: "/gallery/kirton-drive/37.jpg",
  },
  {
    src: "/gallery/kirton-drive/40.jpg",
  },
  {
    src: "/gallery/kirton-drive/43.jpg",
  },
];

const RiverStoneTerracesBathroom: React.FC = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Renovations at Riverstone Terraces");
  }, []);

  
  return (
    <>
      <Center fontFamily="corinthia" fontSize={40}>
        Renovations at Riverstone Terraces
      </Center>
      <TiledImageList images={images}/>
    </>
  );
};

export default RiverStoneTerracesBathroom;
