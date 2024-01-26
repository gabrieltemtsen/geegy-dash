import { HStack, Box, Text, TableContainer, Thead, Tr, Th, Tbody, Td, WrapItem,  Table, Avatar} from '@chakra-ui/react';
import React from 'react';
import { fileIcon } from './Icons';

const Orders: React.FC = () => {
    return (
        <Box p={3} m={7}  w={'806px'} h={'422px'} flexShrink={0} borderRadius={'14px'} border={'1px solid white'} background={'white'}>
        <HStack  display={'flex'} w={'766px'} justifyContent={'space-between'} alignItems={'center'}>
          <Text fontSize={'18px'} fontWeight={600}>Last Orders</Text>
  
          <Text color={'#34CAA5'} textAlign={'center'} fontWeight={500} fontSize={'18px'}>See all</Text>
  
        </HStack>
  
        <TableContainer>
        <Table >
          <Thead fontFamily={'Plus Jakarta Sans'} fontSize={'16px'} fontWeight={500} lineHeight={'24px'}>
            <Tr >
              <Th >Name</Th>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Invoice</Th>
            </Tr>
          </Thead>
          <Tbody  >
            <Tr>
              <Td p={2} >
              <WrapItem  >
              <Avatar size='2xs' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
              <Text fontWeight={500} fontSize={'16px'} ml={2}>John Doe</Text>
            </WrapItem>
              </Td>
              <Td>May 10, 2023</Td>
              <Td fontWeight={500} fontSize={'16px'}>$200</Td>
              <Td fontSize={'16px'} fontWeight={400} color={'#34CAA5'}>Paid</Td>
              <Td fontWeight={400} fontSize={'16px'}>
                <WrapItem gap={'6px'}>
                <Box w={'16px'} height={'16px'}>
                {fileIcon}
                </Box>
                view
  
                </WrapItem>
                </Td>
            </Tr>
           
            
          </Tbody>
        </Table>
          
        </TableContainer>
  
        
  
      </Box>
    );
};

export default Orders;
