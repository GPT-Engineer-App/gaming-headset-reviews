import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image, Stack, Container, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Best Gaming Headsets
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <Link as={RouterLink} to={`/product/${product.id}`}>
              <Box borderWidth={1} borderRadius="lg" p={4}>
                <Image src={product.image} alt={product.name} mb={4} />
                <Heading as="h2" size="xl" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Stack direction="row" align="center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < product.rating ? "gold" : "gray.300"} />
                  ))}
                </Stack>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
