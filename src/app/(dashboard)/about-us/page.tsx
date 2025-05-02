"use client";

import CustomButton from "@/lib/components/CustomButton";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import { primary } from "@/lib/styles/constants";
import {
  Box,
  Center,
  Card,
  Text,
  Image,
  useColorModeValue,
  Heading,
  CardBody,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Icon } from "@iconify/react";

import ZoomIn from "@/lib/components/ZoomIn";
import { useRouter } from "next/navigation";
import FadeIn from "@/lib/components/FadeIn";

interface AboutUsProps {}

const AboutUs : React.FC<AboutUsProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  const router = useRouter();
  useEffect(() => {
    changeActiveRoute("About Us");
  }, []);
  return (
    <>
      <FadeIn>
        <Box height={50} />
        <Center>
          <Card
            boxShadow={useColorModeValue("2px 2px 5px #646464", "")}
            border={useColorModeValue("", "#474f5e 2px solid")}
            width={{ base: 300, sm: 300, md: 450, lg: 600 }}
          >
            <Center pt={"20px"}>
              <Icon icon="mdi:account-circle" height={22}/>
              <Heading size="md" pl={2}>
                About Us
              </Heading>
            </Center>
  
            <CardBody>
              <Center>
                <Box position="relative">
                  <ZoomIn>
                    <Image src="/wellington.jpg"/>
                  </ZoomIn>
                  
                </Box>
              </Center>
             
            </CardBody>
          </Card>
        </Center>
        <Box height={100} />
      </FadeIn>
    </>
  );
};

export default AboutUs ;
