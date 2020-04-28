import React from 'react';
import { NextSeo } from 'next-seo';
import { Heading, Text, Flex, Stack, Link, Image, Box } from '@chakra-ui/core';

import Container from '../components/Container';

const url = 'https://jamstackfns.com/about';
const title = 'About – jamstackfns';

const About = () => (
  <>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title
      }}
    />
    <Container>
      <Stack
        as="section"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            About
          </Heading>
          <Text color="gray.700" mb={4}>
            <Link
              href="https://jamstack.org/"
              title="JAMstack"
              isExternal
              color="hsl(208, 99%, 44%)"
            >
              {'JAMstack'}
            </Link>
            &nbsp;(JavaScript, APIs, and Markup) is fundamentally reshaping the
            web. Coined by&nbsp;
            <Link
              href="https://en.wikipedia.org/wiki/Netlify#JAMstack"
              title="JAMstack"
              isExternal
              color="hsl(208, 99%, 44%)"
            >
              {`Netlify's co-founder`}
            </Link>
            , JAMstack bridges the gap between static and dynamic websites.
            Capitalize on static site performance, security, and scalability
            while still having dynamic data.
          </Text>
          <Text color="gray.700" mb={4}>
            <Link href="/" title="jamstackfns" color="hsl(208, 99%, 44%)">
              {'JAMstack Functions'}
            </Link>
            &nbsp;is a directory of the best serverless functions for JAMstack
            applications. Quickly deploy serverless functions to Vercel or
            Netlify for your static site and start building.
          </Text>
          <Text color="gray.700" mb={4}>
            Created by&nbsp;
            <Link
              href="https://leerob.io"
              title="Lee Robinson"
              color="hsl(208, 99%, 44%)"
            >
              {'Lee Robinson.'}
            </Link>
          </Text>
          <Heading letterSpacing="tight" mb={2} as="h2" size="lg">
            Assets
          </Heading>
          <Stack
            borderRadius={4}
            border="1px solid"
            borderColor="gray.200"
            align="center"
          >
            <Image src="/logo.svg" alt="logo" p={16} />
            <Text fontSize="sm" color="gray.500" pb={4}>
              Light Logo
            </Text>
          </Stack>
          <Stack
            borderRadius={4}
            border="1px solid"
            borderColor="gray.200"
            align="center"
            mt={8}
          >
            <Image src="/og.png" alt="banner" p={2} objectFit="scale-down" />
            <Text fontSize="sm" color="gray.500" pb={4}>
              Banner Image
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  </>
);

export default About;
