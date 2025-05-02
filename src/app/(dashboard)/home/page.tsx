"use client";

import CustomButton from "@/lib/components/CustomButton";
import Middle from "@/lib/components/Middle";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import {
  Box,
  Button,
  Center,
  Text,
  Image,
  Heading,
  Stack,
  useColorMode,
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react"; // Import Icon
import ImageSlider from "@/lib/components/ImageSlider";
import CustomCard from "@/lib/components/CustomCard";
import { primary, secondary } from "@/lib/styles/constants";

const images = [
  { src: "/gallery/1.jpg", caption: "Renovate. Reimagine. Reinvent." },
  { src: "/gallery/2.jpeg", caption: "Bright & Inspired Living" },
  { src: "/gallery/3.jpeg", caption: "Comfort Meets Elegance" },
];

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Home");
  }, []);

  return (
    <>
      <ImageSlider />
      <VStack pb={70}>
        <Heading size="md">
          Our Services:
        </Heading>
        <SimpleGrid columns={{base: 1, sm: 2}} columnGap={5} rowGap={5} px={12} pt={8}>
          <CustomCard>
            <VStack onClick={() => {}}>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="picon:house" height={35} />
              </Box>
              <Heading size="sm" textAlign="center" pt={2}>
                New Builds
              </Heading>
              <Box textAlign="center" fontSize="sm">
                We can assist with a design and build solution, or if you have current plans.
              </Box>
            </VStack>
          </CustomCard>
          <CustomCard>
            <VStack>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="mingcute:house-fill" height={45} />
              </Box>

              <Heading size="sm" textAlign="center" pt={2}>
                Renovations
              </Heading>
              <Box textAlign="center" fontSize="sm">
                We specialize in renovations of any house type in any condition.
              </Box>
            </VStack>
          </CustomCard>
          
          <CustomCard>
            <VStack>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="ic:baseline-business" height={45} />
              </Box>

              <Heading size="sm" textAlign="center" pt={2}>
                Commercial
              </Heading>
              <Box textAlign="center" fontSize="sm">
                We can do shop fitouts to inner city apartments
              </Box>
            </VStack>
          </CustomCard>
          <CustomCard>
            <VStack onClick={() => {}}>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="mdi:shed" height={45} />
              </Box>

              <Heading size="sm" textAlign="center" pt={2}>
                Sheds & Outbuildings
              </Heading>
              <Box textAlign="center" fontSize="sm">
                View our catalogue of kitset sheds, Supply only or supply and install.
              </Box>
            </VStack>
          </CustomCard>
          <CustomCard>
            <VStack onClick={() => {}}>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="ri:earthquake-fill" height={45} />
              </Box>

              <Heading size="sm" textAlign="center" pt={2}>
                Earthquake Restrengthening 
              </Heading>
              <Box textAlign="center" fontSize="sm">
                We will work with you to bring your current building up to code.
              </Box>
            </VStack>
          </CustomCard>
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default Home;
