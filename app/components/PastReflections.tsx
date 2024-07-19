'use client'
import { Box, VStack, Text, IconButton, useDisclosure } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Reflection } from '../types'

interface PastReflectionsProps {
  reflections: Reflection[];
}


export default function PastReflections({ reflections }) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <IconButton
        aria-label="Toggle past reflections"
        icon={isOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        position="fixed"
        right={isOpen ? "300px" : 0}
        top="50%"
        transform="translateY(-50%)"
        onClick={onToggle}
        zIndex={2}
        size="sm"
        bg="background.secondary"
        color="text.body"
      />
      <Box
        position="fixed"
        right={isOpen ? 0 : "-300px"}
        top={0}
        bottom={0}
        width="300px"
        bg="background.secondary"
        boxShadow="md"
        transition="right 0.3s"
        zIndex={1}
        overflowY="auto"
      >
        <VStack spacing={4} p={6}>
          <Text fontSize="lg" fontWeight="medium" color="text.heading">Past Reflections</Text>
          {reflections.map(reflection => (
            <Box key={reflection.id} p={4} bg="white" borderRadius="md" width="full" boxShadow="sm">
              <Text fontSize="sm" fontWeight="bold" color="text.subheading" mb={2}>{reflection.date}</Text>
              <Text fontSize="sm" color="text.body">{reflection.content}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </>
  )
}