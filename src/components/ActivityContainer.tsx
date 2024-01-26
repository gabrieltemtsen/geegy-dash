import {
  Heading,
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { bearishIcon, boxIcon, graphDownIcon, graphIcon, SideBarIcons } from "./Icons";

const ActivityContainer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SimpleGrid
      color={colorMode === "light" ? "" : "gray.700"}
      maxW={{ base: "100%", md: "47rem" }} // Adjust the max width based on breakpoints
      mx={{ base: 0, md: 10 }} // Adjust the horizontal margin based on breakpoints
      columns={{ base: 1, md: 2 }} // Adjust the number of columns based on breakpoints
      spacingX="1px"
      spacingY="1px"
    >
      <Flex
        m={7}
        display={"inline-flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"14px"}
        border={"1px solid #EDF2F7"}
        background={"#FFF"}
      >
        <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"10px"}>
          <HStack
            p={1}
            display={"flex"}
            w={{ base: "100%", md: "237px" }} // Adjust the width based on breakpoints
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {boxIcon}
            <Box w={"114px"} h={"32px"} flexShrink={0}>
              {graphIcon}
            </Box>
          </HStack>
          <Box
            p={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"5px"}
          >
            <Text fontSize={"18px"} fontWeight={500}>
              New Users
            </Text>
            <Text fontSize={"24px"} fontWeight={600}>
              350
            </Text>
          </Box>
          <HStack display={"flex"} alignItems={"center"} gap={"10px"}>
            <Flex
              padding={"4px 8px"}
              gap={"4px"}
              alignItems={"center"}
              justify={"center"}
            >
              <Box w={"39px"} h={"23px"} flexShrink={0}>
                {bearishIcon}
              </Box>
              <Text
            as={"span"}
            fontWeight={"medium"}
            lineHeight={"16px"}
            fontSize={"12px"}
            color={"appGreen"}
          >
            23,5%
          </Text>

              <Text fontWeight={400} fontSize={"14px"}>
                vs. previous month
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
      <Flex
        m={7}
        display={"inline-flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"14px"}
        border={"1px solid #EDF2F7"}
        background={"#FFF"}
      >
        <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"10px"}>
          <HStack
            p={1}
            display={"flex"}
            w={{ base: "100%", md: "237px" }} // Adjust the width based on breakpoints
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {boxIcon}
            <Box w={"114px"} h={"32px"} flexShrink={0}>
              {graphDownIcon}
            </Box>
          </HStack>
          <Box
            p={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"5px"}
          >
            <Text fontSize={"18px"} fontWeight={500}>
              Total Converted (NGN)
            </Text>
            <Text fontSize={"24px"} fontWeight={600}>
              10,950,000
            </Text>
          </Box>
          <HStack display={"flex"} alignItems={"center"} gap={"10px"}>
            <Flex
              padding={"4px 8px"}
              gap={"4px"}
              alignItems={"center"}
              justify={"center"}
            >
              <Box w={"39px"} h={"23px"} flexShrink={0}>
                {bearishIcon}
              </Box>
              <Text
                fontFamily={"Plus Jakarta Sans"}
                fontSize={"12px"}
                fontWeight={500}
              >
                23.5%
              </Text>

              <Text fontWeight={400} fontSize={"14px"}>
                vs. previous month
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
      <Flex
        m={7}
        display={"inline-flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"14px"}
        border={"1px solid #EDF2F7"}
        background={"#FFF"}
      >
        <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"10px"}>
          <HStack
            p={1}
            display={"flex"}
            w={"237px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {boxIcon}
            <Box w={"114px"} h={"32px"} flexShrink={0}>
              {graphDownIcon}
            </Box>
          </HStack>
          <Box
            p={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"5px"}
          >
            <Text fontSize={"18px"} fontWeight={500}>
              Average Fees charged
            </Text>
            <Text fontSize={"24px"} fontWeight={600}>
              $89,000
            </Text>
          </Box>
          <HStack display={"flex"} alignItems={"center"} gap={"10px"}>
            <Flex
              padding={"4px 8px"}
              gap={"4px"}
              alignItems={"center"}
              justify={"center"}
            >
             <Box w={"39px"} h={"23px"} flexShrink={0}>
                {bearishIcon}
              </Box>
              <Text
                fontFamily={"Plus Jakarta Sans"}
                fontSize={"12px"}
                fontWeight={500}
              >
                23.5%
              </Text>

              <Text fontWeight={400} fontSize={"14px"}>
                vs. previous month
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
      <Flex
        m={7}
        display={"inline-flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"14px"}
        border={"1px solid #EDF2F7"}
        background={"#FFF"}
      >
        <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"10px"}>
          <HStack
            p={1}
            display={"flex"}
            w={"237px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {boxIcon}
            <Box w={"114px"} h={"32px"} flexShrink={0}>
              {graphIcon}
            </Box>
          </HStack>
          <Box
            p={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"5px"}
          >
            <Text fontSize={"18px"} fontWeight={500}>
              Total Recieved (USD)
            </Text>
            <Text fontSize={"24px"} fontWeight={600}>
              $2,000,400
            </Text>
          </Box>
          <HStack display={"flex"} alignItems={"center"} gap={"10px"}>
            <Flex
              padding={"4px 8px"}
              gap={"4px"}
              alignItems={"center"}
              justify={"center"}
            >
             <Box w={"39px"} h={"23px"} flexShrink={0}>
                {bearishIcon}
              </Box>
              <Text
                fontFamily={"Plus Jakarta Sans"}
                fontSize={"12px"}
                fontWeight={500}
              >
                23.5%
              </Text>

              <Text fontWeight={400} fontSize={"14px"}>
                vs. previous month
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export default ActivityContainer;
