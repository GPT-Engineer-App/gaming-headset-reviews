import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Login
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
