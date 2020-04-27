import React, { useState } from 'react';
import { Box, Button, RadioButtonGroup } from '@chakra-ui/core';

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;

  return (
    <Button
      ref={ref}
      variant="outline"
      bg={isChecked ? 'gray.100' : 'none'}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
      m={0}
    />
  );
});

const ToggleSwitch = ({ children, ...rest }) => {
  const [provider, setProvider] = useState('vercel');

  return (
    <RadioButtonGroup
      isInline
      onChange={(val) => setProvider(val)}
      defaultValue="vercel"
      mt={8}
      css={{
        '~ pre': {
          display: provider === 'netlify' ? 'initial' : 'none'
        },
        ' + pre:nth-of-type(1)': {
          display: provider === 'vercel' ? 'initial' : 'none'
        }
      }}
      {...rest}
    >
      <CustomRadio
        value="vercel"
        borderBottomRightRadius={0}
        borderTopRightRadius={0}
      >
        <Box
          as="img"
          alt="Vercel"
          src="/logos/vercel.svg"
          width="18px"
          height="18px"
          mr={2}
        />
        Vercel
      </CustomRadio>
      <CustomRadio
        value="netlify"
        borderBottomLeftRadius={0}
        borderTopLeftRadius={0}
      >
        <Box
          as="img"
          alt="Netlify"
          src="/logos/netlify.png"
          width="18px"
          height="18px"
          mr={2}
        />
        Netlify
      </CustomRadio>
    </RadioButtonGroup>
  );
};

export default ToggleSwitch;
