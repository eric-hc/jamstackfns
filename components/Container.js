import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => (
  <>
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="900px"
      width="100%"
      bg="rgba(255, 255, 255, 0.8)"
      as="nav"
      p={8}
      mt={[0, 8]}
      mb={8}
      mx="auto"
    >
      <NextLink href="/" passHref>
        <Box as="a">
          <Box
            as="img"
            alt="jamstackfns"
            src="/logo.svg"
            width="24px"
            height="24px"
          />
        </Box>
      </NextLink>
      <Box>
        <NextLink href="/example" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            Example
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            Blog
          </Button>
        </NextLink>
        <NextLink href="/about" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            About
          </Button>
        </NextLink>
      </Box>
    </StickyNav>
    <Flex
      as="main"
      justifyContent="center"
      flexDirection="column"
      bg="white"
      color="black"
      px={8}
    >
      {children}
      <Footer />
    </Flex>
  </>
);

export default Container;
