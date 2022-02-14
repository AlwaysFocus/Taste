import React from 'react';
import {Avatar} from "native-base";
import { ISizes } from 'native-base/lib/typescript/theme/base/sizes';



interface Props {
    size: ISizes,
    uri: string,
    userInitials: string
}

const ProfilePicture = (props: Props) => {
    return (
        <Avatar size={props.size} source={{
            uri: props.uri
          }}>
              {props.userInitials}
            </Avatar>
    )
}

export default ProfilePicture;