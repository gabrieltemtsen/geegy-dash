import { Avatar, Box, Button, Flex, HStack, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowDownIcon, bellIcon, calenderIcon, searchIcon } from './Icons'

const HeaderNav = () => {
  return (
    <Flex pl={2} flexDirection={'column'} background={'#FAFAFA'} justify={'flex-end'} py={'18px'} borderBottom={'1px'} borderBottomColor={'#E5EAEF;'}>
        <HStack display={'flex'} justifyContent={'space-between'} alignItems={'center'}>

            <Text fontSize={'20px'} fontWeight={'600'} lineHeight={'28px'}>Dashboard </Text>  

            <Box display={'flex'} w={'29rem'} pl={9} justifyContent={'flex-start'}>
                <Input    h={'48px'} pl={'10px'} alignItems={'center'} gap={'1px'} borderRadius={'24px'} border={'1px solid #DADDDD'} background={'white'} placeholder={`Search...`}  />
            </Box> 

            <HStack ml={19}  display={'flex'} alignItems={'center'} gap={'20px'} >

            <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'} gap={'20px'}>
                {calenderIcon}
                <Text fontSize={'14px'} fontWeight={'500'} lineHeight={'22px'}>November 15, 2023</Text>
                <Flex borderRadius={'27px'} border={'0.77px solid #DADDDD'} w={'40px'} h={'40px'} alignItems={'center'} justifyContent={'center'} gap={'6px'}>
                    {bellIcon}
                </Flex>
            </Box>
            <Box display={'flex'} mr={'60px'} p={'3px 9px 0px '} justifyContent={'center'} alignItems={'center'} gap={'12px'} borderRadius={'28px'} border={'1px solid #DADDDD'}>
            <Avatar size={'sm'} src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Flex flexDirection={'column'} gap={'4px'} alignItems={'flex-end'}>
                <Text fontSize={'16px'} fontWeight={400}>Justin Bergson</Text>
                <Text fontSize={'14px'} fontWeight={300}>justin@gmail.com</Text>
            </Flex>
            <Button background={'transparent'} w={'20px'} h={'20px'}>
                {ArrowDownIcon}
            </Button>

            </Box>

        </HStack>         
        </HStack>
        
    </Flex>
  )
}

export default HeaderNav