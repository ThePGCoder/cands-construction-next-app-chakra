import CustomCard from "@/lib/components/CustomCard";
import { darkBorder, lightBorder } from "@/lib/styles/constants";
import {
  Image,
  Box,
  StepTitle,
  StepDescription,
  StepSeparator,
  VStack,
  Stack,
  Flex,
  Heading,
  HStack,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

const nonConsentedProcessItems = [
  {
    title: "Enquire",
    description: "Initial inquiry to explore requirements and possibilities.",
    color: "red.500",
    imageUrl: "/gallery/enquiry.jpg",
  },
  {
    title: "Meet & Discuss Options",
    description: "A meeting to go over different options and ideas.",
    color: "orange.500",
    imageUrl: "/gallery/meeting.jpg",
  },
  {
    title: "Estimate",
    description:
      "Providing a cost estimate based on the discussed requirements.",
    color: "yellow.500",
    imageUrl: "/gallery/estimate.jpg",
  },
  {
    title: "Specifications",
    description: "Defining specifications and creating a detailed design plan.",
    color: "gray.500",
    imageUrl: "/gallery/design.jpg",
  },
  {
    title: "Formal Quote",
    description: "Issuing an official quote for the entire project.",
    color: "blue.500",
  },
  {
    title: "Build Process",
    description: "Beginning the actual construction based on finalized plans.",
    color: "green.500",
  },
];

const consentedProcessItems = [
  {
    title: "Enquire",
    description: "Initial inquiry to explore requirements and possibilities.",
    color: "red.500",
  },

  {
    title: "Meet & Discuss Options",
    description: "A meeting to go over different options and ideas.",
    color: "orange.500",
  },
  {
    title: "Estimate",
    description:
      "Providing a cost estimate based on the discussed requirements.",
    color: "yellow.500",
  },
  {
    title: "Preliminary Drawings",
    description: "Creating initial sketches to visualize the proposed design.",
    color: "gray.500",
  },
  {
    title: "Working Drawings",
    description:
      "Developing detailed plans for implementation and construction.",
    color: "purple.500",
  },
  {
    title: "Formal Quote",
    description: "Issuing an official quote for the entire project.",
    color: "blue.500",
  },
  {
    title: "Build Process",
    description: "Beginning the actual construction based on finalized plans.",
    color: "green.500",
  },
];

interface TheProcessProps {}

const TheProcess: React.FC<TheProcessProps> = () => {
  return (
    <>
      <>
        <VStack>
          <Heading size="md" pb={5}>
            Non Consented Build Process
          </Heading>

          <SimpleGrid columns={3} gap={8}>
            {nonConsentedProcessItems.map((item, index) => (
              <Box key={index} w="300px">
                <CustomCard padding={0}>
                  <VStack padding={4}>
                    <Flex
                      width="40px"
                      height="40px"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="50%"
                      bg={item.color}
                      fontWeight="bold"
                      color="white"
                      border="2px solid"
                      boxShadow="0px 0px 7px #646464"
                      //outline="2px dotted"
                      outlineColor={item.color}
                      _dark={{ borderColor: "gray.700", color: "gray.700" }}
                    >
                      {index + 1}
                    </Flex>
                    <Box fontWeight="bold">{item.title}</Box>
                    <Box textAlign="center">{item.description}</Box>
                  </VStack>
                  <Image
                    src={item.imageUrl}
                    borderRadius="4px"
                    height="175px"
                    objectFit="cover"
                    
                  />
                </CustomCard>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack w="350px">
          <Heading size="md" pb={5}>
            Consented Build Process
          </Heading>

          {consentedProcessItems.map((item, index) => (
            <Box key={index}>
              <CustomCard>
                <VStack>
                  <Flex
                    width="35px"
                    height="35px"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50%"
                    bg={item.color}
                    color="white"
                    border="2px solid"
                    outline="2px solid"
                    outlineColor={item.color}
                    _dark={{ borderColor: "gray.700" }}
                  >
                    {index + 1}
                  </Flex>
                  <Box fontWeight="bold">{item.title}</Box>
                  <Box textAlign="center">{item.description}</Box>
                </VStack>
              </CustomCard>
              <Center>
                {index != consentedProcessItems.length - 1 && (
                  <>
                    <Box
                      mt={2}
                      borderLeft="1px dashed"
                      height="25px"
                      borderColor="gray.500"
                    ></Box>
                  </>
                )}
              </Center>
            </Box>
          ))}
        </VStack>
      </>
    </>
  );
};

export default TheProcess;
