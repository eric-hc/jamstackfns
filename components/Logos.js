import React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Image } from '@chakra-ui/core';

const moveSlowly = {
  x: 4,
  y: 4
};
const transition = {
  duration: 2,
  ease: 'easeInOut',
  yoyo: Infinity
};

const Circle = ({ h, w, logo, ...rest }) => (
  <Flex
    boxShadow="0px 20px 40px rgba(217, 217, 217, 0.8)"
    borderRadius="50%"
    bg="white"
    zIndex="-100"
    h="40px"
    w="40px"
    mr={8}
    justify="center"
    align="center"
    {...rest}
  >
    <Image
      htmlWidth={w}
      htmlHeight={h}
      objectFit="cover"
      src={`/logos/${logo}.svg`}
      alt={logo}
    />
  </Flex>
);

const Logos = () => (
  <Box position="absolute" left="200px" opacity="0.3">
    <Flex mb={8} ml={8} mt={16}>
      <motion.div
        animate={moveSlowly}
        transition={{
          ...transition,
          delay: 1
        }}
      >
        <Circle h="25px" w="25px" logo="react" />
      </motion.div>
      <motion.div
        animate={moveSlowly}
        transition={{
          ...transition,
          delay: 0.5
        }}
      >
        <Circle h="25px" w="25px" logo="github" />
      </motion.div>
    </Flex>
    <Flex mb={8}>
      <motion.div
        animate={moveSlowly}
        transition={{
          ...transition,
          delay: 1.5
        }}
      >
        <Circle h="20px" w="20px" logo="vercel" />
      </motion.div>
      <motion.div
        animate={moveSlowly}
        transition={{
          ...transition,
          delay: 2
        }}
      >
        <Circle h="15px" w="15px" logo="firebase" />
      </motion.div>
      <motion.div
        animate={moveSlowly}
        transition={{
          ...transition,
          delay: 2
        }}
      >
        <Circle h="25px" w="25px" logo="stripe" />
      </motion.div>
    </Flex>
  </Box>
);

export default Logos;
