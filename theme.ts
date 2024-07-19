// theme.ts
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    background: {
      primary: '#FFFFFF',
      secondary: '#F2F2F2',
    },
    accent: '#FF3B30',
    text: {
      heading: '#333333',
      subheading: '#666666',
      body: '#333333',
      muted: '#999999',
    },
  },
  fonts: {
    body: 'Helvetica, Arial, sans-serif',
    heading: 'Helvetica, Arial, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'background.primary',
        color: 'text.body',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
      },
      variants: {
        solid: {
          bg: 'accent',
          color: 'white',
          _hover: {
            bg: 'red.500',
          },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: 'gray.200',
            _placeholder: {
              color: '#CCCCCC',
            },
          },
        },
      },
    },
  },
})

export default theme