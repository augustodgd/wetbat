import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  return (
    <Box data-testid="header" px={10} py={3} bgColor="blue.600">
      <img src="/wetbat-logo-white.png" alt="WetBat" width={135} />
    </Box>
  );
}
