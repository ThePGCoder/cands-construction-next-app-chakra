import { Box } from "@chakra-ui/react";
import React from "react";

interface PGCoderLogoProps {}

const PGCoderLogo: React.FC<PGCoderLogoProps> = () => {
  return (
    <>
      <Box display="flex" fontSize="0.75rem">
        <Box color={"blue.400"}>&nbsp;&#123;</Box>
        <Box fontStyle="italic" fontFamily="corinthia">
          the
        </Box>
        <Box fontWeight="bold" fontSize="0.75rem">
          PGCoder
        </Box>
        <Box color="blue.400">...&#125;</Box>
      </Box>
    </>
  );
};

export default PGCoderLogo;
