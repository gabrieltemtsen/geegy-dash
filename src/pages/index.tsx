import HeaderNav from "@/components/HeaderNav";
import Sidebar from "@/components/Sidebar";
import { HStack, Text, Box, Select, Heading } from "@chakra-ui/react";
import DashboardLayout from "./layout";
import SalesTrend from "@/components/SalesTrend";


export default function Home() {
  return (

    <main >

  <DashboardLayout>

    <SalesTrend />

    


  </DashboardLayout>
      
    </main>
    
  );
}
