import React, { useState } from "react";
// Chakra-UI
import { Flex, Heading, Select, Spacer } from "@chakra-ui/react";
// Data
import CITIES from "../Data/Cities";
// Redux
import { useDispatch } from "react-redux";
import { fetchForecast } from "../redux/forecastSlice";

function Header() {
  const [city, setCity] = useState("Adana");
  const filtered = CITIES.filter((item) => item.name === city);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);
    const filtered = CITIES.filter((item) => item.name === value);
    dispatch(
      fetchForecast({
        lat: filtered[0].geocoding.lat,
        lon: filtered[0].geocoding.lon,
      })
    );
  };

  return (
    <Flex>
      <Heading
        size="sm"
        textAlign="center"
        fontWeight="semibold"
        lineHeight="32px"
      >
        {city}, Turkey
      </Heading>
      <Spacer />
      <Select
        size="sm"
        w="150px"
        bg="white"
        color="gray.700"
        value={city}
        onChange={handleChange}
      >
        {CITIES.map((item) => (
          <option key={item.zipCode} value={item.name}>
            {item.name}
          </option>
        ))}
      </Select>
    </Flex>
  );
}

export default Header;
