import { Box, VStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function PastReflections() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open past reflections"
        icon={<CalendarIcon />}
        position="fixed"
        right={4}
        top={4}
        borderRadius="full"
        onClick={onToggle}
      />
      <AnimatePresence>
        {isOpen && (
          <Box
            as={motion.div}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{
              type: "spring",
              stiffness: 300 as any, // Casting to bypass TypeScript error
              damping: 30 as any, // Casting to bypass TypeScript error
            }}
            position="fixed"
            right={0}
            top={0}
            bottom={0}
            width="300px"
            bg="white"
            boxShadow="md"
            zIndex={2}
            overflowY="auto"
          >
            <VStack spacing={4} p={4}>
              {/* Add past reflections list here */}
            </VStack>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
}
