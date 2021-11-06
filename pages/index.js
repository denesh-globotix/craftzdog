import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Bio, { BioSection, BioYear } from '../components/bio'

import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={5} mb ={5} aligh="center">
          I&apos;m learning ReactJS, it&apos;s awesome!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Call me den
            </Heading>
            <p>Web Developer/ Software Engineer</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/takuya.jpg" alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>I am a junior developer learning the intricacies of ReactJS,
            Django and NodeJS. This is my first real ReactJS project and I am really excited
            about it. There is this project called {' '}
            <NextLink href="/works/inkdrop"><Link>Inkdrop</Link></NextLink>.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Check out my works
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title" >
            Bio
          </Heading>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed a bachelor&apos;s in the city. A different field and  the hustle is always on
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Discovered the wild world of web development
          </BioSection>
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            Sketching, guitar, tabla, boxing, {' '}
            <Link href="https://www.google.com">Sketching</Link>
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
