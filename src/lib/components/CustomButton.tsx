import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { darkGradient, darkShadow, lightGradient, lightShadow } from "../styles/constants";

interface CustomButtonProps {
  children: ReactNode;
  width?: string;
  onClick?: any;
  type? : any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  width,
  onClick,
  type
}) => {
  return (
    <>
      <Button
      type={type}
        onClick={onClick}
        width={width}
        bg={useColorModeValue(lightGradient, darkGradient)}
        color={useColorModeValue("white", "black")}
        _hover={{ boxShadow: useColorModeValue(lightShadow, darkShadow) }}
        _active={{ bg: useColorModeValue(lightGradient, darkGradient)}}
      >
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
