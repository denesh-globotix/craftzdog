import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: centre;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
  transform: rotate(45deg);
}

`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={15} height={1} alt="logo" />
          <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight='bold'
            ml={7} >
            Paw
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
