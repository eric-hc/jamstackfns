import React, { useRef } from 'react';
import fetch from 'isomorphic-unfetch';
import {
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Button,
  Text,
  useToast
} from '@chakra-ui/core';

const Subscribe = () => {
  const inputEl = useRef(null);
  const toast = useToast();

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

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

    inputEl.current.value = '';
    toast({
      title: 'Success!',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box
      bg="blue.50"
      borderRadius={8}
      padding={6}
      my={8}
      maxW="450px"
      w="100%"
      mx="auto"
    >
      <Heading
        as="h5"
        size="md"
        mb={1}
        color="blue.900"
        letterSpacing="tight"
        fontWeight="black"
      >
        New functions in your inbox
      </Heading>
      <Text fontSize="sm">Get acess to functions when they're added.</Text>
      <InputGroup size="md" mt={6}>
        <Input
          aria-label="Email for newsletter"
          placeholder="Your Email Address"
          ref={inputEl}
          type="email"
          fontSize="sm"
        />
        <InputRightElement width="6.75rem">
          <Button
            fontWeight="bold"
            h="1.75rem"
            size="sm"
            onClick={subscribe}
            bg="blue.900"
            color="white"
          >
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Subscribe;
