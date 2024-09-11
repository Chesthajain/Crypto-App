import { HStack } from '@chakra-ui/react';
import React from 'react'

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyles"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
    </HStack>
  );
};

export default Header;