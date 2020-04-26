import React from 'react';
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
  return (
    <RadioButtonGroup onChange={(val) => console.log(val)} isInline {...rest}>
      <CustomRadio
        value="1"
        borderBottomRightRadius={0}
        borderTopRightRadius={0}
      >
        {children[0]}
      </CustomRadio>
      <CustomRadio value="2" borderBottomLeftRadius={0} borderTopLeftRadius={0}>
        {children[1]}
      </CustomRadio>
    </RadioButtonGroup>
  );
};

export default ToggleSwitch;
