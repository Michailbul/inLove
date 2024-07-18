import { Box, VStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

export default function SidePanel() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open side panel"
        icon={<SettingsIcon />}
        position="fixed"
        left={0}
        top="50%"
        transform="translateY(-50%)"
        onClick={onToggle}
      />
      <Box
        as={motion.div}
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ duration: 0.3 } as any}
        position="fixed"
        left={0}
        top={0}
        bottom={0}
        width="250px"
        bg="white"
        boxShadow="md"
        zIndex={2}
      >
        <VStack spacing={4} p={4}>
          {/* Add side panel content here */}
        </VStack>
      </Box>
    </>
  );
}