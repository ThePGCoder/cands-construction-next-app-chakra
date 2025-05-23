import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface AboutUsContent {}

const AboutUsContent: React.FC<AboutUsContent> = () => {
  return (
    <Box maxW="container.lg" mx="auto" py={8}>
      <Text fontSize="md" mb={6}>
        For over 10 years,&nbsp;
        <Text
          as="span"
          fontWeight="semibold"
          color="yellow.500"
          _dark={{ color: "yellow.300" }}
        >
          C&S Construction
        </Text>{" "}
        has shaped the homes of this city. The company directors Phil & Kent
        have a combined industry experience of nearly 50 years.
      </Text>

      <Text mb={4}>
        We have been evolving with modern building standards while staying true
        to the strength and beauty of timber. From character homes to sleek
        commercial spaces, our experience runs deep, and our commitment to
        quality runs even deeper.
      </Text>

      <Heading as="h3" size="md" fontWeight="semibold" mt={6} mb={3}>
        More Than Just Timber and Tools: It’s About People
      </Heading>

      <Text fontSize="md" mb={4}>
        Building isn’t just about following plans—it’s about understanding your
        vision and crafting spaces that truly feel like home. We’ve worked
        alongside countless Wellingtonians, listening to their stories and
        creating timber-built spaces where memories are made and businesses
        thrive.
      </Text>

      <Heading as="h3" size="md" fontWeight="semibold" mt={6} mb={3}>
        What Decades of Experience Means for You
      </Heading>

      <Box pl={{ base: 0, md: 4 }} mb={4}>
        {[
          {
            title: "Unwavering Reliability",
            description:
              "Three decades of experience means we have a track record of delivering high-quality projects on time and within budget.",
          },
          {
            title: "Deep Local Knowledge",
            description:
              "We understand Wellington’s unique terrain, climate, and building regulations, ensuring smooth and compliant builds.",
          },
          {
            title: "A Network of Trusted Professionals",
            description:
              "We’ve built relationships with top suppliers, subcontractors, and architects, ensuring top-tier craftsmanship.",
          },
          {
            title: "Evolving with the Times",
            description:
              "While timber is timeless, we integrate modern design techniques and sustainable practices for future-proof builds.",
          },
          {
            title: "Peace of Mind",
            description:
              "Choosing experienced builders means choosing reliability—we’re here to ensure your project is seamless and built to last.",
          },
        ].map(({ title, description }) => (
          <Box key={title} mb={3}>
            <Text fontWeight="semibold" mb={1}>
              {title}
            </Text>
            <Text fontSize="md">{description}</Text>
          </Box>
        ))}
      </Box>

      <Heading as="h3" size="md" fontWeight="semibold" mt={6} mb={3}>
        Looking Ahead
      </Heading>

      <Text fontSize="md" mb={4}>
        As we look toward the future, we remain committed to delivering
        exceptional timber-built homes and commercial spaces that stand the test
        of time.
      </Text>

      <Text fontSize="md" mb={6}>
        Whether you're planning a renovation, a new build, or something in
        between, we invite you to tap into our 50 years of experience. Let’s
        build something extraordinary—together.
      </Text>
    </Box>
  );
};

export default AboutUsContent;
