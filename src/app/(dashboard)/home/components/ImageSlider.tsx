import React, { useState, useEffect } from "react";
import { Box, Button, Divider, Flex, Image, Text, useColorMode } from "@chakra-ui/react";

import { Icon } from "@iconify/react/dist/iconify.js";
import { keyframes } from "@emotion/react";

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
            bottom={60}
            width="100%"
            zIndex={3}
            textAlign="center"
            px={4}
            opacity={index === currentIndex ? 1 : 0}
            transition="opacity 1s ease-in-out"
          >
            <Text
              fontSize={{base: "5xl", sm: "5xl", md: "5xl", lg: "6xl"}}
              fontWeight="bold"
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
        <Text px={{ base: 12, sm: 12, md: 12, lg: 36 }}>
          At C&S Builders, we bring your vision to life with quality residential and commercial construction, renovations, and design solutions.
        </Text>
        <Box h={5} />
        <Flex w="100%" justifyContent="center" direction={{base: "column", sm: "row"}} gap={5}>
          <Button>
            <Flex alignItems="center">
              <Box color="yellow.500" _dark={{color: "yellow.300"}}><Icon icon="mingcute:schedule-fill" height={25}/></Box>
              <Box pl={1}>Schedule An Appointment</Box>
            </Flex>
          </Button>
          
          <Button>
            <Flex alignItems="center">
              <Box color="yellow.500" _dark={{color: "yellow.300"}}><Icon icon="mdi:mail" height={25} /></Box>
              <Box pl={1}>Contact Us</Box>
            </Flex>
          </Button>
        </Flex>
        
      </Box>
    </Box>
  );
};

export default ImageSlider;