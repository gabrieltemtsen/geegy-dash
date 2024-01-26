import HeaderNav from "@/components/HeaderNav";
import Sidebar from "@/components/Sidebar";
import {
  HStack,
  Text,
  Box,
  Select,
  Heading,
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  TableContainer,
  WrapItem,
  Avatar,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import DashboardLayout from "./layout";
import SalesTrend from "@/components/SalesTrend";
import { bearishIcon, boxIcon, fileIcon, graphIcon } from "@/components/Icons";
import ActivityContainer from "@/components/ActivityContainer";
import Orders from "@/components/Orders";
import TopPlatforms from "@/components/TopPlatforms";

export default function Home() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <DashboardLayout>
        <Flex direction={isMobile ? "column" : "row"}>
          <Box flex={1} mb={isMobile ? 4 : 0}>
            <SalesTrend />
          </Box>
          <Box flex={1} ml={isMobile ? 0 : 4}>
            <ActivityContainer />
          </Box>
        </Flex>
        <Flex direction={isMobile ? "column" : "row"} mt={4}>
          <Box flex={1} mb={isMobile ? 4 : 0}>
            <Orders />
          </Box>
          <Box flex={1} ml={isMobile ? 0 : 4}>
            <Box>
              <TopPlatforms />
            </Box>
          </Box>
        </Flex>
      </DashboardLayout>
    </Box>
  );
}
