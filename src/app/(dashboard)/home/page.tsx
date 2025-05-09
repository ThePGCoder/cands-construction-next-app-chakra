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

import CustomCard from "@/lib/components/CustomCard";
import { primary, secondary } from "@/lib/styles/constants";
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
  }, []);

  return (
    <>
      <ImageSlider />
      
      <VStack pb={50} gap={10}>
        <Services/>
        <TheProcess/>
        <WorkingHours/>
        <Sponsors/>
      </VStack>
      
    </>
  );
};

export default Home;
