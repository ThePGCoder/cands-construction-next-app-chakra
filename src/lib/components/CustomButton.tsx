"use client";
import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { darkGradient, darkShadow, lightGradient, lightShadow } from "../styles/constants";

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      bg={useColorModeValue(lightGradient, darkGradient)}
      color={useColorModeValue("white", "black")}
      _hover={{ boxShadow: useColorModeValue(lightShadow, darkShadow) }}
      _active={{ bg: useColorModeValue(lightGradient, darkGradient) }}
      {...props} // This ensures all props are passed down
    />
  );
};

export default CustomButton;
