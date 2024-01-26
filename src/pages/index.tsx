import HeaderNav from "@/components/HeaderNav";
import Sidebar from "@/components/Sidebar";
import { HStack, Text, Box, Select, Heading, Flex, Table, Thead, Tr, Th, Tbody, TableContainer, WrapItem, Avatar, Td } from "@chakra-ui/react";
import DashboardLayout from "./layout";
import SalesTrend from "@/components/SalesTrend";
import { bearishIcon, boxIcon, fileIcon, graphIcon } from "@/components/Icons";
import ActivityContainer from "@/components/ActivityContainer";
import Orders from "@/components/Orders";

export default function Home() {
  return (
    <Box>
      <DashboardLayout>
        <Flex>
          <Box flex={1}>
            <SalesTrend />
          </Box>
          <Box flex={1} ml={4}>
            <ActivityContainer />
          </Box>
        </Flex>
        <Flex mt={4}>
          <Box flex={1}>
            <Orders />
          </Box>
          <Box flex={1} ml={4}>
            <Box>
              <Heading size="md">Top Platforms</Heading>
              {/* Add your platform list component here */}
            </Box>
          </Box>
        </Flex>
      </DashboardLayout>
    </Box>
  );
}
      
  