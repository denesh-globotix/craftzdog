import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  SimpleGrid,
  Icon,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Bio, { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

import { ChevronRightIcon } from '@chakra-ui/icons'
import thumbYoutube from '../public/images/links/youtube.png'
import thumbInkDrop from '../public/images/works/inkdrop_01.png'


const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={5} mb={5} aligh="center">
          I&apos;m learning ReactJS, it&apos;s awesome!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Welcome to the website. Do you like it?
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
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="www.github.com/craftzdog" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="www.twitter.com/inkdrop_app" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                  @inkdrop_app
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6} mt={5}>
            <GridItem href="https://www.youtube.com/devaslife" title="Dev as life" thumbnail={thumbYoutube}>
              My Youtube channel
            </GridItem>

            <GridItem href="https://www.inkdrop.app/" title="Inkdrop" thumbnail={thumbInkDrop}>
              Inkdrop
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
