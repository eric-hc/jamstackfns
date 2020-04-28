import React, { useState, useRef } from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Flex,
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  useToast,
  Textarea
} from '@chakra-ui/core';

import Container from '../components/Container';

const url = 'https://jamstackfns.com/contact';
const title = 'Contact – jamstackfns';
const description = 'The best serverless functions for JAMstack applications.';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const emailEl = useRef(null);
  const messageEl = useRef(null);
  const toast = useToast();

  const contact = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/email', {
      body: JSON.stringify({
        from: emailEl.current.value,
        text: messageEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }

    emailEl.current.value = '';
    messageEl.current.value = '';

    toast({
      title: 'Success!',
      description: 'Thanks for reaching out.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
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
          px={8}
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={8} as="h1" size="xl">
              Let's hear from you.
            </Heading>
            <FormControl w="100%">
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input ref={emailEl} type="email" />
            </FormControl>
            <FormControl mt={4} w="100%">
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                ref={messageEl}
                maxLength="280"
                id="message"
                aria-describedby="message-helper-text"
              />
              <FormHelperText id="message-helper-text">
                Let us know how we could improve.
              </FormHelperText>
            </FormControl>
            <Button
              leftIcon="mail"
              mt={8}
              isLoading={loading}
              fontWeight="bold"
              onClick={contact}
            >
              Contact
            </Button>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Contact;
