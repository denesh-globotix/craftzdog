import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'
const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
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

  // This is because router is passed in to Navbar as <Navbar path={router.asPath} />
  const { path } = props
  return (
    <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#fffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={5} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" mr={10}>
          <Heading as='h1' size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>


        <Stack direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>

          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>

              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options">
              </MenuButton>

              <MenuList>
            
                {/* passHref forces the NextLink to pass it's url to the child */}
                <NextLink href="/" passHref >
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
            
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
            
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>

                {/* target="_blank" forces the link to open in a new tab */}
                <NextLink href="https://www.youtube.com/watch?v=bSMZgXzC9AA" passHref>
                  <MenuItem target="_blank" as={Link}>View Source</MenuItem>
                </NextLink>

                <NextLink href="https://github.com/craftzdog/craftzdog-homepage/" passHref>
                  <MenuItem target="_blank" as={Link}>View Repository</MenuItem>
                </NextLink>
              </MenuList>
            
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
