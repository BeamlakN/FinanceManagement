import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import api from "../Utils/api";
import CurrentBalance from "./CurrentBalance";

const DashBoard: React.FC = () => {
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [transactionType, setTransactionType] = useState<"income" | "expense">(
    "income"
  );
  const [transactionDate, setTransactionDate] = useState(
    () => new Date().toISOString().split("T")[0]
  );
  const navigate = useNavigate();
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await api.get("/account/balance", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setBalance(response.data.balance);
      } catch (error: any) {
        console.error("Error fetching balance:", error);
        alert("Failed to fetch balance.");
      }
    };

    fetchBalance();
  }, []);

  const handleSaveTransaction = async () => {
    try {
      const formattedDate = new Date(transactionDate)
        .toISOString()
        .split("T")[0];

      if (formattedDate !== new Date().toISOString().split("T")[0]) {
        alert("Transaction date must be today.");
        return;
      }

      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }

      if (transactionType === "expense" && parsedAmount > balance) {
        alert("Insufficient balance for this expense.");
        return;
      }

      const response = await api.post(
        "/account/transaction",
        {
          amount: parsedAmount,
          description,
          transactionType,
          date: formattedDate,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      alert("Transaction saved successfully!");
      closeModal();
      setBalance(response.data.balance);
    } catch (error: any) {
      console.error("Error:", error.response?.data);
      alert(`Error: ${error.response?.data.message || error.message}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <Box bg="gray.50" minH="100vh">
      <Flex
        as="header"
        bg="blue.700"
        color="white"
        p={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="lg">Financial Dashboard</Heading>
        <HStack spacing={6}>
          <Button onClick={openModal} colorScheme="blue">
            Add Transaction
          </Button>
          <Button
            leftIcon={<FaSignOutAlt />}
            colorScheme="orange"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </HStack>
      </Flex>

      <Box as="main" p={6}>
        <Routes>
          <Route path="/" element={<CurrentBalance />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Box>

      {/* Transaction Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="blue.400">Add a New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Transaction details"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Transaction Type</FormLabel>
              <Select
                value={transactionType}
                onChange={(e) =>
                  setTransactionType(e.target.value as "income" | "expense")
                }
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </Select>
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveTransaction}>
              Save
            </Button>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DashBoard;
