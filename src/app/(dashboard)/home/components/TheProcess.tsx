import CustomCard from "@/lib/components/CustomCard";
import RevealOnScroll from "@/lib/components/RevealOnScroll";

import {
  Box,
  VStack,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const nonConsentedProcessItems = [
  {
    title: "Enquire",
    description: "Initial inquiry to explore requirements and possibilities.",
    color: "red.500",
    darkColor: "red.300",
    imageUrl: "/gallery/enquiry.jpg",
  },
  {
    title: "Meet & Discuss Options",
    description: "A meeting to go over different options and ideas.",
    color: "orange.500",
    darkColor: "orange.300",
    imageUrl: "/gallery/meeting.jpg",
  },
  {
    title: "Estimate",
    description:
      "Providing a cost estimate based on the discussed requirements.",
    color: "yellow.500",
    darkColor: "yellow.300",
    imageUrl: "/gallery/estimate.jpg",
  },
  {
    title: "Specs & Design*",
    description: "Defining specifications and creating a detailed design plan.",
    color: "gray.500",
    darkColor: "gray.300",
    imageUrl: "/gallery/design.jpg",
  },
  {
    title: "Formal Quote",
    description:
      "Issuing an official quote and contract for the entire project.",
    color: "blue.500",
    darkColor: "blue.300",
    imageUrl: "/gallery/quote.jpg",
  },
  {
    title: "Lets Build!",
    description: "Beginning the actual construction based on finalized plans.",
    color: "green.500",
    darkColor: "green.300",
    imageUrl: "/gallery/building.jpg",
  },
];

interface TheProcessProps {}

const TheProcess: React.FC<TheProcessProps> = () => {
  return (
    <>
      <>
        
          
          <RevealOnScroll>
            <VStack gap={6} pt={10}>
              <Heading size="lg">
                The Process:
              </Heading>
              <Box>
                We understand that embarking on a building project can feel
                overwhelming. That's why we've streamlined our entire process to
                make it simpler, more transparent, and enjoyable for you. From the
                initial concept to the final handover, we focus on clear
                communication and meticulous project management to ensure your
                vision comes to life smoothly and efficiently.
              </Box>
    
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
                columnGap={5}
                rowGap={5}
                
                maxW={900}
              >
    
                
                {nonConsentedProcessItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <CustomCard>
                      <VStack>
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
                          _dark={{ borderColor: "gray.700", color: "gray.700", bg: item.darkColor }}
                        >
                          {index + 1}
                        </Flex>
                        <Box fontWeight="bold">{item.title}</Box>
                        <Box textAlign="center">{item.description}</Box>
                      </VStack>
                    </CustomCard>
                  </React.Fragment>
                ))}
              </SimpleGrid>
              <Box>*Design if job requires consent.</Box>
            </VStack>
          </RevealOnScroll>

          <RevealOnScroll>
            <VStack gap={6} pt={10}>
              <Heading as="h2" size="lg" mt={4}>
                How do we make it simpler?
              </Heading>
    
              <List spacing={3} mt={2}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" _dark={{color: "green.300"}}/>
                  <Text as="span" fontWeight="bold" display="inline">
                    Clear Communication & Guidance:
                  </Text>
                  <Text display="inline">
                    {" "}
                    We're with you every step of the way, providing regular updates
                    and clear explanations. We listen to your needs and offer expert
                    advice, ensuring you feel informed and confident throughout the
                    project.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" _dark={{color: "green.300"}}/>
                  <Text as="span" fontWeight="bold" display="inline">
                    Personalized Approach:
                  </Text>
                  <Text display="inline">
                    {" "}
                    Whether it's a new home, a renovation, or an extension, we
                    tailor our services to your specific requirements and budget.
                    {/* Optional: Consider adding a placeholder for company strength */}
                    {/* <Text as="span" fontStyle="italic"> e.g., "Our award-winning team..."</Text> */}
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" _dark={{color: "green.300"}}/>
                  <Text as="span" fontWeight="bold" display="inline">
                    Organized Project Management:
                  </Text>
                  <Text display="inline">
                    {" "}
                    We manage all the details, from planning and scheduling to
                    coordinating skilled tradespeople. Our commitment is to keep
                    your project on track and on budget, minimizing stress and
                    unforeseen complications.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" _dark={{color: "green.300"}}/>
                  <Text as="span" fontWeight="bold" display="inline">
                    Quality Craftsmanship:
                  </Text>
                  <Text display="inline">
                    {" "}
                    A simpler process doesn't mean compromising on quality. We are
                    dedicated to delivering high-standard workmanship that you'll be
                    proud of for years to come.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" _dark={{color: "green.300"}}/>
                  <Text as="span" fontWeight="bold" display="inline">
                    Stress-Free Experience:
                  </Text>
                  <Text display="inline">
                    {" "}
                    Our goal is to handle the complexities of the build so you can
                    focus on the excitement of creating your new space. We strive to
                    make your building journey a positive and rewarding one.
                  </Text>
                </ListItem>
              </List>
            </VStack>
          </RevealOnScroll>

          
        
      </>
    </>
  );
};

export default TheProcess;
