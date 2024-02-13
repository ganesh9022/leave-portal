import React from 'react'
import {Flex,Grid,Avatar,Box,Text,Inset,Strong} from '@radix-ui/themes'

const Leavebalance = () => {
  return (
    <div>
    <Grid align="center" columns="1" gap="5" p="3">
  <Flex direction="column">
  <img
      size="3"
      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
      radius="full"
    width="10"
    height='10'
 />
    <Text size="3" weight="bold">
      Get started
    </Text>
    <Text color="gray" size="2">
      Start your next project in minutes
    </Text>
  </Flex>

  <Flex direction="column">
    <Flex gap="3" align="center">
    <img
      size="5"
      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
      radius="full"
    width="10"
    height='1'
 />      <Box>
        <Text as="div" size="2" weight="bold">
          Teodros Girmay
        </Text>
        
      </Box>
    </Flex>
   
  </Flex>



</Grid>
    </div>
  )
}

export default Leavebalance
