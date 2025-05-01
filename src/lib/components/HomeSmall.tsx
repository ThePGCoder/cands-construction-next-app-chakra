"use client";

import {
  Box,
  Button,
  Center,
  chakra,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { Icon } from "@iconify/react";
import { isValidMotionProp, motion } from "framer-motion";
import Logo from "@/app/(dashboard)/layout/components/Logo";
import { devIcons } from "../data/devIcons";

interface HomeSmallProps {}

export const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const HomeSmall: React.FC<HomeSmallProps> = () => {
  return (
    <VStack spacing="50px">
      <Logo size="m" />
      <Box position={"relative"}>
        <Image
          src="/code12.png"
          width="200px"
          filter="drop-shadow(10px 10px 10px #222)"
        />

        {devIcons.map((item, key) => (
          <ChakraBox
            as={motion.div}
            key={key}
            left={item.left}
            top={item.top}
            right={item.right}
            bottom={item.bottom}
            position="absolute"
            initial={{ opacity: 0.0, scale: 1 }}
            animate={{
              opacity: 1,
              scale: 1.5,
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 3,

              repeatType: "reverse",
              ease: "easeInOut",
              repeat: Infinity,
              delay: item.delay,
            }}
            transitionProperty="opacity, scale"
          >
            <Icon icon={item.icon} height={24} />
          </ChakraBox>
        ))}
      </Box>
      <Flex alignItems="center" flexDirection="column" textAlign="center">
        <Text
          fontSize="4xl"
          
          fontFamily="Cinzel Decorative"
          bgGradient={useColorModeValue(
            "linear(to-r, #2196f3, #0d47a1)",
            "linear(to-r, #bbdefb, #64b5f6)"
          )}
          bgClip="text"
        >
          Mobile & Web
        </Text>

        <Text fontSize="large" letterSpacing="10px">
          DEVELOPMENT
        </Text>
      </Flex>

      <Center>
        <Link href="https://www.facebook.com/profile.php?id=61573896930019">
          <Button size="sm" leftIcon={<Icon icon="logos:facebook" height={20} />}>
            <Text fontWeight={500} fontSize={"sm"}>
              facebook
            </Text>
          </Button>
        </Link>
        <Box w="40px"/>
        <Link href="https://github.com/ThePGCoder">
          <Button
            size="sm"
            leftIcon={
              <Icon
                icon="simple-icons:github"
                height={20}
                color={useColorModeValue("#242424", "white")}
              />
            }
          >
            <Text fontWeight={500} fontSize={"sm"}>
              github
            </Text>
          </Button>
        </Link>
      </Center>
    </VStack>
  );
};

export default HomeSmall;
