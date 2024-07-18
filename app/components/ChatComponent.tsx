import { Box, VStack, Text, useColorModeValue } from '@chakra-ui/react';

export default function ChatComponent() {
  const bgColor = useColorModeValue('gray.50', 'gray.700');

  return (
    <Box
      w="full"
      h="70vh"
      bg={bgColor}
      borderRadius="md"
      boxShadow="md"
      p={4}
      overflowY="auto"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          Chat Dialogue
        </Text>
        {/* Add chat messages here */}
      </VStack>
    </Box>
  );
}