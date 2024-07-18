'use client'

import { useEffect, useState } from 'react'
import {
  VStack,
  Heading,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react'

interface Reflection {
  id: number
  date: string
  content: string
}

export default function Sidebar() {
  const [reflections, setReflections] = useState<Reflection[]>([])

  useEffect(() => {
    setReflections([
      { id: 1, date: '2023-07-18', content: 'Embraced the beauty of silence today.' },
      { id: 2, date: '2023-07-17', content: 'Found peace in the simple act of breathing.' },
      { id: 3, date: '2023-07-16', content: 'Grateful for the small moments of joy.' },
    ])
  }, [])

  return (
    <Box width="300px" height="100vh" bg="white" p={6} overflowY="auto" borderRight="1px" borderColor="gray.200">
      <VStack align="stretch" spacing={6}>
        <Heading size="md" fontWeight="light">Past Reflections</Heading>
        <Divider />
        {reflections.map(reflection => (
          <Box key={reflection.id} p={4} bg="gray.50" borderRadius="md" boxShadow="sm" _hover={{ boxShadow: 'md' }} transition="all 0.2s">
            <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={2}>
              {reflection.date}
            </Text>
            <Text fontSize="sm" noOfLines={3}>
              {reflection.content}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}