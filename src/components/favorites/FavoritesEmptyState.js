import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import Colors from 'cryptoTracker/src/res/colors';

const FavoriteEmptyState = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >You don't have any favorite yet</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    text: {
        color: Colors.white,
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center"

    }

});

export default FavoriteEmptyState;