import React from "react";
import { Badge, Box, HStack, VStack, Center, Text } from "native-base";

const MainHeader = (props: any) => {
  return (
    // <Box flex={1} justifyContent="center" alignItems="center" h={200} w="100%">
    //   <VStack>
    //     <Box
    //       flex={1}
    //       w="100%"
    //       justifyContent="center"
    //       alignItems="center"
    //       bgColor="white"
    //     >
    //       {/* <ProfilePicture /> */}
    //       {/* <UserName /> */}
    //       <VStack>
    //         <HStack bgColor="white">
    //           <Box flex={1} flexDirection="row" justifyContent="center" alignItems="center" w="80%">
    //             <Badge padding={25}>27 / 128 Exp</Badge>
    //             <Badge padding={25}> 12 Utensils Used</Badge>
    //           </Box>
    //         </HStack>
    //         <HStack>
    //           <Box flex={1} justifyContent="center" alignItems="center" w="80%">
    //             <Badge bgColor="black">Cool stuff</Badge>
    //             <Badge bgColor="amber.600">Cool</Badge>
    //           </Box>
    //         </HStack>
    //       </VStack>
    //     </Box>
    //   </VStack>
    // </Box>

        <Box w="full" h="1/3" bgColor="blueGray.400" borderRadius="xl">
            <VStack w="full">
                <HStack w="full" justifyContent="center" alignItems="center">
                <Badge padding={2} margin={5} borderRadius="xl">27 / 128 Exp</Badge>
                <Badge padding={2} margin={5} borderRadius="xl"> 12 Utensils Used</Badge>
                </HStack>
                <HStack w="full" justifyContent="center" alignItems="center">
                <Badge padding={2} margin={5} borderRadius="xl">27 / 128 Exp</Badge>
                <Badge padding={2} margin={5} borderRadius="xl"> 12 Utensils Used</Badge>
                </HStack>
            </VStack>
            
        </Box>
  );
};

export default MainHeader;
