import {
  HStack,
  Box,
  Text,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  WrapItem,
  Table,
  Avatar,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { fileIcon } from "./Icons";

const ordersData = [
  {
    name: "David Herbert",
    date: "Jan 10, 2024",
    amount: "$2,000",
    status: "Paid",
    invoice: "view",
  },
  {
    name: "Gabriel Temtsen",
    date: "Jan 28, 2024",
    amount: "$250",
    status: "Pending",
    invoice: "view",
  },
  {
    name: "Mike Jerry",
    date: "July 20, 2023",
    amount: "$100",
    status: "Paid",
    invoice: "view",
  },
  {
    name: "Micheal James",
    date: "July 20, 2023",
    amount: "$30",
    status: "Paid",
    invoice: "view",
  },
  {
    name: "Usman Aisha",
    date: "June 15, 2023",
    amount: "$15",
    status: "Refund",
    invoice: "view",
  },
];

const Orders: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      color={colorMode === "light" ? "" : "gray.700"}
      p={3}
      m={7}
      w={"806px"}
      h={"auto"}
      flexShrink={0}
      borderRadius={"14px"}
      border={"1px solid white"}
      background={"white"}
    >
      <HStack
        display={"flex"}
        w={"766px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize={"18px"} fontWeight={600}>
          Top Users
        </Text>

        <Text
          color={"#34CAA5"}
          textAlign={"center"}
          fontWeight={500}
          fontSize={"18px"}
        >
          See all
        </Text>
      </HStack>

      <Table size={"md"}>
        <Thead
          fontFamily={"Plus Jakarta Sans"}
          fontSize={"16px"}
          fontWeight={500}
          lineHeight={"24px"}
        >
          <Tr>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Invoice</Th>
          </Tr>
        </Thead>
        <Tbody p={7} mb={2}>
          {ordersData.map((order) => (
            <>
              <Tr>
                <Td p={2}>
                  <WrapItem>
                    <Avatar
                      size="2xs"
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                    <Text fontWeight={500} fontSize={"16px"} ml={2}>
                      {order.name}
                    </Text>
                  </WrapItem>
                </Td>
                <Td>{order.date}</Td>
                <Td fontWeight={500} fontSize={"16px"}>
                  {order.amount}{" "}
                </Td>
                <Td
                  fontSize={"16px"}
                  fontWeight={400}
                  color={
                    order.status === "Paid"
                      ? "#34CAA5"
                      : "red" && order.status === "Pending"
                        ? "yellow.600"
                        : "red"
                  }
                >
                  {order.status}{" "}
                </Td>
                <Td fontWeight={400} fontSize={"16px"}>
                  <Button
                    color={colorMode === "light" ? "" : "blue.800"}
                    backgroundColor={colorMode === "light" ? "" : "transparent"}
                    gap={"6px"}
                  >
                    <Box w={"16px"} height={"16px"}>
                      {fileIcon}
                    </Box>
                    view
                  </Button>
                </Td>
              </Tr>
            </>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Orders;
