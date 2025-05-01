"use client"

import FadeIn from '@/lib/components/FadeIn';
import { Box, Heading, Grid, Text } from '@chakra-ui/react';

import React, { useContext, useEffect } from 'react';
import ImageComponent from '../components/ImageComponent';
import { useRouter } from 'next/navigation';
import { ActiveRouteContext } from '@/lib/hooks/activeRouteContext';

interface BathroomCostCalculatorProps {
}

const BathroomCostCalculator: React.FC<BathroomCostCalculatorProps> = () => {
    const { changeActiveRoute } = useContext(ActiveRouteContext);
      
      useEffect(() => {
        changeActiveRoute("Bathroom Cost Calculator");
      }, []);
    return (
        <>
      <FadeIn>
        <Box pt={100}>
          <Heading size="md">Bathroom Cost Calculator</Heading>
          <Text pt={4} fontSize="sm">
            This web app was built so the client can calculate the costs of a bathroom by selecting option from a series of forms. The end result gives printable and sharable quote.
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
            image="/gallery/bcc/bcc1.png"
            imageDescription={"fig1. Projects Page"}
          />
          <ImageComponent
            image="/gallery/bcc/bcc2.png"
            imageDescription={"fig2. Gantt Page"}
          />
          <ImageComponent
            image="/gallery/bcc/bcc3.png"
            imageDescription={"fig3. Project Page"}
          />
          
        </Grid>
      </FadeIn>
    </>
    );
};

export default BathroomCostCalculator;