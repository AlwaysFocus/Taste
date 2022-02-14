import React from 'react';
import { Box, VStack, Text, Badge } from 'native-base';

interface Props {
    title: string;
    badgeContent: string;
    badgeColor?: string;
}

const InfoBadge = (props: Props) => {
    return( 
        <VStack justifyContent="center" alignItems="center">
            <Text>{props.title}</Text>
            <Badge w={125}  borderRadius="xl">
            {props.badgeContent}
          </Badge>
        </VStack>
    )
}

export default InfoBadge;