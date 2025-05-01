"use client";

import {
  Box,
  Button,
  Center,
  chakra,
  Image,
  Flex,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import React from "react";

import { Icon } from "@iconify/react";
import Logo from "@/app/(dashboard)/layout/components/Logo";
import { devIcons } from "../data/devIcons";
import { useRouter } from "next/navigation";

interface HomeLargeProps {}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const HomeLarge: React.FC<HomeLargeProps> = () => {
  const router = useRouter();
  return (
    <VStack spacing="50px">
      <Logo size="xl" />
      <HStack spacing="50px">
        <Box position={"relative"}>
          <Image
            src="/code12.png"
            width="250px"
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
        <Flex alignItems="center" flexDirection="column">
          <Text
            fontSize="6xl"
            fontFamily="Cinzel Decorative"
            bgGradient={useColorModeValue(
              "linear(to-r, #2196f3, #0d47a1)",
              "linear(to-r, #bbdefb, #64b5f6)"
            )}
            bgClip="text"
          >
            Mobile & Web
          </Text>

          <Text fontSize="xl" letterSpacing="10px">
            DEVELOPMENT
          </Text>
        </Flex>
      </HStack>

      <Center>
        <Link href="https://www.facebook.com/profile.php?id=61573896930019">
          <Button leftIcon={<Icon icon="logos:facebook" height={20} />}>
            <Text fontWeight={500}>facebook</Text>
          </Button>
        </Link>
        <Box w="40px" />
        <Link href="https://github.com/ThePGCoder">
          <Button
            leftIcon={
              <Icon
                icon="simple-icons:github"
                height={20}
                color={useColorModeValue("#242424", "white")}
              />
            }
          >
            <Text fontWeight={500}>github</Text>
          </Button>
        </Link>
      </Center>
    </VStack>
  );
};

export default HomeLarge;
