import React from "react";
// Chakra-UI
import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";

function Section({ title, icon, temp, wind, precip, pressure }) {
  const iconURL = (urlText) => `https:${urlText}`;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={5}>
      <Box height="74px" textAlign="center">
        <Image src={iconURL(icon)} ml="auto" mr="auto" />
        <Heading size="sm" textAlign="center" fontWeight="semibold">
          {title}
        </Heading>
      </Box>
      <Box height="74px" textAlign="center">
        <Heading lineHeight="75px">{temp} °C</Heading>
      </Box>
      <Flex height="74px" fontSize="xs">
        <Stack spacing={0} mt="auto" mb="auto">
          <Text as="span">Wind: {wind} kmph</Text>
          <Text as="span">Precip: {precip} mm</Text>
          <Text as="span">Pressure: {pressure} mb</Text>
        </Stack>
      </Flex>
    </Grid>
  );
}

export default Section;
