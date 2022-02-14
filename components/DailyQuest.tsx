import { Box, HStack, VStack, Text, Heading, Divider } from "native-base";
import React from "react";
import AnimatedIcon from "./AnimatedIcon";
import QuestMealPicture from "./QuestMealPicture";

interface Props {
  title: string;
  expReward: number;
  duration: number;
  difficulty: string;
}

const DailyQuest = (props: Props) => {
  return (
    <Box w="180" bgColor="blueGray.400" borderRadius="xl" marginY={3} justifyContent="center" alignItems="center">
      <VStack justifyContent="center" alignItems="center" w="full">
        {/* <Heading underline={true} paddingY={3}>Daily Quest</Heading> */}
        <VStack justifyContent="center" alignItems="center">
          <AnimatedIcon />
          <Text fontSize={20}>{props.title}</Text>
          <HStack justifyContent="center" alignItems="center">
            <Text paddingX={1}>{props.difficulty}</Text>
            <Divider orientation="vertical"/>
            <Text paddingX={1}>{props.duration}m</Text>
          </HStack>

          <Text>{props.expReward}xp</Text>
        </VStack>
        {/* <QuestMealPicture imageUri='https://cafedelites.com/wp-content/uploads/2018/03/Sesame-Beef-Stir-Fry-4.jpg' altText='Stir Fry' /> */}
      </VStack>
    </Box>
  );
};

export default DailyQuest;
