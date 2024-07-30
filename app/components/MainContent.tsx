'use client'
import { useState } from 'react'
import { VStack, Heading, Box, Text } from '@chakra-ui/react'
import ChatComponent from './ChatComponent'
import PastReflections from './PastReflections'
import { Reflection } from '../types'

export default function MainContent() {
  const [reflections, setReflections] = useState<Reflection[]>([])

  const handleNewReflection = (newReflection: Reflection) => {
    setReflections(prevReflections => [newReflection, ...prevReflections])
  }

  return (
    <Box width="100%" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" py={8}>
      <VStack spacing={8} align="center" width="100%" maxWidth="1200px">
        <Heading as="h1" size="2xl" fontWeight="light">
          in<Text as="span" color="accent">Love</Text>
        </Heading>
        <Text fontSize="xl" color="text.subheading" textAlign="center">
          What's on your mind today?
        </Text>
        <ChatComponent onNewReflection={handleNewReflection} />
      </VStack>
      <PastReflections reflections={reflections} />
    </Box>
  )
}