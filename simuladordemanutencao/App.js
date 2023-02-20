import * as React from 'react';
import { StatusBar, View, StyleSheet, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Provider as PaperProvider, MD3DarkTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/Home';
import PratiqueScreen from './screens/Pratique';
import PesquiseScreen from './screens/Pesquise';
import AprendaScreen from './screens/Aprenda'

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
                name='Home'
                component={HomeScreen}
                options={{
                  tabBarIcon: ({ color }) => {
                    return <Icon name='home-outline' color={ color } size={22} />
                  },
                  
                }}
              />
              <Tab.Screen
                name='Pratique'
                component={PratiqueScreen}
                options={{
                  tabBarIcon: ({ color }) => {
                    return <Icon name='play-outline' color={ color } size={22} />
                  }
                }}
              />
              <Tab.Screen
                name='Pesquise'
                component={PesquiseScreen}
                options={{
                  tabBarIcon: ({ color }) => {
                    return <Icon name='search-outline' color={ color } size={22} />
                  }
                }}
              />
              <Tab.Screen
                name='Aprenda'
                component={AprendaScreen}
                options={{
                  tabBarIcon: ({ color }) => {
                    return <Icon name='book-outline' color={ color } size={22} />
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

