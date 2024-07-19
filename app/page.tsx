import MainContent from './components/MainContent'
import ThemeToggle from './components/ThemeToggle'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box p={8}>
      <MainContent />
      <ThemeToggle />
    </Box>
  )
}