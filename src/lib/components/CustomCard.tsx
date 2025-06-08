"use client";

import { Card, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import {
  darkBorder,
  lightSurface,
  darkSurface,
  lightBorder,
} from "../styles/constants";

interface CustomCardProps {
  children: ReactNode;
  padding?: number | string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  children,
  padding = 4,
  ...props
}) => {
  return (
    <Card
      border="2px solid"
      borderRadius={6}
      borderColor={useColorModeValue(lightBorder, darkBorder)}
      p={padding}
      bg={useColorModeValue(lightSurface, darkSurface)}
      {...props}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
