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
      backgroundImage={['none', 'url(/logos.png)']}
      position="relative"
      h={['100px', '300px', '500px']}
      maxWidth="1620px"
      mt={[0, '-50px']}
    >
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m={['0', '2rem auto', '3rem auto 4rem auto']}
        maxWidth="900px"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems={['flex-start', 'center', 'center']}
          m={['1rem auto', '0 auto', '3rem auto']}
          p={['1rem 0', '3rem 0', '2rem']}
          bg="white"
          maxWidth="550px"
          minWidth="340px"
          minh={['250px', '360px', '340px']}
        >
          <Box
            as="img"
            src="/logo.svg"
            height="100px"
            width="100px"
            display={['none', 'block', 'block']}
          />
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
          logo="mailchimp.png"
          description="Subscribe to a newsletter."
        />
        <FunctionCard
          title="Mailgun"
          slug="mailgun"
          logo="mailgun.png"
          description="Send an email to a user."
        />
        <FunctionCard
          title="SendGrid"
          slug="sendgrid"
          logo="sendgrid.png"
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
          logo="stripe.png"
          description="Accept a payment using Checkout."
        />
        <FunctionCard
          title="Gumroad"
          slug="gumroad"
          logo="gumroad.png"
          description="Retrieve all sales for a user."
        />
        <FunctionCard
          title="Gumroad"
          slug="gumroad-product"
          logo="gumroad.png"
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
          logo="youtube.png"
          description="Get channel statistics."
        />
        <FunctionCard
          title="Analytics"
          slug="google-analytics"
          logo="google-analytics.png"
          description="Page views over a given range."
        />
        <FunctionCard
          title="Sheets"
          slug="google-sheets"
          logo="google-sheets.png"
          description="Create an entry in a sheet."
        />
      </SimpleGrid>
      <Heading as="h2" size="md" fontWeight="bold" letterSpacing="tight" mb={4}>
        More
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={16}>
        <FunctionCard
          title="Firebase"
          slug="firebase"
          logo="firebase.png"
          description="Read data from Realtime Database."
        />
        <FunctionCard
          title="Buttondown"
          slug="buttondown"
          logo="buttondown.png"
          description="Subscribe to a newsletter."
        />
        <FunctionCard
          title="Slack"
          slug="slack"
          logo="slack.png"
          description="Create a slash command."
        />
      </SimpleGrid>
      <Subscribe />
    </Box>
  </Container>
);

export default Index;
