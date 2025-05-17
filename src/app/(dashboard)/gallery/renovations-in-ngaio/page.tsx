"use client";

import React, { useContext, useEffect, useState } from "react";
import { Center, useBreakpointValue, useDisclosure } from "@chakra-ui/react";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import TiledImageList from "../components/TiledImageList";

const images = [
  {
    src: "/gallery/ngata/1.jpg",
  },

  {
    src: "/gallery/ngata/3.jpg",
  },
  {
    src: "/gallery/ngata/4.jpg",
  },
  {
    src: "/gallery/ngata/5.jpg",
  },
  {
    src: "/gallery/ngata/6.jpg",
  },
  {
    src: "/gallery/ngata/7.jpg",
  },
  {
    src: "/gallery/ngata/8.jpg",
  },

  {
    src: "/gallery/ngata/10.jpg",
  },
  {
    src: "/gallery/ngata/11.jpg",
  },
  {
    src: "/gallery/ngata/12.jpg",
  },
  {
    src: "/gallery/ngata/13.jpg",
  },
  {
    src: "/gallery/ngata/14.jpg",
  },
  {
    src: "/gallery/ngata/15.jpg",
  },
  {
    src: "/gallery/ngata/16.jpg",
  },
  {
    src: "/gallery/ngata/17.jpg",
  },
  {
    src: "/gallery/ngata/18.jpg",
  },
  {
    src: "/gallery/ngata/19.jpg",
  },
  {
    src: "/gallery/ngata/20.jpg",
  },
  {
    src: "/gallery/ngata/21.jpg",
  },
  {
    src: "/gallery/ngata/22.jpg",
  },
  {
    src: "/gallery/ngata/23.jpg",
  },
  {
    src: "/gallery/ngata/24.jpg",
  },
  {
    src: "/gallery/ngata/25.jpg",
  },
  {
    src: "/gallery/ngata/26.jpg",
  },
  {
    src: "/gallery/ngata/27.jpg",
  },
  {
    src: "/gallery/ngata/28.jpg",
  },
];

const RenovationsInNgaio: React.FC = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Renovations in Ngaio");
  }, []);

  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const columnStyle = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  });
  return (
    <>
      <Center fontFamily="corinthia" fontSize={40}>
        Renovations in Ngaio
      </Center>
      <TiledImageList images={images} />
    </>
  );
};

export default RenovationsInNgaio;
