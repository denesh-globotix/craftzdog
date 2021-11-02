import NextLink from 'next/link'
import { Button,  Container, Box, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} aligh="center">
        Hello, I&apos;m a full stack developer
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            den
          </Heading>
          <p>Digital creator</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/takuya.jpg" alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-titel">
          Work
        </Heading>
        <Paragraph>I am a junior developer learning the intricacies of ReactJS.
          Django and NodeJS. This is my first real ReactJS project and I am really excited
          about it. There is this project called {' '}
          <NextLink href="/works/inkdrop"><Link>Inkdrop</Link></NextLink>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
