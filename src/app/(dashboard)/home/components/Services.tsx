import CustomCard from '@/lib/components/CustomCard';
import { Heading, SimpleGrid, VStack, Box, useColorModeValue } from '@chakra-ui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

interface ServicesProps {
}

const Services: React.FC<ServicesProps> = () => {
    return (
        <>
            <Heading size="md">
          Our Services:
        </Heading>
        <SimpleGrid columns={{base: 1, sm: 2, md: 2, lg: 3}} columnGap={5} rowGap={5} px={12} maxW={900}>
          <CustomCard>
            <VStack onClick={() => {}}>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="picon:house" height={35} />
              </Box>
              <Heading size="sm" textAlign="center" pt={2}>
                New Builds
              </Heading>
              <Box textAlign="center" fontSize="sm">
                We can assist with a design and build solution, or if you have current plans.
              </Box>
            </VStack>
          </CustomCard>
          <CustomCard>
            <VStack>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="mingcute:house-fill" height={45} />
              </Box>

              <Heading size="sm" textAlign="center" pt={2}>
                Renovations
              </Heading>
              <Box textAlign="center" fontSize="sm">
                We specialize in renovations of any house type in any condition.
              </Box>
            </VStack>
          </CustomCard>
          
          <CustomCard>
            <VStack>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="ic:baseline-business" height={45} />
              </Box>

              <Heading size="sm" textAlign="center" pt={2}>
                Commercial
              </Heading>
              <Box textAlign="center" fontSize="sm">
                We can do shop fitouts to inner city apartments
              </Box>
            </VStack>
          </CustomCard>
          <CustomCard>
            <VStack onClick={() => {}}>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="mdi:shed" height={45} />
              </Box>

              <Heading size="sm" textAlign="center" pt={2}>
                Sheds & Outbuildings
              </Heading>
              <Box textAlign="center" fontSize="sm">
                View our catalogue of kitset sheds, Supply only or supply and install.
              </Box>
            </VStack>
          </CustomCard>
          <CustomCard>
            <VStack onClick={() => {}}>
              <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                <Icon icon="ri:earthquake-fill" height={45} />
              </Box>

              <Heading size="sm" textAlign="center" pt={2}>
                Earthquake Restrengthening 
              </Heading>
              <Box textAlign="center" fontSize="sm">
                We will work with you to bring your current building up to code.
              </Box>
            </VStack>
          </CustomCard>
        </SimpleGrid>
        </>
    );
};

export default Services;