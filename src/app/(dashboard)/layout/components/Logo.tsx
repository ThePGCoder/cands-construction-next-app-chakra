import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { primary, secondary } from "@/lib/styles/constants";



interface LogoProps {
  size: string;
}

const Logo: React.FC<LogoProps> = ({size}) => {

  return (
    <>
      <Flex alignItems="center">
        <Box
          fontSize={size == "xs" ? 15 : size == "s" ? 20 : size == "m" ? 30 : size == "l" ? 40 : 50}
          fontWeight="bold"
          color={useColorModeValue(primary, secondary)}
        >
          &#123;
        </Box>
        <Box
          fontSize={size == "xs" ? 15 : size == "s" ? 20 : size == "m" ? 30 : size == "l" ? 40 : 50}
          fontFamily="corinthia"
          color={useColorModeValue(primary, secondary)}
        >
          The
        </Box>
        <Box fontWeight="bold" fontSize={size == "xs" ? 15 : size == "s" ? 20 : size == "m" ? 30 : size == "l" ? 40 : 50} fontFamily="Krona One">
          PGCoder
        </Box>

        <Flex alignItems="center">
          <Box
            fontSize={size == "xs" ? 15 : size == "s" ? 10 : size == "m" ? 30 : size == "l" ? 40 : 50}
            fontWeight="bold"
            color={useColorModeValue(primary, secondary)}
          >
            ...
          </Box>

          <Box
            fontSize={size == "xs" ? 15 : size == "s" ? 20 : size == "m" ? 30 : size == "l" ? 40 : 50}
            fontWeight="bold"
            color={useColorModeValue(primary, secondary)}
          >
            &#125;
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Logo;
