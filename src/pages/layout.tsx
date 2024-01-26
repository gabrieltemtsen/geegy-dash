import HeaderNav from "@/components/HeaderNav";
import Sidebar from "@/components/Sidebar";
import { Box, Flex, Stack, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex h={"100dvh"} minH={"700px"} maxH={"830px"}>
      <Sidebar />
      <Stack pl={1} flex={1} gap={0} h={"full"}>
        <HeaderNav />
        <Box
          w={"100vw"}
          h={"100vw"}
          bg={colorMode === "light" ? "gray.100" : "gray.700"}
        >
          {children}
        </Box>
      </Stack>
    </Flex>
  );
}
