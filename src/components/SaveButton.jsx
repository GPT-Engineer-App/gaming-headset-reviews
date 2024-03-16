import React from "react";
import { Button } from "@chakra-ui/react";

const SaveButton = ({ productId }) => {
  const handleSave = () => {};

  return (
    <Button colorScheme="blue" onClick={handleSave}>
      Save to Favorites
    </Button>
  );
};

export default SaveButton;
