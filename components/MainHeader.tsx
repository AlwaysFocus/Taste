import React from "react";
import { Badge, Box, HStack, VStack, Center, Text, Heading, Image } from "native-base";
import ProfilePicture from "./ProfilePicture";
import InfoBadge from "./InfoBadge";



const MainHeader = (props: any) => {
  return (
    <Box w="full" bgColor="blueGray.400" borderRadius="xl">
      <VStack w="full">
        <Center marginY={3}>
          <ProfilePicture
            size="lg"
            uri="https://thumbs.dreamstime.com/b/sushi-character-vector-fun-japaneseemotions-food-cute-face-illustration-japanese-comic-seafood-cuisine-77021165.jpg"
            userInitials="EW"
          />
          
         
          {/* User Title Badge */}
          <Text paddingTop={1}>Accomplished Chef</Text>
          
           {/* Chef + user name */}
           <Heading paddingY={1}>Chef Eli</Heading>
          {/* User Chef Level */}
          <Text>Level 5 Chef</Text>
        </Center>
        {/* <HStack w="full" justifyContent="space-evenly" alignItems="center">
          <InfoBadge title="Exp" badgeContent="27 / 128"/>
          <InfoBadge title="Utensils Used" badgeContent="12" />
        </HStack>
        <HStack w="full" justifyContent="space-evenly" alignItems="center" marginTop={5}>
        <InfoBadge title="Recipes Unlocked" badgeContent="25 / 270" />
          <InfoBadge title="Recipes Cooked" badgeContent="13 / 270" />
        </HStack> */}
      </VStack>
    </Box>
  );
};

export default MainHeader;
