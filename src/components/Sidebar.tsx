import {
  Flex,
  Box,
  Wrap,
  WrapItem,
  Link,
  VStack,
  Image,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  SideBarIcons,
  LightIcon,
  darkIcon,
  ArrowIcon,
  logoutIcon,
  settingsIcon,
  focusIcon,
} from "./Icons";
const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [clicked, setClicked] = useState(false);

  const switchButtons = () => {
    if (clicked === false) {
      setClicked(true);
      toggleColorMode();
    } else {
      setClicked(false);
      toggleColorMode();
    }
  };

  useEffect(() => {});
  return (
    <Flex
      h={"100vh"}
      w={"80px"}
      p={"20px 0px"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"10px"}
      flexShrink={0}
      borderRight={"1px solid #EBECF2"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"256px"}
        alignSelf={"stretch"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"20px"}
          alignSelf={"stretch"}
        >
          <Link href="/" w={"40px"} h={"40px"} fill={"#34ACAA5"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z"
                fill="#34CAA5"
              />
            </svg>
          </Link>

          <VStack
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"10px"}
            alignSelf={"stretch"}
          >
            {SideBarIcons.map((icon) => (
              <>
                <Flex
                  key={icon.id}
                  alignItems={"center"}
                  h={"40px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                  alignSelf={"stretch"}
                >
                  <Link m={5} w={"24px"} h={"24px"} flexShrink={0}>
                    {icon.svg}
                  </Link>
                </Flex>
              </>
            ))}

            <Flex
              w={"80px"}
              p={"0px 10px"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={10}
            >
              <VStack>
                {clicked ? (
                  <>
                    <Button
                      onClick={switchButtons}
                      display={"flex"}
                      p={"6.5px 7.5px"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      borderRadius={"94px"}
                      background={"#34CAA5"}
                      w={"30px"}
                      h={"40px"}
                    >
                      {LightIcon}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={switchButtons}
                      display={"flex"}
                      p={"6.5px 7.5px"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      borderRadius={"94px"}
                      background={""}
                      w={"30px"}
                      h={"40px"}
                    >
                      {darkIcon}
                    </Button>
                  </>
                )}
                {/* <Button onClick={toggleColorMode} display={'flex'} p={'6.5px 7.5px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} borderRadius={'94px'} background={'#34CAA5'} w={'30px'} h={'40px'}>
                            {LightIcon}
                        </Button>

                        <Button display={'flex'} p={'6.5px 7.5px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} borderRadius={'94px'} background={''} w={'30px'} h={'40px'}>
                            {darkIcon}
                        </Button> */}
              </VStack>
            </Flex>
          </VStack>

          <VStack
            display={"flex"}
            w={"40"}
            h={"40"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={10}
            mt={"19rem"}
          >
            <Link>{ArrowIcon}</Link>
            <Link>{settingsIcon}</Link>

            <Button>{logoutIcon}</Button>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Sidebar;
