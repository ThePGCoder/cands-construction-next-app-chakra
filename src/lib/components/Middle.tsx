import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface MiddleProps {
  children: ReactNode;
}

const Middle: React.FC<MiddleProps> = ({ children }) => {
  return (
    <>
      <Box
        display="flex"
        width="100%"
        height="calc(100vh - 130px)"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        {children}
      </Box>
    </>
  );
};

export default Middle;
