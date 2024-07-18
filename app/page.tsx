'use client'

import { useState } from 'react'
import {
  Box,
  Flex,
  VStack,
  Heading,
  Textarea,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react'
import Sidebar from './components/Sidebar'

export default function Home() {
  const [reflection, setReflection] = useState('')
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted:', reflection)
    toast({
      title: 'Reflection saved.',
      description: "We've stored your thoughts for today.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setReflection('')
  }

  return (
    <Flex minHeight="100vh">
      <Sidebar />
      <Box flex={1} bg="gray.50" p={8}>
        <VStack spacing={8} align="center" maxWidth="600px" margin="auto">
          <Heading fontWeight="light">Daily Reflection</Heading>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack spacing={4} align="stretch">
              <Textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="What's on your mind today?"
                minHeight="200px"
                bg="white"
                borderColor="gray.200"
                _hover={{ borderColor: 'gray.300' }}
                _focus={{ borderColor: 'gray.400', boxShadow: 'outline' }}
              />
              <Text alignSelf="flex-end" fontSize="sm" color="gray.500">
                {reflection.length}/500
              </Text>
              <Button
                type="submit"
                colorScheme="blackAlpha"
                size="lg"
                width="full"
              >
                Save Reflection
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Flex>
  )
}