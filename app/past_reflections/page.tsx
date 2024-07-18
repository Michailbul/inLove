'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VStack, Text, Box, IconButton, useDisclosure, Spinner, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon, CloseIcon } from '@chakra-ui/icons';

interface Reflection {
  id: number;
  date: string;
  content: string;
}

export default function PastReflections() {
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  useEffect(() => {
    // Simulate fetching reflections from backend
    const fetchReflections = async () => {
      setIsLoading(true);
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setReflections([
        { id: 1, date: '2023-07-18', content: 'Sample reflection 1' },
        { id: 2, date: '2023-07-17', content: 'Sample reflection 2' },
      ]);
      setIsLoading(false);
    };

    fetchReflections();
  }, []);

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
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          width: '300px',
          backgroundColor: bgColor,
          boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1,
          overflowY: 'auto',
        }}
      >
        <VStack spacing={4} align="stretch" p={4}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text fontSize="2xl" fontWeight="bold">Past Reflections</Text>
            <IconButton
              aria-label="Close past reflections"
              icon={<CloseIcon />}
              size="sm"
              onClick={onClose}
            />
          </Box>
          {isLoading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="200px">
              <Spinner />
            </Box>
          ) : (
            reflections.map(reflection => (
              <Box key={reflection.id} p={4} borderWidth={1} borderRadius="md" borderColor={borderColor}>
                <Text fontWeight="bold">{reflection.date}</Text>
                <Text>{reflection.content}</Text>
              </Box>
            ))
          )}
        </VStack>
      </motion.div>
    </>
  );
}