import { Box, Image } from 'native-base';
import React from 'react';

interface Props {
    imageUri: string;
    altText: string;
}

const QuestMealPicture = (props: Props) => {
    return (
        <Box padding={2}>
        <Image size="xl" resizeMode={"cover"} borderRadius={100} source={{
            uri: props.imageUri
          }} alt={props.altText} />
          </Box>
    );
}

export default QuestMealPicture;