import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealCategoryScreen = () => {

    return(
        <View style={styles.screen}>
            <Text>Meal Category Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealCategoryScreen;