import React from "react";
import { Box, Heading, Text, Image, Stack, Container, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "SteelSeries Arctis Nova Pro Wireless",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTdGVlbFNlcmllcyUyMEFyY3RpcyUyME5vdmElMjBQcm8lMjBXaXJlbGVzcyUyMGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8fHwxNzEwNTQ5NjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "The SteelSeries Arctis Nova Pro Wireless is the ultimate wireless gaming headset, offering excellent audio quality, comfort, and features.",
    rating: 5,
  },
  {
    id: 2,
    name: "Razer BlackShark V2 Pro",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSYXplciUyMEJsYWNrU2hhcmslMjBWMiUyMFBybyUyMGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8fHwxNzEwNTQ5NjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "The Razer BlackShark V2 Pro is a premium wireless gaming headset with THX Spatial Audio, delivering immersive sound and exceptional comfort.",
    rating: 4.5,
  },
];

const Index = () => {
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
