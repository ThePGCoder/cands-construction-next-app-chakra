
import { Box, VStack, Text, Link } from "@chakra-ui/react";

import React from "react";

import WorkingHours from "./components/WorkingHours";
import Sponsors from "./components/Sponsors";
import Services from "./components/Services";
import ImageSlider from "./components/ImageSlider";
import TheProcess from "./components/TheProcess";
import HomeRouteClientLogic from "./components/HomeRouteClientLogic";
import ContactDetails from "./components/ContactDetails";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  
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
          <ContactDetails/>
          <Sponsors />
        </Box>
      </VStack>

      <HomeRouteClientLogic/>
    </>
  );
};

export default Home;
