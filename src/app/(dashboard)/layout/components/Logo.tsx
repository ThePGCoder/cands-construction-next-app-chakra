import React from "react";
import { Box, Flex, Stack, Image, useColorModeValue } from "@chakra-ui/react";
import { primary, secondary } from "@/lib/styles/constants";

interface LogoProps {
  size: string;
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <>
      <Flex alignItems="center">
        <Stack gap={0} alignItems="center">
          <Flex
            fontSize={
              size == "xs"
                ? 15
                : size == "s"
                  ? 20
                  : size == "m"
                    ? 30
                    : size == "l"
                      ? 40
                      : 50
            }
            fontFamily="Copperplate"
            fontWeight="bold"
            justifyContent="center"
            alignItems="center"
          >
            
            <Box fontSize={
              size == "xs"
                ? 15
                : size == "s"
                  ? 20
                  : size == "m"
                    ? 30
                    : size == "l"
                      ? 40
                      : 50
            }>C&S</Box>
            <Image src={useColorModeValue("/logos/cs.png", "/logos/cs0.png")} height={
              size == "xs"
                ? "15px"
                : size == "s"
                  ? "30px"
                  : size == "m"
                    ? "40px"
                    : size == "l"
                      ? "40px"
                      : "40px"
            } />
          </Flex>
          <Box
          pl={1}
            letterSpacing={3}
            fontSize={
              size == "xs"
                ? 11
                : size == "s"
                  ? 15
                  : size == "m"
                    ? 12
                    : size == "l"
                      ? 30
                      : 40
            }
          >
            CONSTRUCTION
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Logo;
