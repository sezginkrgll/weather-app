import React from "react";
// Chakra-UI
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Error({ error }) {
  return (
    <Alert status="error" color="gray.700" mt="80px" borderRadius="md">
      <AlertIcon />
      <AlertTitle>Failed!</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
}

export default Error;
