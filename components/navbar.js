import Logo from './logo'
import NextLink from 'next/link'
import {
  Container, 
  Box, 
  Link, 
  Stack, 
  Heading, 
  FLex, 
  Menu, 
  MenuItem, 
  MenuList, 
  MenuButton, 
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
  const active = path == href
  const inactiveColor = useColorMmodeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
    <Link p={2} bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      >
        {children}
    </Link>
    </NextLink>
  )
}
  const Navbar = props => {
    const {path } = props
    return (
      <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#fffff40', '#20202380')}
      style={{backdropFilter: 'blur(10px'}}
      zIndex = {1}
      {...props}
      >
      Navbar
      </Box>
    )
  }

export default Navbar
