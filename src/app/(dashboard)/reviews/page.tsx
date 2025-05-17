"use client";

import CustomCard from "@/lib/components/CustomCard";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  ScaleFade,
  SimpleGrid,
  SlideFade,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface Reviews {}

const customers = [
  {
    avatar: "/avatars/male.png",
    caption:
      "“My project involved a large bedroom extension to match existing house including weatherboard cladding and timber windows and doors. Phil and Kent were very easy to deal with, completed works with a high quality finish, very fair on overall project cost and the additional works I asked them to complete and passed all 7 council inspections with no issues at all. Thanks guys!”",
    name: "Kama",
  },
  {
    avatar: "/avatars/female.png",
    caption:
      "“Friendly and tidy on site. Made appropriate suggestions for variations on the work planned. Would definately use them again. Thanks for a great deck.”",
    name: "Pauline",
  },
  {
    avatar: "/avatars/male.png",
    caption:
      "“Great blokes - clear communication, were professional and did great work throughout! With the drainage, we ended up having to excavate a lot more than originally planned, and the guys didn't complain at all - were easy to deal with, and any changes to costs or timings were clear and quickly communicated. Workmanship on the stairs was great, and the guys always left a tidy site in the afternoons when they headed out. Would easily recommend them and ask them back for work again.”",
    name: "Jason",
  },
];

const Reviews: React.FC<Reviews> = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    // Staggered reveal on mount
    customers.forEach((_, index) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, index]);
      }, index * 500); // 300ms delay per item
    });
  }, []);

  return (
    <>
    <Center pt={5}><Heading size="md">Reviews</Heading></Center>
      <Center pt={10}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 3 }} gap={10}>
          {customers.map((item, index) => (
            <SlideFade
              key={index}
              offsetY="40px"
              in={visibleIndexes.includes(index)}
            >
              <CustomCard >
                <CardBody w="300px">
                  <VStack gap={10}>
                    <Avatar src={item.avatar} size="xl" bg="gray.500" />
                    <Box>{item.caption}</Box>
                    <VStack>
                      <Box fontWeight="bold">{item.name}</Box>
                      <Box>Home Owner</Box>
                    </VStack>
                  </VStack>
                </CardBody>
              </CustomCard>
            </SlideFade>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Reviews;
