
import HeaderNav from "@/components/HeaderNav";
import Sidebar from "@/components/Sidebar";
import { Flex, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function DashboardLayout({children}:{children:ReactNode}){
    return (
        <Flex h={'100dvh'} minH={'700px'} maxH={'830px'}>
  

        <Sidebar/>
        <Stack pl={1}  flex={1} gap={0} h={'full'}>
            <HeaderNav/>
            {children}
        </Stack>
            
                </Flex>
    )
}