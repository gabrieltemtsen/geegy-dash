import {
  Box,
  Flex,
  HStack,
  Progress,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const TopPlatforms = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      ml={7}
      maxW={"47rem"}
      color={colorMode === "light" ? "" : "gray.700"}
      display={"inline-flex"}
      p={"16px 16px 32px 20px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"20px"}
      borderRadius={"8px"}
      background={"white"}
    >
      <HStack
        maxW={"41.5rem"}
        display={"flex"}
        w={"766px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize={"18px"} fontWeight={600}>
          Last Orders
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

      <Flex
        p={2}
        w={"452px"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"20px"}
      >
        <Box mt={"2px"}>
          <Text fontSize={"18px"} fontWeight={600}>
            Book Bazar
          </Text>
          <Progress
            borderRadius={"40px"}
            background={"white"}
            h={"12px"}
            w={"452px"}
            value={80}
          />

          <HStack
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"15px"} fontWeight={400}>
              $2,500,000
            </Text>
            <Text fontSize={"15px"} fontWeight={400}>
              +15%
            </Text>
          </HStack>
        </Box>
        <Box mt={"5px"}>
          <Text fontSize={"18px"} fontWeight={600}>
            Artisan Aisle
          </Text>
          <Progress
            colorScheme="green"
            borderRadius={"40px"}
            background={"white"}
            h={"12px"}
            w={"452px"}
            value={30}
          />
          <HStack
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"15px"} fontWeight={400}>
              $2,500,000
            </Text>
            <Text fontSize={"15px"} fontWeight={400}>
              +15%
            </Text>
          </HStack>
        </Box>
        <Box mt={"5px"}>
          <Text fontSize={"18px"} fontWeight={600}>
            Toy Troop
          </Text>
          <Progress
            colorScheme="yellow"
            borderRadius={"40px"}
            background={"white"}
            h={"12px"}
            w={"452px"}
            value={20}
          />
          <HStack
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"15px"} fontWeight={400}>
              $2,500,000
            </Text>
            <Text fontSize={"15px"} fontWeight={400}>
              +15%
            </Text>
          </HStack>
        </Box>
        <Box mt={"5px"}>
          <Text fontSize={"18px"} fontWeight={600}>
            X store
          </Text>
          <Progress
            colorScheme="purple"
            borderRadius={"40px"}
            background={"white"}
            h={"12px"}
            w={"452px"}
            value={20}
          />
          <HStack
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"15px"} fontWeight={400}>
              $2,500,000
            </Text>
            <Text fontSize={"15px"} fontWeight={400}>
              +15%
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopPlatforms;
