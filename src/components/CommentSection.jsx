import React from "react";
import { Box, Text } from "@chakra-ui/react";

const CommentSection = ({ productId }) => {
  return (
    <Box mt={8}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Comments
      </Text>
      {}
    </Box>
  );
};

export default CommentSection;
