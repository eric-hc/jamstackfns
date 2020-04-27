import React from 'react';
import { Heading, Flex, Stack, Box, SimpleGrid } from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import FunctionCard from '../components/FunctionCard';

const Index = () => (
  <Container>
    <Box
      as="section"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage="url(/logos.png)"
      position="relative"
      h="500px"
      maxWidth="1620px"
      mt="-50px"
    >
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="3rem auto 4rem auto"
        maxWidth="900px"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          m="3rem auto"
          p={8}
          bg="white"
          maxWidth="550px"
          minWidth="340px"
        >
          <Box as="img" src="/logo.svg" height="100px" width="100px" />
          <Heading
            letterSpacing="tight"
            as="h1"
            size="2xl"
            fontWeight="medium"
            lineHeight="1"
          >
            <span style={{ fontWeight: 800 }}>jamstack</span>
            fns
          </Heading>
        </Flex>
      </Stack>
    </Box>
    <Box as="section" maxW="900px" m="0 auto">
      <Heading as="h2" size="md" fontWeight="bold" letterSpacing="tight" mb={4}>
        Email
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={12}>
        <FunctionCard
          title="Mailchimp"
          slug="mailchimp"
          description="Subscribe to a newsletter."
        />
        <FunctionCard
          title="Mailgun"
          slug="mailgun"
          description="Send an email to a user."
        />
        <FunctionCard
          title="SendGrid"
          slug="sendgrid"
          description="Send an email to a user."
        />
      </SimpleGrid>
      <Heading as="h2" size="md" fontWeight="bold" letterSpacing="tight" mb={4}>
        Payments
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={12}>
        <FunctionCard
          title="Stripe"
          slug="stripe"
          description="Accept a payment using Checkout."
        />
        <FunctionCard
          title="Gumroad"
          slug="gumroad"
          description="Retrieve all sales for a user."
        />
        <FunctionCard
          title="Gumroad"
          slug="gumroad-product"
          description="Retrieve all sales for a product."
        />
      </SimpleGrid>
      <Heading as="h2" size="md" fontWeight="bold" letterSpacing="tight" mb={4}>
        Google
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={12}>
        <FunctionCard
          title="YouTube"
          slug="youtube"
          description="Get channel statistics."
        />
        <FunctionCard
          title="Analytics"
          slug="google-analytics"
          description="Page views over a given range."
        />
        <FunctionCard
          title="Sheets"
          slug="google-sheets"
          description="Create an entry in a sheet."
        />
      </SimpleGrid>
      <Subscribe />
    </Box>
  </Container>
);

export default Index;
