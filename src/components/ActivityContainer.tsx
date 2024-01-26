import { Heading, Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { bearishIcon, boxIcon, graphIcon } from './Icons';


const ActivityContainer = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} borderRadius={'14px'} border={'1px solid #EDF2F7'} background={'#FFF'}>
        <HStack display={'flex'} w={'207px'} justifyContent={'space-between'} alignItems={'center'}>
            <Box w={'40px'} h={'40px'} flexShrink={0}>
                {boxIcon}
            </Box>
            <Box w={'184px'} h={'32px'} flexShrink={0}>
        {graphIcon}
      </Box>
    </HStack>
    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'5px'}>
      <Heading fontSize={'18px'} fontWeight={600}>Total Order</Heading>
      <Text fontSize={'14px'} fontWeight={500}>350</Text>
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
  )
}

export default ActivityContainer