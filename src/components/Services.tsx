import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Icon,
  HStack,
} from "@chakra-ui/react";
import {
  FaChartLine,
  FaPiggyBank,
  FaShieldAlt,
  FaWallet,
  FaUsers,
} from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <Box
      as="section"
      bg="white"
      py={{ base: 10, md: 20 }}
      px={{ base: 6, md: 16 }}
      id="services"
    >
      {/* Section Heading */}
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} color="blue.400">
          Why Choose Us
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Simplify your financial management with tools and insights designed to
          make your money work for you.
        </Text>
      </VStack>

      {/* Top Row (3 Cards) */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={10}>
        {services.slice(0, 3).map((service, index) => (
          <VStack
            key={index}
            bg="white"
            shadow="md"
            rounded="lg"
            p={6}
            align="start"
            transition="transform 0.2s ease"
            _hover={{ transform: "scale(1.05)" }}
            width="100%"
          >
            <HStack>
              <Box bg="blue.100" p={3} rounded="full">
                <Icon as={service.icon} boxSize={6} color="blue.500" />
              </Box>
              <Heading fontSize="xl" color="gray.800">
                {service.title}
              </Heading>
            </HStack>
            <Text color="gray.600" mt={4}>
              {service.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>

      {/* Bottom Row (2 Cards Centered) */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        justifyContent="center"
        maxW="800px"
        mx="auto"
      >
        {services.slice(3).map((service, index) => (
          <VStack
            key={index}
            bg="white"
            shadow="md"
            rounded="lg"
            p={6}
            align="start"
            transition="transform 0.2s ease"
            _hover={{ transform: "scale(1.05)" }}
            width="100%"
          >
            <HStack>
              <Box bg="blue.100" p={3} rounded="full">
                <Icon as={service.icon} boxSize={6} color="blue.500" />
              </Box>
              <Heading fontSize="xl" color="gray.800">
                {service.title}
              </Heading>
            </HStack>
            <Text color="gray.600" mt={4}>
              {service.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;

const services = [
  {
    title: "Smart Budgeting",
    description:
      "Track your income and expenses with ease to ensure you always stay within your financial goals.",
    icon: FaPiggyBank,
  },
  {
    title: "Secure Transactions",
    description:
      "Your data and transactions are protected with industry-leading security protocols.",
    icon: FaShieldAlt,
  },
  {
    title: "Investment Insights",
    description:
      "Get personalized advice to make smarter investment decisions and grow your wealth.",
    icon: FaChartLine,
  },
  {
    title: "Expense Tracking",
    description:
      "Monitor your spending habits and identify opportunities to save money effectively.",
    icon: FaWallet,
  },
  {
    title: "Collaborative Tools",
    description:
      "Work with financial experts or share your progress with family members for better planning.",
    icon: FaUsers,
  },
];
