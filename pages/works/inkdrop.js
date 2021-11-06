import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/layouts/article'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    InkDrop <Badge>2016</Badge>
                </Title>

                <P>
                    A markdown notetaking app with 100+ plugins
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.inkdrop.app'>Click here to find out</Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Portfolio</Meta>
                        <span>Windows/macOS/linux.ios/andoird</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, ELectron, ReactJS</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Blogspot</Meta>
                        <Link href="https://blog.inkdrop.app">
                            How to attrack the first 500 apaid users <ExternalLinkIcon mx="2px" />
                        </ Link>
                    </ListItem>

                </List>


                <WorkImage src="/images/works/inkdrop_01.png" alt="inkDrop" />
                <WorkImage src="/images/works/inkdrop_02.png" alt="inkDrop" />
            </Container>
        </Layout>
    )
}

export default Work