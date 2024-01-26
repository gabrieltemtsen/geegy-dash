import { Box, Flex, HStack, Select, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { lineIcon } from './Icons';

const SalesTrend = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
        <Box color={colorMode === "light" ? "black" : "black"} m={7} w={'806px'} height={'374px'} flexShrink={0} borderRadius={'14px'} border={'1px solid #EDF2F7'} background={'#FFF'}>
            <Flex p={3} w={'766px'} justifyContent={'space-between'} alignItems={'center'} >
                <Text  fontWeight={600} fontSize={'18px'} >Sales Trends</Text>
                <HStack display={'flex'} alignItems={'center'}>
                <Text w={'85px'} fontSize={'14px'} fontWeight={500}>Sort By: </Text>
                <Select display={'flex'} p={''} alignItems={'center'} border={'1px solid grey'} gap={'10px'} borderRadius={'20px'}>
                    <option value="weekly"> weekly</option>
                    <option value="monthly">monthly</option>
                </Select>
            </HStack>
            </Flex>

            <Box ml={2} className='scale-numbers'>
                <Text fontSize={'12px'} fontWeight={600}>50, 000</Text>
                <Text fontSize={'12px'} fontWeight={600}>40, 000</Text>
                <Text fontSize={'12px'} fontWeight={600}>30, 000</Text>
                <Text fontSize={'12px'} fontWeight={600}>20, 000</Text>
                <Text fontSize={'12px'} fontWeight={600}>10, 000</Text>
                <Text fontSize={'12px'} fontWeight={600}>5, 000</Text>
                <Text fontSize={'12px'} fontWeight={600}>0</Text>
                
            </Box>

           
                <Box>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    <span className='scale-lines'> {lineIcon}</span>
                    
                <span className='scale-bar '></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>
                <span className='scale-bar'></span>

                
            </Box>

            <Box className='scale-month'>

                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Jan</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Feb</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Mar</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Apr</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>May</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Jun</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Jul</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Aug</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Sep</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Oct</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Nov</Text>
                <Text fontWeight={600} fontSize={'14px'} lineHeight={'22px'}>Dec</Text>









            </Box>

            
        </Box>    
  )
}

export default SalesTrend