import React, { useEffect } from "react";
// Chakra-UI
import { Box, Grid, CircularProgress } from "@chakra-ui/react";
// Components
import Header from "./Header";
import Card from "./Card";
import Section from "./Section";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchForecast } from "../redux/forecastSlice";
import Error from "./Error";

function Container() {
  const status = useSelector((state) => state.forecast.status);
  const data = useSelector((state) => state.forecast.data);
  const error = useSelector((state) => state.forecast.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchForecast({ lat: 36.9863599, lon: 35.3252861 }));
    }
  }, [dispatch, status]);

  if (status === "succeeded") {
    console.log(data.forecast.forecastday);
  }

  return (
    <Box
      borderWidth="5px"
      borderRadius="xl"
      borderColor="cyan.700"
      w="620px"
      h="320px"
      mt="100px"
      ml="auto"
      mr="auto"
      bg="cyan.900"
      color="gray.100"
      p={5}
    >
      <Header />
      {status === "failed" && <Error error={error} />}
      {status === "loading" && (
        <Box textAlign="center" lineHeight="200px">
          <CircularProgress isIndeterminate color="green.300" />
        </Box>
      )}
      {status === "succeeded" && (
        <>
          <Section
            title={data.current.condition.text}
            icon={data.current.condition.icon}
            temp={data.current.temp_c}
            wind={data.current.wind_kph}
            precip={data.current.precip_mm}
            pressure={data.current.pressure_mb}
          />
          <Grid
            templateColumns="repeat(7, 1fr)"
            gap={2}
            mt={7}
            textAlign="center"
          >
            {data.forecast.forecastday.map((item, i) => (
              <Card
                key={i}
                title={item.date}
                icon={item.day.condition.icon}
                temp={item.day.avgtemp_c}
              />
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default Container;
