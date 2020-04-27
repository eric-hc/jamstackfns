import React from 'react';
import { NextSeo } from 'next-seo';
import { Heading, Text, Flex, Stack, Link } from '@chakra-ui/core';

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
            Hey, I’m Lee. I live in Des Moines, IA and I’m a Senior Software
            Engineer at&nbsp;
            <Link
              href="https://innovate.hy-vee.com"
              title="Hy-Vee"
              isExternal
              color="hsl(208, 99%, 44%)"
            >
              Hy-Vee
            </Link>
            , a $10B grocery tech company in the Midwest. As a tech lead, my
            primary focus is developing Aisles Online, Hy-Vee’s e-commerce
            grocery shopping platform – which serves millions of customers every
            year. I also help maintain our internal component library.
          </Text>
          <Text color="gray.700" mb={4}>
            At the beginning of 2020, I launched my most ambitious project – a
            50+ lesson video course on React and Next.js. It’s called&nbsp;
            <Link
              href="https://masteringnextjs.com"
              title="Mastering Next.js"
              isExternal
              color="hsl(208, 99%, 44%)"
            >
              Mastering Next.js
            </Link>
            , and it’s been my most successful solo-endeavor so far.
          </Text>
          <Text color="gray.700" mb={4}>
            I’ve spoken across the country at conferences and meet-ups about
            front-end development, design, and recruiting. I also actively
            contribute to my blog, which attracts thousands of readers every
            month. I mostly write about development, tech careers, and my
            personal life.
          </Text>
          <Text color="gray.700" mb={4}>
            I grew up in small-town Iowa and went to school at Iowa State,
            graduating with a degree in Computer Engineering. I spend my free
            time playing music, creating videos, and enjoying time with friends
            and family
          </Text>
        </Flex>
      </Stack>
    </Container>
  </>
);

export default About;
