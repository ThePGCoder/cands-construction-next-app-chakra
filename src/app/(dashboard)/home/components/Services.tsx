import CustomCard from "@/lib/components/CustomCard";
import {
  Heading,
  SimpleGrid,
  VStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface serviceItemsProps {
  icon: string;
  title: string;
  description: string;
}

const serviceItems: serviceItemsProps[] = [
  {
    "icon": "mdi:house",
    "title": "New Builds",
    "description": "We can assist with a full design-and-build solution or work with your existing plans to create your dream home."
  },
  {
    "icon": "mdi:house-plus",
    "title": "Alterations & Additions",
    "description": "Whether you're expanding your home or reimagining its layout, we specialize in seamless additions and tailored alterations to suit your needs."
  },
  {
    "icon": "mingcute:house-fill",
    "title": "Renovations",
    "description": "We bring new life to homes of any style and condition with expert renovation services tailored to your vision."
  },
  {
    "icon": "ic:baseline-business",
    "title": "Commercial",
    "description": "From shop fit-outs to inner-city apartments, we deliver high-quality commercial construction solutions."
  },
  {
    "icon": "mdi:shed",
    "title": "Garages, Carports & Sheds",
    "description": "Explore our range of kitset sheds—available for supply only or full installation—perfect for storage, workshops, or vehicle protection."
  },
  {
    "icon": "ri:earthquake-fill",
    "title": "Earthquake Restrengthening",
    "description": "We work with you to ensure your building meets safety standards through expert seismic strengthening."
  },
  {
    "icon": "ic:round-deck",
    "title": "Decks & Fences",
    "description": "Upgrade your outdoor space with custom-built decks and durable fencing, designed for style and longevity."
  },
  {
    "icon": "ic:round-terrain",
    "title": "Landscaping",
    "description": "From garden transformations to hardscaping, our landscaping services create beautiful and functional outdoor areas."
  }
];

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <>
      <VStack gap={6}>
        <Heading size="lg">Our Services:</Heading>
        <Box>Explore our range of services:</Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          columnGap={5}
          rowGap={5}
          
        >
          {serviceItems.map((item, index) => (
            <React.Fragment key={index}>
              <CustomCard>
                <VStack onClick={() => {}}>
                  <Box color={useColorModeValue("yellow.500", "yellow.300")}>
                    <Icon icon={item.icon} height={45} />
                  </Box>
                  <Heading size="sm" textAlign="center" pt={2}>
                    {item.title}
                  </Heading>
                  <Box textAlign="center" fontSize="sm">
                    {item.description}
                  </Box>
                </VStack>
              </CustomCard>
            </React.Fragment>
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default Services;
