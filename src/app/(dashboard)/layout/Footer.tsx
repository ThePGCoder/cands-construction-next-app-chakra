import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Text } from '@chakra-ui/react'
import { lightBorder, darkBorder, darkBG, primary, lightBG } from "@/lib/styles/constants";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <Box
        width={{ base: "100%", sm: "100%", md: "calc(100% - 320px)" }}
        height={50}
        position="fixed"
        bottom={0}
        display="flex"
        justifyContent="center"
        alignItems="center"       
        borderTopWidth={1}
        borderColor={useColorModeValue(lightBorder, darkBorder)}
        ml={{ base: 0, sm: 0, md: 320 }}
        bg= {useColorModeValue(lightBG, darkBG)}
      >
        <Box display="flex" fontSize="0.75rem">
          <Box color={primary}>&nbsp;&#123;</Box>
          <Box fontStyle="italic" fontFamily="corinthia">
            the
          </Box>
          <Box fontWeight="bold" fontSize="0.75rem">PGCoder</Box><Box color={primary}>...&#125;</Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
