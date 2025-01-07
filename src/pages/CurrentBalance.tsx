import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import api from "../Utils/api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CurrentBalance: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    setLoading(true);

    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setError("No authentication token found");
        return;
      }

      const balanceResponse = await api.get("/account/balance", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const transactionsResponse = await api.get(
        "/account/recent-transactions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBalance(balanceResponse.data.balance);

      const sortedTransactions =
        transactionsResponse.data.recentTransactions.sort((a: any, b: any) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();

          if (dateA !== dateB) {
            return dateB - dateA;
          }

          return 0;
        });

      setTransactions(sortedTransactions);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [balance > 0 ? balance : 0, balance <= 0 ? Math.abs(balance) : 0],
        backgroundColor: ["#3B82F6", "#F97316"],
        hoverBackgroundColor: ["#2563EB", "#EA580C"],
        borderWidth: 2,
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box bg="gray.50" minH="100vh" p={6}>
      <Box bg="white" p={6} shadow="xl" rounded="lg" mb={8} maxW="100%">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={6}
        >
          <VStack spacing={8} flexBasis="60%" align="center">
            <Box w={{ base: "100%", md: "80%" }} h="300px">
              <Doughnut
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: true, position: "bottom" } },
                }}
              />
            </Box>
            <Flex gap={4} flexWrap="wrap">
              <Button colorScheme="blue" size="lg" onClick={fetchData}>
                Refresh
              </Button>{" "}
              {/* Refresh button */}
            </Flex>
          </VStack>

          <VStack spacing={6} align="flex-start" flexBasis="40%">
            <Heading size="lg" color="blue.400">
              Current Balance
            </Heading>
            <StatGroup>
              <Stat>
                <StatLabel fontSize="lg" color="gray.600">
                  Total Balance
                </StatLabel>
                <StatNumber fontSize="3xl" color="gray.800">
                  ${balance.toLocaleString()}
                </StatNumber>
              </Stat>
            </StatGroup>
          </VStack>
        </Flex>
      </Box>

      <Box bg="white" p={6} borderRadius="md" shadow="md">
        <Heading size="lg" mb={4} color="blue.400">
          Recent Transactions
        </Heading>
        <Box overflowY="auto" maxH="300px">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Description</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction, index) => (
                <Tr key={index}>
                  <Td>
                    {new Date(transaction.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      hour12: true,
                    })}
                  </Td>
                  <Td>{transaction.description}</Td>
                  <Td
                    color={transaction.amount >= 0 ? "blue.400" : "orange.400"}
                  >
                    ${transaction.amount.toLocaleString()}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentBalance;
