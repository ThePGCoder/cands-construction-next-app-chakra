import CustomCard from "@/lib/components/CustomCard";
import { darkBorder, lightBorder } from "@/lib/styles/constants";
import {
  useSteps,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
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
} from "@chakra-ui/react";
import React from "react";

const processItems = [
  { title: "Enquire", description: "Initial inquiry to explore requirements and possibilities." },
  { title: "Meet & Discuss Options", description: "A meeting to go over different options and ideas." },
  { title: "Estimate", description: "Providing a cost estimate based on the discussed requirements." },
  { title: "Spec & Design", description: "Defining specifications and creating a detailed design plan." },
  { title: "Formal Quote", description: "Issuing an official quote for the entire project." },
  { title: "Build Process", description: "Beginning the actual construction based on finalized plans." }
];

interface TheProcessProps {}

const TheProcess: React.FC<TheProcessProps> = () => {
  return (
    <>
      <>
        <Flex gap={8}>
          <CustomCard>
            <VStack w="350px">
              <Heading size="md" pb={5} px={5}>
                Non Consented Build Process
              </Heading>
  
              {processItems.map((item, index) => (
                <Flex key={index} gap={5}>
                  <Flex
                    minW="35px"
                    maxH="35px"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50%"
                    bg="yellow.500"
                    _dark={{ bg: "yellow.300", color: "gray.800" }}
                    color="white"
                    fontWeight="bold"
                  >
                    {index + 1}
                  </Flex>
                  <Stack>
                    <Box fontWeight="bold">{item.title}</Box>
                    <Box>{item.description}</Box>
                    
                  </Stack>
                  
                </Flex>
              ))}
            </VStack>
          </CustomCard>
          
        </Flex>
      </>
    </>
  );
};

export default TheProcess;
