"use client";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import { Box, VStack, Text, Image, Heading, Center, Stack, Button } from "@chakra-ui/react";

import React, { useContext, useEffect } from "react";

import WorkingHours from "./components/WorkingHours";
import Sponsors from "./components/Sponsors";
import Services from "./components/Services";
import ImageSlider from "./components/ImageSlider";
import TheProcess from "./components/TheProcess";
import { Icon } from "@iconify/react/dist/iconify.js";
import { lightBorder } from "@/lib/styles/constants";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Home");
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      window.scrollTo({ top: parseInt(scrollTo), behavior: "smooth" });
      sessionStorage.removeItem("scrollTo");
    }
  }, []);

  return (
    <>
      <ImageSlider />

      

      <VStack pb={50} gap={10}>
        <Box maxW={900} px={6}>
          
          <Text
            textAlign="center"
            pb={10}
            fontSize="4xl"
            fontFamily="poppins"
            fontWeight={500}
          >
            Your Partner for a Simpler, Stress-Free Build.
          </Text>
          <Services />
          <TheProcess />
          <WorkingHours />
          <Sponsors />
        </Box>
      </VStack>
    </>
  );
};

export default Home;
