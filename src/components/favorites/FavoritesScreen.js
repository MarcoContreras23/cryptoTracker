import React from "react";
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native"
import FavoriteEmptyState from "./FavoritesEmptyState";
import Colors from 'cryptoTracker/src/res/colors';

class FavoritesScreen extends Component {

    render() {
        return (
            <View style={styles.container} >
                <FavoriteEmptyState />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.charade,
        flex: 1
    }
});

export default FavoritesScreen;