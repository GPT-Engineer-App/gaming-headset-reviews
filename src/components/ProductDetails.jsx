import React from "react";
import { Box, Heading, Text, Image, Stack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import SaveButton from "./SaveButton";
import CommentSection from "./CommentSection";

const ProductDetails = ({ product }) => {
  return (
    <Box maxW="container.lg" mx="auto" py={8}>
      <Image src={product.image} alt={product.name} mb={4} />
      <Heading as="h1" size="2xl" mb={2}>
        {product.name}
      </Heading>
      <Stack direction="row" align="center" mb={4}>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < product.rating ? "gold" : "gray.300"} />
        ))}
      </Stack>
      <Text mb={4}>{product.description}</Text>
      <SaveButton productId={product.id} />
      <CommentSection productId={product.id} />
    </Box>
  );
};

export default ProductDetails;
