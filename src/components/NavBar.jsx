import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
          Gaming Headsets
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/login" mr={4}>
          Login
        </Link>
        <Link as={RouterLink} to="/signup">
          Sign Up
        </Link>
      </Flex>
    </Box>
  );
};

export default NavBar;
