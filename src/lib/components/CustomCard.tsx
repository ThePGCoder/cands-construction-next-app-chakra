import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import {
  darkBorder,
  lightSurface,
  darkSurface,
  lightBorder,
} from "../styles/constants";

interface CustomCardProps {
  children: ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ children }) => {
  return (
    <>
      <Box
        border="1px solid"
        borderRadius={4}
        borderColor={useColorModeValue(lightBorder, darkBorder)}
        p={4}
        bg={useColorModeValue(lightSurface, darkSurface)}
      >
        {children}
      </Box>
    </>
  );
};

export default CustomCard;
