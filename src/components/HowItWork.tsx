import {
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  Icon,
  List,
  ListItem,
  ListIcon,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const ProcessSection: React.FC = () => {
  const processes = [
    {
      title: "Step 1: Sign Up for Free",
      description:
        "Create a free account in just a few minutes. Our secure platform ensures your information stays private.",
      image: "src/assets/signup.webp",
      points: [
        "Quick and easy registration.",
        "No hidden fees or charges.",
        "100% secure and private.",
      ],
    },
    {
      title: "Step 2: Connect Your Bank Accounts",
      description:
        "Securely link your bank accounts to get real-time insights and track your finances effortlessly.",
      image: "src/assets/connect account.jpg",
      points: [
        "Encrypted connections for safety.",
        "Support for multiple accounts.",
        "Real-time financial updates.",
      ],
    },
    {
      title: "Step 3: Get Financial Insights",
      description:
        "Our advanced tools provide actionable insights and personalized recommendations tailored to your goals.",
      image: "src/assets/finance-analysis.webp",
      points: [
        "Visualize your spending trends.",
        "Set and achieve financial goals.",
        "Expert recommendations at your fingertips.",
      ],
    },
  ];

  return (
    <Box
      as="section"
      bg="gray.50"
      py={{ base: 10, md: 20 }}
      px={{ base: 6, md: 16 }}
      id="how-it-works"
    >
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "3xl" }}
        textAlign="center"
        color="blue.400"
        mb={12}
      >
        How It Works
      </Heading>

      <VStack spacing={12}>
        {processes.map((process, index) => (
          <Flex
            key={index}
            direction={{
              base: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
            align="center"
            gap={{ base: 8, md: 16 }}
            mt={{ base: 10, md: 16 }}
          >
            {/* Image */}
            <Box flex="1" display="flex" justifyContent="center">
              <Image
                src={process.image}
                alt={process.title}
                rounded="lg"
                shadow="md"
                maxW={{ base: "300px", md: "350px" }}
                maxH={{ base: "200px", md: "250px" }}
              />
            </Box>

            {/* Content */}
            <Box flex="1">
              <Text fontSize="lg" color="blue.500" fontWeight="bold" mb={2}>
                {process.title}
              </Text>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                mb={4}
                color="gray.800"
              >
                {process.title}
              </Heading>
              <Text fontSize="md" color="gray.600" mb={6}>
                {process.description}
              </Text>

              <List spacing={4}>
                {process.points.map((point, idx) => (
                  <ListItem key={idx}>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    {point}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default ProcessSection;
