import { Box } from '@chakra-ui/core'

export const Card = ({ children, ...props }) => (
  <Box
    backgroundColor="#fff"
    boxShadow="sm"
    rounded="lg"
    m={4}
    p={4}
    {...props}
  >
    {children}
  </Box>
)
