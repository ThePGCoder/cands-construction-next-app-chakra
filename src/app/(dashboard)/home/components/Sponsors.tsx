import { Box, Card, CardBody, Center, Flex, Image, Stack } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import PGCoderLogo from "../../layout/components/PGCoderLogo";

interface SponsorsProps {}

const Sponsors: React.FC<SponsorsProps> = () => {
  return (
    <>
      <Card bg="gray.900" w="100%">
        <CardBody>
            <Stack gap={5}>
                
                
                
                    <Flex justifyContent="flex-end" gap={5} alignItems="center">
                      <Image src="/logos/master-builders.png" w="40px" />
                      
                      <Image src="/logos/lbp-logo.svg" h="40px" />
                    </Flex>
               
                
            </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default Sponsors;
