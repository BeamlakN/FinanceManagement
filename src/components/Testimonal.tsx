import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Circle, Container } from "@chakra-ui/react";

interface Testimonial {
  text: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Using this app has completely transformed the way I approach my finances. The insights and tools provided helped me save 20% more every month while staying on track with my goals.",
    author: "Alex Johnson",
    position: "Financial Analyst",
    company: "ABC Investments",
  },
  {
    text: "I never thought budgeting could be this easy! The expense tracker and automated reports give me complete clarity over my spending habits. Highly recommended for anyone serious about financial growth.",
    author: "Emily Carter",
    position: "Entrepreneur",
    company: "Carter Innovations",
  },
  {
    text: "The debt reduction planner is a lifesaver! Thanks to this app, I’ve managed to pay off my loans and am now confidently building my wealth.",
    author: "James Brown",
    position: "Software Engineer",
    company: "TechCorp",
  },
  {
    text: "This app makes financial planning stress-free. I’ve created a solid investment plan and gained peace of mind about my future. It’s a must-have for anyone managing their personal finances.",
    author: "Sarah Williams",
    position: "Small Business Owner",
    company: "Williams Ventures",
  },
];

const FinanceTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg="white" py={16} px={6} id="testimonals">
      <Container maxW="container.lg" textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" mb={8} color="blue.500">
          What Our Clients Say
        </Text>

        <Box
          bg="gray.50"
          shadow="xl"
          borderRadius="xl"
          p={10}
          maxW="800px"
          mx="auto"
          textAlign="left"
        >
          <Text
            fontSize="xl"
            fontStyle="italic"
            mb={6}
            color="gray.700"
            lineHeight="1.8"
          >
            "{testimonials[currentIndex].text}"
          </Text>
          <Box mt={6}>
            <Text fontSize="lg" fontWeight="bold" color="blue.900">
              {testimonials[currentIndex].author}
            </Text>
            <Text fontSize="md" color="gray.600">
              {testimonials[currentIndex].position},{" "}
              {testimonials[currentIndex].company}
            </Text>
          </Box>
        </Box>

        {/* Navigation Dots */}
        <Flex justify="center" mt={8} gap={3}>
          {testimonials.map((_, index) => (
            <Circle
              key={index}
              size="12px"
              bg={index === currentIndex ? "blue.500" : "gray.300"}
              cursor="pointer"
              onClick={() => setCurrentIndex(index)}
              transition="background-color 0.3s ease"
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default FinanceTestimonials;
