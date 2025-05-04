"use client";

import CustomButton from "@/lib/components/CustomButton"; // Assuming these imports are correct
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext"; // Assuming these imports are correct
// import { primary } from "@/lib/styles/constants"; // Assuming this is defined elsewhere or remove if unused
import {
  Box,
  Center,
  Card, // Assuming CustomCard wraps this or is used instead
  Text,
  Image,
  useColorModeValue,
  Heading,
  CardBody,
  SimpleGrid, // Not used in the provided snippet, maybe elsewhere?
  VStack, // Not used in the provided snippet, maybe elsewhere?
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Icon } from "@iconify/react";

import ZoomIn from "@/lib/components/ZoomIn"; // Assuming these imports are correct
import { useRouter } from "next/navigation";
import FadeIn from "@/lib/components/FadeIn"; // Assuming these imports are correct
import CustomCard from "@/lib/components/CustomCard"; // Assuming this component exists

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  const router = useRouter(); // router is defined but not used in the snippet

  useEffect(() => {
    // Set the active route when the component mounts
    changeActiveRoute("About Us");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependency array ensures this runs only once on mount

  // Define placeholder contact info or fetch from environment/config
  const phoneNumber = "[Your Phone Number]";
  const emailAddress = "[Your Email Address]";
  const websiteLink = "[Link to your Website]"; // Use '#' or a valid URL

  return (
    <>
      <FadeIn>
        {/* Spacer */}
        <Box height={50} />

        <Center>
          {/* Main content card */}
          <CustomCard>
            {/* Card Header */}
            <Center pt={"20px"}>
              <Icon icon="mdi:account-circle" height={22} />
              <Heading size="md" pl={2}>
                About Us
              </Heading>
            </Center>

            <CardBody>
              {/* Image Section */}
              <Center>
                <Box position="relative" mb={6} maxW={600}> {/* Added margin bottom */}
                  <ZoomIn>
                    {/* Ensure the image path is correct relative to the public folder */}
                    <Image src="/wellington.jpg" alt="Wellington cityscape" borderRadius="md" />
                  </ZoomIn>
                </Box>
              </Center>

              {/* Text Content Section */}
              <Box maxWidth="container.lg" mx="auto" py={8} px={{ base: 4, md: 8 }}>
                <Heading as="h2" size="lg" fontWeight="bold" mb={4}> {/* Changed Text to Heading for semantics */}
                  Building on Trust: Three Decades of Crafting Wellington's Spaces
                </Heading>

                <Text fontSize="md" mb={6}>
                  Kia ora koutou from the heart of windy Wellington! For over 30 years,{" "}
                  <Text as="span" fontWeight="semibold" color={useColorModeValue("yellow.500", "yellow.300")}> {/* Adjusted color for light/dark mode */}
                    C&S Builders
                  </Text>{" "}
                  has been more than just a building company; we've been a part of the
                  fabric of this vibrant city, shaping its homes and businesses, piece by piece.
                </Text>

                <Text mb={4}>
                  That's right – three decades. In a world that's constantly changing,
                  we're proud to have stood the test of time, weathering the Wellington
                  winds and evolving with the needs of our community. From the charming
                  character homes nestled in the hills to the sleek commercial spaces
                  downtown, our experience runs deep and our commitment to quality even
                  deeper.
                </Text>

                <Heading as="h3" size="md" fontWeight="semibold" mt={6} mb={3}> {/* Changed Text to Heading */}
                  More Than Just Bricks and Mortar: It's About People
                </Heading>
                <Text fontSize="md" mb={4}>
                  For us, building isn't just about following blueprints and laying
                  foundations. It's about understanding your vision, respecting your needs,
                  and bringing your dreams to life. We've had the privilege of working
                  alongside countless Wellingtonians, listening to their stories, and
                  crafting spaces where memories are made and businesses thrive.
                </Text>

                <Text fontSize="md" mb={4}>
                  Over these 30 years, we've learned that the key to a successful project
                  lies in clear communication, meticulous attention to detail, and a
                  genuine passion for what we do. We believe in building relationships as
                  strong as the structures we create.
                </Text>

                <Heading as="h3" size="md" fontWeight="semibold" mt={6} mb={3}> {/* Changed Text to Heading */}
                  What Three Decades of Experience Means for You:
                </Heading>

                {/* Corrected List Structure */}
                <Box pl={{ base: 0, md: 4 }} mb={4}> {/* Adjusted padding for responsiveness */}
                  {/* Item 1 */}
                  <Box mb={3}> {/* Use Box as container for each item */}
                    <Text fontWeight="semibold" mb={1}> {/* Bold heading */}
                       Unwavering Reliability:
                    </Text>
                    <Text fontSize="md"> {/* Description */}
                      Thirty years in the industry speaks volumes. It means we have a proven
                      track record of delivering high-quality projects, on time and within
                      budget. You can trust our experience to navigate the complexities of
                      any build.
                    </Text>
                  </Box>

                  {/* Item 2 */}
                   <Box mb={3}>
                    <Text fontWeight="semibold" mb={1}>
                      Deep Local Knowledge:
                    </Text>
                    <Text fontSize="md">
                      Wellington is a unique city with its own set of challenges and
                      opportunities – from its hilly terrain to its specific building codes.
                      Our long history here means we have an intimate understanding of the
                      local environment and regulations, ensuring a smooth and compliant
                      build.
                    </Text>
                  </Box>

                  {/* Item 3 */}
                  <Box mb={3}>
                    <Text fontWeight="semibold" mb={1}>
                       A Network of Trusted Professionals:
                    </Text>
                    <Text fontSize="md">
                       Over the years, we've built strong relationships with the best local
                       suppliers, subcontractors, and architects. This network allows us to
                       assemble the right team for your project, ensuring top-notch
                       craftsmanship at every stage.
                    </Text>
                  </Box>

                  {/* Item 4 */}
                   <Box mb={3}>
                    <Text fontWeight="semibold" mb={1}>
                       Evolving with the Times:
                    </Text>
                    <Text fontSize="md">
                       While our core values of quality and integrity remain constant, we're
                       committed to staying at the forefront of building innovations,
                       sustainable practices, and modern design trends. We blend our
                       time-tested expertise with cutting-edge techniques to deliver spaces
                       that are both beautiful and functional for today's world.
                    </Text>
                  </Box>

                  {/* Item 5 */}
                  <Box mb={3}>
                    <Text fontWeight="semibold" mb={1}>
                       Peace of Mind:
                    </Text>
                    <Text fontSize="md">
                       Choosing a builder with three decades of experience provides
                       invaluable peace of mind. You can rest assured that you're working
                       with a team that has the knowledge, skills, and resilience to handle
                       any challenge that may arise.
                    </Text>
                  </Box>
                </Box>

                <Heading as="h3" size="md" fontWeight="semibold" mt={6} mb={3}> {/* Changed Text to Heading */}
                  Looking Towards the Future, Grounded in the Past:
                </Heading>
                <Text fontSize="md" mb={4}>
                  As we look ahead, our commitment to Wellington remains as strong as ever.
                  We're excited to continue partnering with you to shape the future of our
                  city, one exceptional build at a time.
                </Text>

                <Text fontSize="md" mb={6}>
                  Whether you're planning a home renovation, a new commercial development,
                  or anything in between, we invite you to tap into our 30 years of
                  experience. Let's build something extraordinary together.
                </Text>

                {/* Contact Section */}
                <Box mt={8} borderTop="1px solid" borderColor={useColorModeValue("gray.200", "gray.600")} pt={6}> {/* Adjusted border color */}
                  <Heading as="h4" size="sm" fontWeight="semibold" mb={2}> {/* Changed Text to Heading */}
                    Get in Touch:
                  </Heading>
                  <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")} mb={1}> {/* Adjusted color */}
                    Ready to discuss your building project? Contact the team at{" "}
                    <Text as="span" fontWeight="semibold" color={useColorModeValue("teal.500", "teal.300")}> {/* Adjusted color */}
                      C&S Builders
                    </Text>{" "}
                    today for a consultation. We're always happy to chat about how we can
                    bring your vision to life.
                  </Text>
                  {/* Use actual contact info or variables */}
                  <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")} mb={1}>
                    {phoneNumber}
                  </Text>
                  <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")} mb={1}>
                    {emailAddress}
                  </Text>
                  <Text fontSize="md" color={useColorModeValue("teal.600", "teal.400")} as="a" href={websiteLink}> {/* Added isExternal for external links */}
                    {websiteLink}
                  </Text>
                </Box>

                {/* Hashtags */}
                <Text mt={8} fontSize="sm" color={useColorModeValue("gray.500", "gray.400")}> {/* Adjusted color */}
                  #WellingtonBuilders #BuildingWellington #30YearsExperience #LocalBuilders
                  #QualityConstruction #CSBuilders
                </Text>
              </Box>
            </CardBody>
          </CustomCard>
        </Center>

        {/* Spacer */}
        <Box height={100} />
      </FadeIn>
    </>
  );
};

export default AboutUs;
