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
  Heading,
} from "native-base";

import MainHeader from "../components/MainHeader";
import DailyQuest from "../components/DailyQuest";

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
      safeArea
      flex={1}
      w="full"
      bgColor="blueGray.600"
      justifyContent="center"
      alignItems="center"
    >
      <VStack flex={1} w="full" paddingX={5}>
        <MainHeader />
        <Center w="full" paddingTop={2}>
          <Heading underline color="white">
            Daily Quests
          </Heading>
        </Center>
        <HStack justifyContent="space-between" h={180}>
          <DailyQuest
            title="Cook a Meal from Asia"
            difficulty="Medium"
            duration={45}
            expReward={50}
          />
          <DailyQuest
            title="Cook a Meal from Asia"
            difficulty="Medium"
            duration={45}
            expReward={50}
          />
        </HStack>
        <VStack w="full">
          <HStack w="full" justifyContent="space-between">
            <Box w="180" h={150} bgColor="blueGray.400" borderRadius="xl"></Box>
            <Box w="180" h={150} bgColor="blueGray.400" borderRadius="xl"></Box>
          </HStack>
          <HStack w="full">
            <Box
              w="full"
              bgColor="blueGray.400"
              h={150}
              marginTop={5}
              borderRadius="xl"
            ></Box>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default HomeScreen;
