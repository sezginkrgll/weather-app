import React from "react";
// Chakra-UI
import { Box, Image, Text } from "@chakra-ui/react";

function Card({ title, icon, temp }) {
  const iconURL = (urlText) => `https:${urlText}`;
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  return (
    <Box w="75px">
      <Text>{days[Number(new Date(title).getDay())]}</Text>
      <Image src={iconURL(icon)} ml="auto" mr="auto" />
      <Text>{temp} °C</Text>
    </Box>
  );
}

export default Card;
