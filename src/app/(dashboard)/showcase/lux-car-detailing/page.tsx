"use client"

import React, { useContext, useEffect } from 'react';
import ImageComponent from '../components/ImageComponent';
import FadeIn from '@/lib/components/FadeIn';
import { ActiveRouteContext } from '@/lib/hooks/activeRouteContext';
import { Box, Heading, Grid, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';


interface LuxCarDetailingProps {
}

const LuxCarDetailing: React.FC<LuxCarDetailingProps> = () => {
    const { changeActiveRoute } = useContext(ActiveRouteContext);
      const router = useRouter();
      useEffect(() => {
        changeActiveRoute("Lux Car Detailing");
      }, []);
    return (
        <>
      <FadeIn>
        <Box pt={100}>
          <Heading size="md">Lux Car Detailing</Heading>
          <Text pt={4} fontSize="sm">
            This webpage was created for a car grooming start up business. It enabled the client not only have viewable content, but also a booking system and enquiry system for customers.
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
            image="/gallery/lcd/lcd1.png"
            imageDescription={"fig1. Projects Page"}
          />
          <ImageComponent
            image="/gallery/lcd/lcd2.png"
            imageDescription={"fig2. Gantt Page"}
          />
          
        </Grid>
      </FadeIn>
    </>
    );
};

export default LuxCarDetailing;