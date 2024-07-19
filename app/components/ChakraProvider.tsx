// app/components/ChakraProvider.tsx
'use client'

import { ChakraProvider as ChakraProviderComponent } from '@chakra-ui/react'
import theme from '../../theme'

export default function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProviderComponent theme={theme}>
      {children}
    </ChakraProviderComponent>
  )
}