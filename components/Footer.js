import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/core';

const Footer = () => (
  <Flex justify="center" mb={4}>
    <Link href="https://twitter.com/jamstackfns" title="Twitter" isExternal>
      <IconButton
        aria-label="Twitter"
        icon="twitter"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link href="mailto:me@leerob.io" title="Email" isExternal>
      <IconButton
        aria-label="Email"
        icon="mail"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
  </Flex>
);

export default Footer;
