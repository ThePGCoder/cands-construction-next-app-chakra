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

const nonConsentedProcessItems = [
  { title: "Enquire", description: "Initial inquiry to explore requirements and possibilities." },
  { title: "Meet & Discuss Options", description: "A meeting to go over different options and ideas." },
  { title: "Estimate", description: "Providing a cost estimate based on the discussed requirements." },
  { title: "Spec & Design", description: "Defining specifications and creating a detailed design plan." },
  { title: "Formal Quote", description: "Issuing an official quote for the entire project." },
  { title: "Build Process", description: "Beginning the actual construction based on finalized plans." }
];

const consentedProcessItems = [
  { title: "Enquire", description: "Initial inquiry to explore requirements and possibilities." },
  { title: "Meet & Discuss Options", description: "A meeting to go over different options and ideas." },
  { title: "Estimate", description: "Providing a cost estimate based on the discussed requirements." },
  { title: "Preliminary Drawings", description: "Creating initial sketches to visualize the proposed design." },
  { title: "Working & Drawings", description: "Developing detailed plans for implementation and construction." },
  { title: "Formal Quote", description: "Issuing an official quote for the entire project." },
  { title: "Build Process", description: "Beginning the actual construction based on finalized plans." }
];

interface TheProcessProps {}

const TheProcess: React.FC<TheProcessProps> = () => {
  return (
    <>
      <>
        <VStack>
          <CustomCard>
            <VStack w="350px">
              <Heading size="md" pb={5} px={5}>
                Non Consented Build Process
              </Heading>
  
              {nonConsentedProcessItems.map((item, index) => (
                <Flex key={index}>
                  <Flex
                    width="35px"
                    height="35px"
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
                  {index != nonConsentedProcessItems.length - 1 && (
                    <>
                      <Box
                        mt={-2}
                        borderLeft="1px"
                        height="25px"
                        borderColor="gray.500"
                      ></Box>
                    </>
                  )}
                </Flex>
              ))}
            </VStack>
          </CustomCard>
          
            <VStack w="350px">
              <Heading size="md" pb={5}>
                Consented Build Process
              </Heading>
  
              {consentedProcessItems.map((item, index) => (
                
                <Box key={index}>
                  <CustomCard>
                    <VStack >
                      <Flex
                        width="35px"
                        height="35px"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="50%"
                        bg="gray.600"
                        color="white"
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
         
        </VStack>
      </>
    </>
  );
};

export default TheProcess;
