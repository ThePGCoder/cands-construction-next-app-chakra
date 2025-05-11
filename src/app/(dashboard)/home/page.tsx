"use client";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import { Box, VStack, Text } from "@chakra-ui/react";

import React, { useContext, useEffect } from "react";

import WorkingHours from "./components/WorkingHours";
import Sponsors from "./components/Sponsors";
import Services from "./components/Services";
import ImageSlider from "./components/ImageSlider";
import TheProcess from "./components/TheProcess";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Home");
    window.scrollTo(0,0)
  }, []);

  return (
    <>
      <ImageSlider />

      <VStack pb={50} gap={10}>
        <Box maxW={900} px={6}>
          <Text textAlign="center" pb={10} fontSize="4xl" fontFamily="poppins" fontWeight={500}>
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
