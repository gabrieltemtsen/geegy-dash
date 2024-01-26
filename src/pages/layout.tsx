import HeaderNav from "@/components/HeaderNav";
import Sidebar from "@/components/Sidebar";
import { Box, Flex, Stack, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      minH={"100vh"}
      minW={"100vw"}
    >
      <Sidebar />
      <Stack pl={1} flex={1} gap={0} h={"full"}>
        <HeaderNav />
        <Box
          w={"100%"}
          h={"100%"}
          bg={colorMode === "light" ? "gray.100" : "gray.700"}
        >
          {children}
        </Box>
      </Stack>
    </Flex>
  );
}
