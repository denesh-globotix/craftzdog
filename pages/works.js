import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'

import thumbInkDrop from '../public/images/works/inkdrop_eyecatch.png'
import thumnWalkNote from '../public/images/works/walknote_eyecatch.png'


const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontsize={20} mt={4} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkDrop}>
            A markdown app
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="walknote" title="Walknote" thumbnail={thumnWalkNote}>
            A markdown app
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works