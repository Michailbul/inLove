'use client';


import ChatComponent from './components/ChatComponent';
import DailyReflection from './components/DailyReflection';
import SidePanel from './components/SidePanel';
import PastReflections from './components/PastReflections';
import ThemeToggle from './components/ThemeToggle';
import { Box, Flex, VStack, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bgColor} minH="100vh">
      <Flex direction="column" align="center" maxW="container.xl" mx="auto" p={4}>
        <ThemeToggle />
        <Flex w="full" justify="center" position="relative">
          <SidePanel />
          <VStack spacing={8} w="60%" align="stretch">
            <ChatComponent />
            <DailyReflection />
          </VStack>
          <PastReflections />
        </Flex>
      </Flex>
    </Box>
  );
}