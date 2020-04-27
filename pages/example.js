import React, { useState, useRef } from 'react';
import { NextSeo } from 'next-seo';
import {
  Textarea,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Avatar,
  Box,
  useToast,
  Link,
  Icon
} from '@chakra-ui/core';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

import Container from '../components/Container';

const url = 'https://jamstackfns.com/example';
const title = 'Serverless Function Example – jamstackfns';

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.text();
};

const Example = () => {
  const { data: username } = useSWR('/api/user', fetcher);

  const [loading, setLoading] = useState(false);
  const [tweetId, setTweetId] = useState(false);
  const inputEl = useRef(null);
  const toast = useToast();

  const sendTweet = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/user/tweet', {
      body: JSON.stringify({
        status: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { tweet, error } = await res.json();

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
    setTweetId(tweet.id_str);
    toast({
      title: 'Success!',
      description: 'Your tweet has been sent.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
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
              Example
            </Heading>
            <Text color="gray.700" mb={4}>
              Serverless functions allow you to add dynamic functionality to
              your static site. To demonstrate, let's send a tweet from this
              static page.
            </Text>
            {username ? (
              <>
                <Box fontWeight="medium">
                  <Avatar
                    size="xs"
                    name={username}
                    src={`https://avatars.io/twitter/${username}`}
                    mb={2}
                    mr={2}
                    marginLeft="auto"
                  />
                  {username}
                </Box>
                <Textarea
                  ref={inputEl}
                  defaultValue="Wow, @jamstackfns is really awesome!"
                  maxLength="280"
                />
                <Button
                  leftIcon="twitter"
                  size="lg"
                  bg="#1DA1F2"
                  color="white"
                  fontWeight="medium"
                  isLoading={loading}
                  onClick={sendTweet}
                  mt={4}
                  _hover={{ bg: '#1A91DA' }}
                >
                  Tweet
                </Button>
                {tweetId && (
                  <Link
                    mt={4}
                    display="flex"
                    href={`https://twitter.com/${username}/status/${tweetId}`}
                    isExternal
                  >
                    <Flex align="center">
                      View Tweet
                      <Icon name="external-link" mx={2} size="16px" />
                    </Flex>
                  </Link>
                )}
              </>
            ) : (
              <Button
                as="a"
                leftIcon="twitter"
                size="lg"
                bg="#1DA1F2"
                color="white"
                fontWeight="medium"
                href="/api/auth/twitter"
                _hover={{ bg: '#1A91DA' }}
              >
                Sign in with Twitter
              </Button>
            )}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Example;
