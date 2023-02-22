import * as React from 'react';
import { StatusBar, View, StyleSheet, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Provider as PaperProvider, MD3DarkTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen, { HomeRoute } from './screens/Home';
import PratiqueScreen, { PratiqueRoute } from './screens/Pratique';
import PesquiseScreen, { PesquiseRoute } from './screens/Pesquise';
import AprendaScreen, { AprendaRoute } from './screens/Aprenda'
import InfoScreen, { InfoRoute } from './screens/Info'

const Tab = createMaterialBottomTabNavigator();

const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
  },
};

export default function App() {
  return (
    <PaperProvider theme={DarkTheme}>
      <StatusBar />
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator
          sceneAnimationEnabled={true}
          sceneAnimationType='opacity'
          labeled={false}
          barStyle={{
            height: 72,
          }}
        >
          <Tab.Screen 
            name={HomeRoute}
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => {
                return <Icon name='home-outline' color={ color } size={22} />
              },
              
            }}
          />
          <Tab.Screen
            name={PesquiseRoute}
            component={PesquiseScreen}
            options={{
              tabBarIcon: ({ color }) => {
                return <Icon name='search-outline' color={ color } size={22} />
              }
            }}
          />
          <Tab.Screen
            name={PratiqueRoute}
            component={PratiqueScreen}
            options={{
              tabBarIcon: ({ color }) => {
                return <Icon name='play-outline' color={ color } size={22} />
              }
            }}
          />
          <Tab.Screen
            name={AprendaRoute}
            component={AprendaScreen}
            options={{
              tabBarIcon: ({ color }) => {
                return <Icon name='book-outline' color={ color } size={22} />
              }
            }}
          />
          <Tab.Screen
            name={InfoRoute}
            component={InfoScreen}
            options={{
              tabBarIcon: ({ color }) => {
                return <Icon name='information-circle-outline' color={ color } size={22} />
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({

});

