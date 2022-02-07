import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import {Ionicons} from '@expo/vector-icons';
import Colors from "../constants/Colors";

const NavHeaderButton = (props: any) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Colors.lightBlue}/>
    )
}

export default NavHeaderButton;