import React, { Component } from 'react';
import {Text,View} from 'react-native';


class CoinDetailscreen extends Component{

    componentDidMount(){
        console.log("coin", this.props.route.params);
    }

    render(){
        return(
            <View>
                <Text>Coin Detail Screen</Text>
            </View>

        )
    }

}

export default CoinDetailscreen;