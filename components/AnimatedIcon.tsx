import React, { useEffect, useRef } from "react";
import { Box } from "native-base";
import LottieView from "lottie-react-native";

import { CookingInPan } from "../constants/AnimatedIcons";
import AnimatedLottieView from "lottie-react-native";

const AnimatedIcon = () => {
    const animation = useRef<AnimatedLottieView>(null)
    useEffect(() => {
        animation?.current?.play();
    }, [])
  return (
    <Box borderRadius={500} bgColor="white" w={60} h={60}>
      <LottieView
        ref={animation}
        autoPlay
        loop
        duration={6000}
        style={{
          width: 40,
          height: 40,
          backgroundColor: "transparent",
        }}
        source={CookingInPan}
      />
    </Box>
  );
};

export default AnimatedIcon;
