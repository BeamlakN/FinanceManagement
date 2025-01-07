import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  IconButton,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box bg="blue.700" color="white" py={10}>
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Column 1: About Us */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              About Us
            </Text>
            <Text fontSize="sm" lineHeight="tall">
              We empower individuals and businesses to achieve their financial
              goals with innovative tools and tailored advice. Join us to
              navigate your journey to financial success.
            </Text>
          </Box>

          {/* Column 2: Quick Links */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Quick Links
            </Text>
            <Stack spacing={2}>
              <Link href="#home" _hover={{ color: "yellow.400" }}>
                Home
              </Link>
              <Link href="#services" _hover={{ color: "yellow.400" }}>
                Services
              </Link>
              <Link href="#how-it-works" _hover={{ color: "yellow.400" }}>
                Testimonials
              </Link>
              <Link href="#testimonals" _hover={{ color: "yellow.400" }}>
                Testimonial
              </Link>
              <Link href="#contact-us" _hover={{ color: "yellow.400" }}>
                Contact Us
              </Link>
            </Stack>
          </Box>

          {/* Column 3: Social Media */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Follow Us
            </Text>
            <Flex gap={4}>
              <IconButton
                as="a"
                href="#"
                aria-label="Facebook"
                icon={<FaFacebook />}
                bg="transparent"
                _hover={{ color: "yellow.400" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter />}
                bg="transparent"
                _hover={{ color: "yellow.400" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                bg="transparent"
                _hover={{ color: "yellow.400" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Instagram"
                icon={<FaInstagram />}
                bg="transparent"
                _hover={{ color: "yellow.400" }}
              />
            </Flex>
          </Box>
        </SimpleGrid>

        <Divider my={8} borderColor="gray.600" />

        {/* Bottom Section */}
        <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
          <Text fontSize="sm">
            © {new Date().getFullYear()} FinancePro Inc. All Rights Reserved.
          </Text>
          <Stack direction="row" spacing={4} mt={{ base: 4, md: 0 }}>
            <Link href="#" fontSize="sm" _hover={{ color: "yellow.400" }}>
              Privacy Policy
            </Link>
            <Link href="#" fontSize="sm" _hover={{ color: "yellow.400" }}>
              Terms of Service
            </Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
