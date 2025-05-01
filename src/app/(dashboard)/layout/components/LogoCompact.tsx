import { Box, useColorModeValue, Image } from "@chakra-ui/react";
import React from "react";

interface LogoCompactProps {
  size: string | number;
  display: {};
  imageHeight: string | number;
}

const LogoCompact: React.FC<LogoCompactProps> = ({ size, imageHeight, display }) => {
  return (
    <>
      <Box
        
        alignItems="center"
        fontSize={size}
        fontFamily="copperplate"
        display={display}
      >
        <Box>C&S</Box>
        <Box width="5px" />
        <Image
          src={useColorModeValue("/logos/cs.png","/logos/cs0.png")}
          height={imageHeight}
        ></Image>
      </Box>
    </>
  );
};

export default LogoCompact;
