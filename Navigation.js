import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import Item from "./src/components/Items";
import { View, Text } from "react-native";
 import { useColorScheme } from "nativewind";

const Tab = createBottomTabNavigator()
 function MyTabs() {
  const { colorScheme } = useColorScheme();

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarActiveTintColor: 'black'}}>
        <Tab.Screen  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View className={'bg-red-500'}>
              <Text className='dark:text-red-600'>asd</Text>
            </View>
          ),
        }} name="Home" component={HomeScreen}/>
        <Tab.Screen name="Products" component={Item}/>
        <Tab.Screen name="Settings" component={SettingScreen}/>
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer className='dark:bg-slate-700' >
        <MyTabs />
    </NavigationContainer>
  )
}

