import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, SectionList, FlatList } from 'react-native';
import Colors from 'cryptoTracker/src/res/colors';
import Http from 'cryptoTracker/src/libs/http';
import CoinMarkertItem from './CoinMarketItem';


class CoinDetailscreen extends Component {

    state = {
        coin: {},
        markets: []
    }

    getSymbolIcon = (name) => {

        if (name) {

            const symbol = name.toLowerCase().replace(" ", "-");
            return `https://c1.coinlore.com/img/25x25/${symbol}.png`
        }
    }


    getSections = (coin) => {
        const sections = [
            {
                title: "Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [coin.volume24]
            },
            {
                title: "Change 24h",
                data: [coin.percent_change_24h]
            }
        ];

        return sections;
    }

    getMarkets = async (coinId) => {


        const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
        const markets = await Http.instance.get(url);
        this.setState({ markets });
    }

    componentDidMount() {
        const { coin } = this.props.route.params;

        this.props.navigation.setOptions({ title: coin.symbol });

        this.getMarkets(coin.id);

        this.setState({ coin });
    }

    render() {

        const { coin, markets } = this.state;
        return (
            <View style={styles.cointainer}>
                <View style={styles.subHeader} >
                    <Image style={styles.iconImg} source={{ uri: this.getSymbolIcon(coin.name) }} />
                    <Text style={styles.titleTxt} >{coin.name}</Text>
                </View>
                <SectionList style={styles.section}
                    sections={this.getSections(coin)}
                    keyExtractor={(item => item)}
                    renderItem={({ item }) =>
                        <View style={styles.sectionItems} >
                            <Text style={styles.itemText} >{item} </Text>
                        </View>
                    }
                    renderSectionHeader={({ section }) =>
                        <View style={styles.sectionHeader} >
                            <Text style={styles.sectionTxt} >{section.title}</Text>
                        </View>
                    }
                />
                <Text style={styles.marketsTitle} >Markets</Text>
                <FlatList
                    style={styles.list}
                    horizontal={true}
                    data={markets}
                    renderItem={({ item }) => <CoinMarkertItem item={item} />}
                />
            </View>

        )
    }

}

const styles = StyleSheet.create({

    cointainer: {
        backgroundColor: Colors.charade,
        flex: 1
    },
    subHeader: {
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 16,
        flexDirection: "row"
    },
    titleTxt: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.white,
        marginLeft: 8
    },
    iconImg: {
        width: 25,
        height: 25
    },
    section: {
        maxHeight: 220
    },
    list: {
        maxHeight: 100,
        paddingLeft: 16
    },
    sectionHeader: {
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 8
    },
    sectionItems: {
        padding: 8
    },
    itemText: {
        color: Colors.white,
        fontSize: 14
    },
    sectionTxt: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: "bold"
    },
    marketsTitle: {
        color: Colors.white,
        fontSize: 16,
        marginBottom: 16,
        marginLeft: 16,
        fontWeight: "bold"

    }

});

export default CoinDetailscreen;