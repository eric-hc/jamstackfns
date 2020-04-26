/** @jsx jsx */
import React from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Box
} from '@chakra-ui/core';
import { jsx } from '@emotion/core';

import Container from '../components/Container';
import BlogSeo from '../components/BlogSeo';
import Subscribe from '../components/Subscribe';
import ToggleSwitch from '../components/ToggleSwitch';

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath.replace('f/', '').replace('.mdx', '');

  return ({ children }) => {
    const { colorMode } = useColorMode();
    const textColor = {
      light: 'gray.700',
      dark: 'gray.400'
    };

    return (
      <Container>
        {/* <BlogSeo url={`https://jamstackfns.com/f/${slug}`} {...frontMatter} /> */}
        <Stack
          as="section"
          spacing={0}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w="100%"
              // mb={4}
            >
              <Box>
                <Heading letterSpacing="tight" mb={2} as="h1" size="xl">
                  {frontMatter.title}
                </Heading>
                <Text fontSize="sm" color={textColor[colorMode]}>
                  {frontMatter.description}
                </Text>
              </Box>
              <Box
                boxShadow="0 0 0 1px #E2E8F0"
                borderRadius="50%"
                width="48px"
                mt={[2, 0]}
              >
                <Avatar
                  size="md"
                  name={frontMatter.title}
                  src={`/logos/avatars/${frontMatter.logo}`}
                />
              </Box>
            </Flex>
            <Stack isInline>
              <ToggleSwitch defaultValue="1" mt={8}>
                <>
                  <Box
                    as="img"
                    alt="Vercel"
                    src="/logos/vercel.svg"
                    width="18px"
                    height="18px"
                    mr={2}
                  />
                  Vercel
                </>
                <>
                  <Box
                    as="img"
                    alt="Vercel"
                    src="/logos/netlify.png"
                    width="18px"
                    height="18px"
                    mr={2}
                  />
                  Netlify
                </>
              </ToggleSwitch>
              {/* <ToggleSwitch defaultValue="1" mt={8}>
                <>
                  <Box
                    as="img"
                    alt="JavaScript"
                    src="/logos/js.png"
                    width="18px"
                    height="18px"
                    mr={2}
                  />
                  JavaScript
                </>
                <>
                  <Box
                    as="img"
                    alt="TypeScript"
                    src="/logos/ts.png"
                    width="18px"
                    height="18px"
                    mr={2}
                  />
                  TypeScript
                </>
              </ToggleSwitch> */}
            </Stack>
          </Flex>
          {children}
          <Subscribe />
        </Stack>
      </Container>
    );
  };
};
