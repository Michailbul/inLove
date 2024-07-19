'use client'
import { useState, useEffect } from 'react'
import { VStack, Textarea, Button, Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Reflection } from '../types'

const MotionBox = motion(Box)

interface ChatComponentProps {
  onNewReflection: (reflection: Reflection) => void;
}


export default function ChatComponent({ onNewReflection }: ChatComponentProps) {
  const [reflection, setReflection] = useState('')
  const [inspiration, setInspiration] = useState('')

  useEffect(() => {
    // Simulating fetching a daily inspiration
    setInspiration("What made you smile today?")
  }, [])

  const handleSubmit = () => {
    if (reflection.trim()) {
      onNewReflection({
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        content: reflection
      })
      setReflection('')
    }
  }

  return (
    <VStack spacing={8} width="100%" maxWidth="800px" align="center">
      <Text fontSize="lg" color="text.subheading" fontStyle="italic">
        "{inspiration}"
      </Text>
      <MotionBox
        width="100%"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="Share your thoughts..."
          size="lg"
          minHeight="150px"
          maxHeight="200px"
          resize="vertical"
          borderColor="gray.200"
          _placeholder={{ color: '#CCCCCC' }}
          bg="white"
          boxShadow="lg"
          borderRadius="lg"
          p={4}
          overflowY="auto"
        />
      </MotionBox>
      <Button 
        onClick={handleSubmit} 
        size="lg" 
        width="full" 
        maxWidth="200px"
        boxShadow="md"
        borderRadius="full"
        bg="accent"
        color="white"
        _hover={{ bg: 'red.400', transform: 'translateY(-2px)' }}
        transition="all 0.2s"
        isDisabled={!reflection.trim()}
      >
        Reflect
      </Button>
      <Text fontSize="sm" color="text.muted" mt={4}>
        Your thoughts are safe and private
      </Text>
    </VStack>
  )
}