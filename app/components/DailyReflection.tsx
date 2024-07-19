'use client';


import { Box, VStack, Textarea, Button, useColorModeValue } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import React from 'react';

export default function DailyReflection() {
    const bgColor = useColorModeValue('gray.100', 'gray.600');

    return (
      <Box w="full" bg={bgColor} borderRadius="md" p={6}>
        <VStack spacing={6} align="stretch">
          <Textarea 
            placeholder="What's on your mind today?" 
            resize="vertical" 
            minH="100px"
          />
          <Button
            colorScheme="green"
            borderRadius="full"
            position="relative"
            alignSelf="flex-end"
            size="lg"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <CheckIcon />
          </Button>
        </VStack>
      </Box>
    );
}