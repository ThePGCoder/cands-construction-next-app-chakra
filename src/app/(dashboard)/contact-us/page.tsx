"use client"

import CustomButton from '@/lib/components/CustomButton';
import FadeIn from '@/lib/components/FadeIn';
import { ActiveRouteContext } from '@/lib/hooks/activeRouteContext';
import { primary, secondary } from '@/lib/styles/constants';
import { useToast, Center, Card, useColorModeValue, Text, Heading, CardBody, Box, VStack, InputGroup, Input, Textarea } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { submitEnquiry } from './components/Post';
import { Icon } from '@iconify/react/dist/iconify.js';

interface ContactUsProps {
}

const ContactUs: React.FC<ContactUsProps> = () => {
    const { changeActiveRoute } = useContext(ActiveRouteContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");

  useEffect(() => {
    localStorage.setItem("route", "Contact Us");
    changeActiveRoute("Contact Us");
  }, []);

  const formErrorToast = useToast({
    title: "Error.",
    description: "Please complete the form.",
    status: "error",
    duration: 3000,
    isClosable: true,
  });
  const formSuccessToast = useToast({
    title: "Success.",
    description: "We will be in touch with you very soon.",
    status: "success",
    duration: 3000,
    isClosable: true,
  });
  const handleSubmit = async (event: any) => {
    if (name == "" || email == "" || subject == "" || enquiry == "") {
      formErrorToast();
      return;
    }
    submitEnquiry(name, email, subject, enquiry);
    formSuccessToast();
    event.preventDefault();
    event.target.reset();
  };

  return (
    <>
      <FadeIn>
        <Center py={100}>
          <Card
            boxShadow={useColorModeValue("2px 2px 5px #646464", "")}
            border={useColorModeValue("", "#474f5e 2px solid")}
            width={{ base: 300, sm: 300, md: 450, lg: 600 }}
          >
            <Center pt={"20px"} >
              <Heading size="md" pl={2}>
                Contact Us
              </Heading>
            </Center>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <Box>Please the complete the form.</Box>
                <VStack pt={4}>
                  <InputGroup alignItems="center">
                    <Icon
                      icon="mdi:account-circle"
                      height={20}
                      color={useColorModeValue(primary, secondary)}
                    />
                    <Box w={4} />
                    <Input
                      borderRadius="4px"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup alignItems="center">
                    <Icon
                      icon="ri:mail-fill"
                      height={20}
                      color={useColorModeValue(primary, secondary)}
                    />
                    <Box w={4} />
                    <Input
                      borderRadius="4px"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>

                  <InputGroup alignItems="center">
                    <Icon
                      icon="mdi:card-text"
                      height={20}
                      color={useColorModeValue(primary, secondary)}
                    />
                    <Box w={4} />
                    <Input
                      borderRadius="4px"
                      type="text"
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </InputGroup>

                  <InputGroup alignItems="flex-start">
                    <Box pt={2}>
                      <Icon
                        icon="mdi:text-box"
                        height={20}
                        color={useColorModeValue(primary, secondary)}
                      />
                    </Box>

                    <Box w={3.5} />
                    <Textarea
                      placeholder="Enquiry"
                      borderRadius="4px"
                      size="md"
                      rows={6}
                      onChange={(e) => setEnquiry(e.target.value)}
                    />
                  </InputGroup>
                </VStack>

                <Box height={6} />
                <Center>
                  <CustomButton type="submit" w="100%">
                    <Icon icon="ri:checkbox-circle-fill" height={22} />
                    <Text pl={2}>Submit</Text>
                  </CustomButton>
                </Center>
              </form>
            </CardBody>
          </Card>
        </Center>
      </FadeIn>
    </>
  );
};

export default ContactUs;