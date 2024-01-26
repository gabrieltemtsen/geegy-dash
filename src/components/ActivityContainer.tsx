import { Heading, Box, Flex, HStack, Text, VStack, SimpleGrid,useColorMode } from '@chakra-ui/react';
import React from 'react';
import { bearishIcon, boxIcon, graphIcon, SideBarIcons } from './Icons';


const ActivityContainer = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <SimpleGrid color={colorMode === "light" ? "" : "gray.700"} maxW={'47rem'} mr={10} columns={2} spacingX='1px' spacingY='1px'>
             <Flex m={7} display={'inline-flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'14px'} border={'1px solid #EDF2F7'} background={'#FFF'}>
       
        <Flex flexDirection={'column'} alignItems={'flex-start'} gap={'10px'}>
        <HStack p={1} display={'flex'}  w={'237px'} justifyContent={'space-between'} alignItems={'center'}>
        {boxIcon}
            <Box w={'114px'} h={'32px'} flexShrink={0}>
        {graphIcon}
      </Box>
    </HStack>
    <Box p={2} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'5px'}>
      <Text fontSize={'18px'} fontWeight={500}>Total Order</Text>
      <Text fontSize={'24px'} fontWeight={600}>350</Text>
    </Box>
    <HStack display={'flex'} alignItems={'center'} gap={'10px'}>
      <Flex padding={'4px 8px'} gap={'4px'} alignItems={'center'} justify={'center'}>
        <Box w={'9px'} h={'5px'} flexShrink={0}>
          {bearishIcon}
        </Box>
        <Text fontFamily={'Plus Jakarta Sans'} fontSize={'12px'} fontWeight={500}>23.5%</Text>

        <Text fontWeight={400} fontSize={'14px'}>vs. previous month</Text>
      </Flex>

    </HStack>

        </Flex>

    

            </Flex>
            <Flex m={7} display={'inline-flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'14px'} border={'1px solid #EDF2F7'} background={'#FFF'}>
       
       <Flex flexDirection={'column'} alignItems={'flex-start'} gap={'10px'}>
       <HStack p={1} display={'flex'}  w={'237px'} justifyContent={'space-between'} alignItems={'center'}>
       {boxIcon}
           <Box w={'114px'} h={'32px'} flexShrink={0}>
       {graphIcon}
     </Box>
   </HStack>
   <Box p={2} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'5px'}>
     <Text fontSize={'18px'} fontWeight={500}>Total Order</Text>
     <Text fontSize={'24px'} fontWeight={600}>350</Text>
   </Box>
   <HStack display={'flex'} alignItems={'center'} gap={'10px'}>
     <Flex padding={'4px 8px'} gap={'4px'} alignItems={'center'} justify={'center'}>
       <Box w={'9px'} h={'5px'} flexShrink={0}>
         {bearishIcon}
       </Box>
       <Text fontFamily={'Plus Jakarta Sans'} fontSize={'12px'} fontWeight={500}>23.5%</Text>

       <Text fontWeight={400} fontSize={'14px'}>vs. previous month</Text>
     </Flex>

   </HStack>

       </Flex>

   

           </Flex>
           <Flex m={7} display={'inline-flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'14px'} border={'1px solid #EDF2F7'} background={'#FFF'}>
       
       <Flex flexDirection={'column'} alignItems={'flex-start'} gap={'10px'}>
       <HStack p={1} display={'flex'}  w={'237px'} justifyContent={'space-between'} alignItems={'center'}>
       {boxIcon}
           <Box w={'114px'} h={'32px'} flexShrink={0}>
       {graphIcon}
     </Box>
   </HStack>
   <Box p={2} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'5px'}>
     <Text fontSize={'18px'} fontWeight={500}>Total Order</Text>
     <Text fontSize={'24px'} fontWeight={600}>350</Text>
   </Box>
   <HStack display={'flex'} alignItems={'center'} gap={'10px'}>
     <Flex padding={'4px 8px'} gap={'4px'} alignItems={'center'} justify={'center'}>
       <Box w={'9px'} h={'5px'} flexShrink={0}>
         {bearishIcon}
       </Box>
       <Text fontFamily={'Plus Jakarta Sans'} fontSize={'12px'} fontWeight={500}>23.5%</Text>

       <Text fontWeight={400} fontSize={'14px'}>vs. previous month</Text>
     </Flex>

   </HStack>

       </Flex>

   

           </Flex>
           <Flex m={7} display={'inline-flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'14px'} border={'1px solid #EDF2F7'} background={'#FFF'}>
       
       <Flex flexDirection={'column'} alignItems={'flex-start'} gap={'10px'}>
       <HStack p={1} display={'flex'}  w={'237px'} justifyContent={'space-between'} alignItems={'center'}>
       {boxIcon}
           <Box w={'114px'} h={'32px'} flexShrink={0}>
       {graphIcon}
     </Box>
   </HStack>
   <Box p={2} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'5px'}>
     <Text fontSize={'18px'} fontWeight={500}>Total Order</Text>
     <Text fontSize={'24px'} fontWeight={600}>350</Text>
   </Box>
   <HStack display={'flex'} alignItems={'center'} gap={'10px'}>
     <Flex padding={'4px 8px'} gap={'4px'} alignItems={'center'} justify={'center'}>
       <Box w={'9px'} h={'5px'} flexShrink={0}>
         {bearishIcon}
       </Box>
       <Text fontFamily={'Plus Jakarta Sans'} fontSize={'12px'} fontWeight={500}>23.5%</Text>

       <Text fontWeight={400} fontSize={'14px'}>vs. previous month</Text>
     </Flex>

   </HStack>

       </Flex>

   

           </Flex>
        </SimpleGrid>
   

  

  
  )
}

export default ActivityContainer