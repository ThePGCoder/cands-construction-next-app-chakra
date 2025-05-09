import { Box, Card, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import {
  darkBorder,
  lightSurface,
  darkSurface,
  lightBorder,
  lightShadow,
  darkShadow,
} from "../styles/constants";

interface CustomCardProps {
  children: ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ children }) => {
  return (
    <>
      <Card
        border="2px solid"
        borderRadius={6}
        borderColor={useColorModeValue(lightBorder, darkBorder)}
        p={4}
        bg={useColorModeValue(lightSurface, darkSurface)}
        
      >
        {children}
      </Card>
    </>
  );
};

export default CustomCard;
