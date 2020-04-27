import React from 'react';
import NextLink from 'next/link';
import { Avatar, Box, Link, Heading, Text } from '@chakra-ui/core';

const FunctionCard = ({ title, description, slug, logo, ...rest }) => (
  <NextLink href={`f/${slug}`} passHref>
    <Link
      boxShadow="0 0 0 1px #E2E8F0"
      borderRadius={8}
      h="130px"
      p={4}
      transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
      w="100%"
      _hover={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)' }}
      {...rest}
    >
      <Box boxShadow="0 0 0 1px #E2E8F0" borderRadius="50%" width="32px">
        <Avatar size="sm" name={title} src={`/logos/avatars/${logo}`} />
      </Box>
      <Heading as="h3" size="sm" fontWeight="bold" textAlign="left" mt={4}>
        {title}
      </Heading>
      <Text fontSize="xs" mt={2} textAlign="left" color="gray.800">
        {description}
      </Text>
    </Link>
  </NextLink>
);

export default FunctionCard;
