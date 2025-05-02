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
            <Image src="/base.png" height={
              size == "xs"
                ? "15px"
                : size == "s"
                  ? "20px"
                  : size == "m"
                    ? "35px"
                    : size == "l"
                      ? "20px"
                      : "20px"
            } />
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
          </Flex>
          <Box
          pl={1}
            letterSpacing={4}
            fontSize={
              size == "xs"
                ? 11
                : size == "s"
                  ? 15
                  : size == "m"
                    ? 22
                    : size == "l"
                      ? 30
                      : 40
            }
          >
            BUILDERS
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Logo;
