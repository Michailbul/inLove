import { Box, VStack, Textarea, Button, useColorModeValue } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import MoodSelector from './MoodSelector';
import TagInput from './TagInput';
import React, { useState } from 'react';

export default function DailyReflection() {
  const bgColor = useColorModeValue('gray.100', 'gray.600');
  const [mood, setMood] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])

  return (
    <Box w="full" bg={bgColor} borderRadius="md" p={4}>
      <VStack spacing={4} align="stretch">
        <Textarea placeholder="What's on your mind today?" resize="vertical" />
        <MoodSelector onMoodSelect={setMood} />
        <TagInput tags={tags} setTags={setTags} />
        <Button
          size="sm"
          colorScheme="green"
          borderRadius="full"
          position="absolute"
          bottom={4}
          right={4}
          w={10}
          h={10}
          _hover={{ transform: 'scale(1.1)' }}
        >
          <CheckIcon />
        </Button>
      </VStack>
    </Box>
  );
}