import React from 'react';
import MovieListScreen from './src/screens/MovieListScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from './src/screens/SettingsScreen';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import {View} from 'react-native';

import {HomeIcon, Cog6ToothIcon} from 'react-native-heroicons/outline';
import AddMovieScreen from './src/screens/addMovieScreen';
import {ThemeProvader, useTheme} from './src/themes/themeProvider';

const App = () => {
  function BottomTabs() {
    const {colors} = useTheme();
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: colors.background},
        }}>
        <Tab.Screen
          name="Home"
          component={MovieListScreen}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <HomeIcon color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Cog6ToothIcon color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Provider store={Store}>
      <ThemeProvader>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tabs" component={BottomTabs} />
            <Stack.Screen
              name="AddMovie"
              component={AddMovieScreen}
              options={{
                headerTitle: 'Add Movie',
                headerShown: 'true',
                headerBackTitle: '',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvader>
    </Provider>
  );
};

export default App;
