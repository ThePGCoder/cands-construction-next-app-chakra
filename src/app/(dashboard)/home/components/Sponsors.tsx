import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Image,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import PGCoderLogo from "../../layout/components/PGCoderLogo";
import CustomCard from "@/lib/components/CustomCard";

interface SponsorsProps {}

const Sponsors: React.FC<SponsorsProps> = () => {
  return (
    <>
      <Card mb={10}>
        <CardBody>
          
            <Flex justifyContent="space-between" gap={5} alignItems="center">
              <Flex
                alignItems="center"
                color="blue.600"
                fontWeight="bold"
                gap={1}
                _dark={{color: "blue.300"}}
              >
                <Icon icon="ant-design:facebook-filled" height={20} />
                facebook
              </Flex>
  
              <Flex gap={2}>
                
                <Stack gap={0}>
                  <Box fontWeight="bold" fontSize="xs">LICENSED BUILDING</Box>{" "}
                  <Flex fontSize="xs" justifyContent="flex-end">PRACTIONERS</Flex>
                  
                </Stack>
                <Image
                  src={useColorModeValue(
                    "/logos/lbp-black.png",
                    "/logos/lbp-white.png"
                  )}
                  h="35px"
                />
              </Flex>
            </Flex>
            
                    
         
        </CardBody>
      </Card>
    </>
  );
};

export default Sponsors;
