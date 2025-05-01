"use client"

import FadeIn from "@/lib/components/FadeIn";
import { Box, Heading, Grid, Text } from "@chakra-ui/react";

import React, { useContext, useEffect } from "react";
import ImageComponent from "../components/ImageComponent";
import { useRouter } from "next/navigation";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";

interface ProjectManagementProps {}

const ProjectManagement: React.FC<ProjectManagementProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
    
    useEffect(() => {
      changeActiveRoute("Project Management");
    }, []);
    return (
    <>
      <FadeIn>
        <Box pt={100}>
          <Heading size="md">Project Management App</Heading>
          <Text pt={4} fontSize="sm">
            This web app I built for my building business, it is used to track
            all our current building projects. The Gantt chart helps handle any
            overall view of projects and dates. Each project is able to have its
            own instance where files can be stored in a cloud database.
          </Text>
          <Text pt={4} fontSize="sm">
            Project managers from our parent company can register via the
            authentication process to have special privileges.
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
            image="/gallery/csr/csr1.png"
            imageDescription={"fig1. Projects Page"}
          />
          <ImageComponent
            image="/gallery/csr/csr2.png"
            imageDescription={"fig2. Gantt Page"}
          />
          <ImageComponent
            image="/gallery/csr/csr3.png"
            imageDescription={"fig3. Project Page"}
          />
          <ImageComponent
            image="/gallery/csr/csr4.png"
            imageDescription={"fig4. Register Page"}
          />
          <ImageComponent
            image="/gallery/csr/csr5.png"
            imageDescription={"fig5. Add New Project"}
          />
          <ImageComponent
            image="/gallery/csr/csr6.png"
            imageDescription={"fig6. Splash Page"}
          />
        </Grid>
      </FadeIn>
    </>
  );
};

export default ProjectManagement;
