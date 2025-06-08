"use client";

import CustomCard from "@/lib/components/CustomCard";
import Middle from "@/lib/components/Middle";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface EnquirySuccessProps {}

const EnquirySuccess: React.FC<EnquirySuccessProps> = () => {
  const MotionBox = motion(Box);
  const router = useRouter();

  return (
    <>
      <Middle>
        <MotionBox
          maxW={400}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CustomCard>
            <VStack>
              <Flex gap={1} alignItems="center">
                <Box color="green.500" _dark={{ color: "green.300" }}>
                  <Icon icon="mdi:check-circle" width={24} height={24} />
                </Box>
                <Box fontSize="lg" fontWeight="bold">
                  Success
                </Box>
              </Flex>
              <Text fontWeight="medium">
                We will be in touch with you very soon.
              </Text>
              <Box h={2} />
              <Button w="100%" onClick={() => router.push("/home")}>
                Back
              </Button>
            </VStack>
          </CustomCard>
        </MotionBox>
      </Middle>
    </>
  );
};

export default EnquirySuccess;
