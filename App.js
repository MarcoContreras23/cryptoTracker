/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Colors from 'cryptoTracker/src/res/colors';
import FavoritesStack from './src/components/favorites/FavoritesStack';

//import type {Node} from 'react';

/*const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};*/

const Tabs = createBottomTabNavigator();

const App = () => {
    /*const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };*/

    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.blackPearl,
                        shadowColor: Colors.blackPearl
                    },
                    headerTintColor: Colors.white
                }}
            >
                <Tabs.Screen
                    name="Coins"
                    component={CoinsStack}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Image
                                style={{ tintColor: color, width: size, height: size }}
                                source={require('./src/assets/img/bank.png')} />
                        )

                    }}
                />


                <Tabs.Screen
                    name="Favorites"
                    component={FavoritesStack}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Image
                                style={{ tintColor: color, width: size, height: size }}
                                source={require('./src/assets/img/star.png')} />
                        )

                    }}
                />
            </Tabs.Navigator>

        </NavigationContainer>
    );
};

export default App;
