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

interface AboutMeProps {}

const AboutMe : React.FC<AboutMeProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  const router = useRouter();
  useEffect(() => {
    changeActiveRoute("About Me");
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
              <Icon icon="mdi:account-circle" height={22} color={primary} />
              <Heading size="md" pl={2}>
                About Me
              </Heading>
            </Center>
  
            <CardBody>
              <Center>
                <Box position="relative">
                  <ZoomIn>
                    <Image src="/wellington.jpg"/>
                  </ZoomIn>
                  <Box
                    position="absolute"
                    bottom={"-75px"}
                    display="flex"
                    w="100%"
                    justifyContent="center"
                  >
                    <Image
                      src="/phil.jpg"
                      borderRadius="50%"
                      border={"3px solid"}
                      borderColor={useColorModeValue(
                        "rgba(0,0,0, 0.12)",
                        "rgba(255,255,255, 0.12)"
                      )}
                      height={150}
                      width={150}
                      fit="cover"
                    />
                  </Box>
                </Box>
              </Center>
              <Box h="75px" />
              <SimpleGrid columns={2} spacing={2} pt={10}>
                <Box>
                  <Text fontWeight="bold">Name:</Text>
                </Box>{" "}
                <Box>Philip Collings</Box>
                <Box>
                  <Text fontWeight="bold">Age:</Text>
                </Box>{" "}
                <Box>47</Box>
                <Box>
                  <Text fontWeight="bold">City:</Text>
                </Box>
                <Box>Lower Hutt, Wellington</Box>
                <Box>
                  <Text fontWeight="bold">Personal Statement:</Text>
                </Box>
                <Box></Box>
              </SimpleGrid>
              <Box>
                <Text pt={2}>
                  I am from Wellington, New Zealand. I am a web and mobile programmer.
                </Text>
                
                <Text pt={2}>
                  I also have worked in the building industry for 25 years as a builder. I have a very sound knowledge of the NZ residential building code.
                </Text>
                <Text pt={2}>
                  I can build any application to suit any screen.
                </Text>
                <Text pt={2}>
                  I can build server applications for authentication and persistent storage methods for data.
                </Text>
                <Text pt={2}>
                  Feel free to visit my github repository, facebook page or view the showcase in the menu tab.
                </Text>
              </Box>
              <Box height={4} />
              <Text
                pt={4}
                fontFamily="signatureFont"
                fontSize="2rem"
                fontWeight="bold"
                color={useColorModeValue("#1e88e5", "#64b5f6")}
              >
                Philip Collings
              </Text>
              <VStack>
                <Box height={4} />
                <CustomButton
                  onClick={() => router.push("/contact-me")}
                >
                  <Icon icon="ri:mail-fill" height={22} />
                  <Text pl={2}>Contact Me</Text>
                </CustomButton>
              </VStack>
              <Box height={4} />
            </CardBody>
          </Card>
        </Center>
        <Box height={100} />
      </FadeIn>
    </>
  );
};

export default AboutMe ;
