import React from "react";
import { View, Text, StyleSheet, Image, Platform, Pressable } from 'react-native';
import Colors from 'cryptoTracker/src/res/colors';

const CoinsItem = ({ item, onPress }) => {

    getImgArrow = () => {
        if (item.percent_change_1h > 0) {
            return require("cryptoTracker/src/assets/img/ArrowUp.png");
        } else {
            return require("cryptoTracker/src/assets/img/ArrowDown.png");
        }
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText} >{`$${item.price_usd}`}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
                <Image
                    style={styles.imgIcon}
                    source={getImgArrow()}
                />
            </View>

        </Pressable>
    );


}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-between",
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
        marginLeft: Platform.OS == 'android' ? 16 :0,
        marginRight:  Platform.OS == 'android' ? 16 :0,
        
    },
    row: {
        flexDirection: "row"
    },
    symbolText: {
        color: Colors.white,
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 12
    },
    nameText: {
        color: Colors.white,
        textTransform: "uppercase",
        fontSize: 14,
        marginRight: 16

    },
    percentText: {
        color: Colors.white,
        fontSize: 12
    },
    priceText: {
        color: Colors.white,
        fontSize: 14,
        marginRight: 8
    },
    imgIcon: {
        width: 22,
        height: 22
    }

});

export default CoinsItem;