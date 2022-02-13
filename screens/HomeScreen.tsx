import React from "react";
import {
  Box,
  VStack,
  Divider,
  HStack,
  Text,
  Icon,
  Center,
  Container,
  Flex,
} from "native-base";

import MainHeader from "../components/MainHeader";

const HomeScreen = () => {
  return (
    // Main Header
    // User Stats OverView
    // Meals cooked, utensils used, exp, etc

    // End Main Header

    // Home Screen Main Content

    // Card Container
    // Card 1 - Recently Cooked Meals
    // Card 2 - Discover
    // Double width card - Highlighted/Recommended meals - maybe horizontal scroll
    // End Card Container
    // End Home Screen Content

    <Box
      flex={1}
      w="full"
      bgColor="blueGray.600"
      justifyContent="center"
      alignItems="center"
    >
      <VStack flex={1} w="full" paddingTop={50} paddingX={5}>
        <MainHeader />
      </VStack>
    </Box>
  );
};

export default HomeScreen;
