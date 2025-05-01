import React, { ReactNode, useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";

interface ZoomInProps {
  children: ReactNode;
}

const ZoomIn: React.FC<ZoomInProps> = ({ children }) => {
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    setZoom(true);
  }, []);

  return (
    <>
      <Box overflow="hidden" borderRadius="4px">
        <Box transform={zoom ? "scale(1.1)" : "scale(1.0)"} transition="transform 3s" >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default ZoomIn;
