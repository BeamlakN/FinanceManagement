import React from "react";
import {
  Box,
  Container,
  Input,
  Textarea,
  Button,
  VStack,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactUs: React.FC = () => {
  return (
    <Box bg="gray.50" py={16} id="contact-us">
      <Container maxW="container.lg">
        {/* Heading */}
        <Text
          fontSize="lg"
          fontWeight="bold"
          textTransform="uppercase"
          color="blue.300"
          mb={2}
        >
          Connect with Us
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="gray.700" mb={6}>
          Let’s Discuss Your Financial Goals
        </Text>

        {/* Content */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          gap={6}
        >
          {/* Form Section */}
          <Box w={{ base: "100%", lg: "60%" }}>
            <VStack spacing={4}>
              <Input
                placeholder="Full Name*"
                size="lg"
                bg="white"
                focusBorderColor="blue.500"
              />
              <Input
                placeholder="Email Address*"
                size="lg"
                bg="white"
                focusBorderColor="blue.500"
              />
              <Input
                placeholder="Phone Number*"
                size="lg"
                bg="white"
                focusBorderColor="blue.500"
              />
              <Textarea
                placeholder="Your Message*"
                size="lg"
                bg="white"
                focusBorderColor="blue.500"
                rows={6}
              />
              <Button
                colorScheme="blue"
                size="lg"
                w="100%"
                mt={4}
                _hover={{ bg: "blue.600" }}
              >
                Submit
              </Button>
            </VStack>
          </Box>

          {/* Contact Information */}
          <Box
            w={{ base: "100%", lg: "35%" }}
            bg="white"
            p={8}
            shadow="lg"
            borderRadius="md"
          >
            <Text fontSize="md" color="gray.600" mb={6}>
              At <strong>Your Finance Co.</strong>, we help you achieve your
              financial goals with tailored strategies. Reach out to us today
              for personalized support.
            </Text>
            <Flex align="center" mb={4}>
              <Icon as={FiMail} color="blue.500" boxSize={6} />
              <Text fontSize="lg" color="gray.700" ml={4}>
                support@financeapp.com
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={FiPhone} color="blue.500" boxSize={6} />
              <Text fontSize="lg" color="gray.700" ml={4}>
                +251 912345678
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUs;
