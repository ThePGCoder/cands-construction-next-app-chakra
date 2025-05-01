"use client";

import FadeIn from "@/lib/components/FadeIn";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import ImageComponent from "../components/ImageComponent";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import { useRouter } from "next/navigation";

interface CSInnovationsProps {}

const CSInnovations: React.FC<CSInnovationsProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  const router = useRouter();
  useEffect(() => {
    changeActiveRoute("CS Innovations");
  }, []);
  return (
    <>
      <FadeIn>
        <Box pt={100}>
          <Heading size="md">Project Management App</Heading>
          <Text pt={4} fontSize="sm">
            I built this web page to demonstrate a 3d model that is intended to be used in the building trade. The camera can be manipulated around the 3d model also the user can zoom in and zoom out.
          </Text>
          <Text pt={4} fontSize="xs">Note: View on landscape orientation  for best results on mobile devices.</Text>
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          pt={4}
        >
          <ImageComponent
            image="/gallery/csi/csi1.png"
            imageDescription={"fig1. Projects Page"}
          />
          <ImageComponent
            image="/gallery/csi/csi2.png"
            imageDescription={"fig2. Gantt Page"}
          />
          
        </Grid>
      </FadeIn>
    </>
  );
};

export default CSInnovations;
