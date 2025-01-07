import { Button, Box, Text, Heading, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      id="home"
      as="section"
      position="relative"
      height={{ base: "100vh", md: "100vh" }}
      bgImage="url('src/assets/hero-bg.jpg')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
    >
      {/* Dark Overlay for readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />

      {/* Content Container */}
      <HStack
        spacing={8}
        zIndex={2}
        color="white"
        width="100%"
        justifyContent={{ base: "center", md: "flex-end" }}
        pr={{ base: 6, md: 16 }}
      >
        {/* Text Content */}
        <VStack
          alignItems={{ base: "center", md: "flex-start" }}
          spacing={4}
          textAlign={{ base: "center", md: "left" }}
          maxWidth="600px"
          position="relative"
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            textTransform="uppercase"
            color="blue.300"
          >
            Empower Your Finances
          </Text>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="short"
          >
            Manage Your Wealth With Confidence
          </Heading>
          <Text fontSize="lg" color="gray.300">
            Unlock the tools and insights you need to take control of your
            financial future. Track spending, invest smarter, and achieve your
            financial goals with ease.
          </Text>
          <HStack spacing={4}>
            <Button
              size="lg"
              colorScheme="blue"
              variant="solid"
              onClick={() => console.log("Learn More Clicked")}
            >
              Learn More
            </Button>
            <Button
              size="lg"
              colorScheme="orange"
              variant="solid"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          </HStack>

          {/* Vertical Line Positioned Dynamically */}
          <Box
            position="absolute"
            left="-40px"
            top={0}
            height="100%"
            width="4px"
            bg="blue.400"
            borderRadius="full"
          />
        </VStack>
      </HStack>
    </Box>
  );
};

export default HeroSection;
