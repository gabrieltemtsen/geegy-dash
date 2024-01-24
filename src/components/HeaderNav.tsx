import { Avatar, Box, Button, Flex, HStack, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { bellIcon, calenderIcon, searchIcon } from './Icons'

const HeaderNav = () => {
  return (
    <Flex pl={2} flexDirection={'column'} background={'#FAFAFA'} justify={'flex-end'} py={'18px'} borderBottom={'1px'} borderBottomColor={'#E5EAEF;'}>
        <HStack display={'flex'} justifyContent={'space-between'} alignItems={'center'}>

            <Text fontSize={'20px'} fontWeight={'600'} lineHeight={'28px'}>Dashboard </Text>  

            <Flex alignContent={'center'}>
                
                <Input h={'48px'} pl={'16px'} alignItems={'center'} gap={'1px'} borderRadius={'24px'} border={'1px solid #DADDDD'} background={'white'} placeholder={`Search...`}  />
            </Flex> 

            <HStack display={'flex'} alignItems={'center'} gap={'20px'} >

            <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'} gap={'20px'}>
                {calenderIcon}
                <Text fontSize={'14px'} fontWeight={'500'} lineHeight={'22px'}>November 15, 2023</Text>
                <Flex borderRadius={'27px'} border={'0.77px solid white'} w={'40px'} h={'40px'} alignItems={'center'} justifyContent={'center'} gap={'6px'}>
                    {bellIcon}
                </Flex>

            </Box>

        </HStack>         
            {/* <Avatar size={'sm'} src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
        </HStack>
        
    </Flex>
  )
}

export default HeaderNav