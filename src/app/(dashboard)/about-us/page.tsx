import { Box, Center, Heading, CardBody, Image } from "@chakra-ui/react";
import CustomCard from "@/lib/components/CustomCard";
import AboutUsContent from "./components/AboutUsContent";
import ZoomIn from "@/lib/components/ZoomIn";
import FadeIn from "@/lib/components/FadeIn";
import AboutRouteClientLogic from "./components/AboutRouteClientLogic"; // 👈 new client-only component

export default function AboutUs() {
  return (
    <>
      <FadeIn>
        {/* Spacer */}
        <Box height={50} />

        <Center px={6}>
          <CustomCard>
            <Center pt={"20px"}>
              <Heading size="lg">About Us</Heading>
            </Center>

            <CardBody>
              <Center>
                <Box position="relative" mb={6} maxW={600}>
                  <ZoomIn>
                    <Image
                      src="/wellington.jpg"
                      alt="Wellington cityscape"
                      borderRadius="md"
                    />
                  </ZoomIn>
                </Box>
              </Center>

              {/* Static content */}
              <AboutUsContent />
            </CardBody>
          </CustomCard>
        </Center>

        {/* Spacer */}
        <Box height={100} />

        {/* Client-only logic */}
        <AboutRouteClientLogic />
      </FadeIn>
    </>
  );
}
