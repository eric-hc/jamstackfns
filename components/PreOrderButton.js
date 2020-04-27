import React from 'react';
import { Text, Flex, Stack, Image, Button, Icon } from '@chakra-ui/core';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const PurchaseButton = () => {
  /*
   * const checkout = async (e) => {
   *   e.preventDefault();
   *
   *   const res = await fetch(`/api/purchase`, {
   *     headers: {
   *       'Content-Type': 'application/json'
   *     },
   *     method: 'GET'
   *   });
   *
   *   const result = await res.json();
   *   const stripe = await stripePromise;
   *   const { error } = await stripe.redirectToCheckout({
   *     sessionId: result.id
   *   });
   * };
   */

  return (
    <Stack justify="center" my={8} mx="auto">
      <Button
        bg="#2F80ED"
        w="185px"
        h="50px"
        color="white"
        size="lg"
        fontWeight="bold"
        // onClick={checkout}
      >
        Pre-order now
      </Button>
      <Flex justify="center">
        <Icon name="lock" mr={1} color="gray.500" width="12px" />
        <Text fontSize="xs" mr={1} color="gray.500">
          Secured by
        </Text>
        <Image
          htmlWidth="30px"
          htmlHeight="10px"
          color="gray.300"
          src="/logos/stripe.svg"
          alt="stripe"
          css={{
            filter: 'grayscale(100%)'
          }}
        />
      </Flex>
    </Stack>
  );
};

export default PurchaseButton;
