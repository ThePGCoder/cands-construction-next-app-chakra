"use client"

import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

const slides = [
  {
    src: "/gallery/1.jpg",
    caption: "Renovate. Reimagine. Reinvent.",
  },
  {
    src: "/gallery/2.jpeg",
    caption: "Bright & Inspired Living",
  },
  {
    src: "/gallery/3.jpeg",
    caption: "Experience The Difference",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { colorMode } = useColorMode();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      position="relative"
      width="100%"
      height="700px"
      maxW="100%"
      mx="auto"
      overflow="hidden"
      borderRadius="md"
      top={-10}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          transition="opacity 1s ease-in-out"
          opacity={index === currentIndex ? 1 : 0}
          zIndex={index === currentIndex ? 2 : 1}
        >
          {/* Image */}
          <Image
            src={slide.src}
            alt={slide.caption}
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: "scale(1.02)" }}
          />

          {/* Overlay for light/dark mode */}
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg={
              colorMode === "light"
                ? `rgba(255,255,255,0.6)`
                : `rgba(0,0,0,0.6)`
            }
            zIndex={1}
          />

          {/* Fading Caption */}
          <Box
            position="absolute"
            bottom={{ base: "370px", sm: "330px", md: "350px", lg: "270px" }}
            width="100%"
            zIndex={3}
            textAlign="center"
            px={4}
            opacity={index === currentIndex ? 1 : 0}
            transition="opacity 1s ease-in-out"
          >
            <Text
              fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
              fontFamily="Cinzel Decorative"
            >
              {slide.caption}
            </Text>
          </Box>
        </Box>
      ))}

      {/* Static Text and Button */}
      <Box
        position="absolute"
        bottom={5}
        width="100%"
        zIndex={3}
        textAlign="center"
        px={4}
      >
        <Text
          px={{ base: 12, sm: 12, md: 12, lg: 36 }}
          fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "xl" }}
        >
          We bring your vision to life with quality residential and commercial
          construction, renovations, and design solutions.
        </Text>
        <Box h={10} />
        <Flex
          w="100%"
          justifyContent="center"
          direction={{ base: "column", lg: "row" }}
          gap={5}
        >
          

          <Button onClick={() => router.push("/make-enquiry")}>
            <Flex alignItems="center">
              <Box color="yellow.500" _dark={{ color: "yellow.300" }}>
                <Icon icon="mdi:mail" height={25} />
              </Box>
              <Box pl={1}>Make Enquiry</Box>
            </Flex>
          </Button>

          <Button onClick={() => router.push("estimate-my-job")}>
            <Image src="calc.png" width="30px" />
            Estimate My Job
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ImageSlider;
