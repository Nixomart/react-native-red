import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

//screens
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/tabScreen/HomeScreen";
import SettingScreen from "./screens/tabScreen/SettingScreen";
import TweetDetails from "./screens/homeStack/TweetDetailScreen";
import Item from "./src/components/Items";
import { useColorScheme } from "nativewind";
import FeedScreen from "./screens/FeedScreen";
import { Ionicons } from "@expo/vector-icons";
import Feed from "./screens/FeedScreen";
import Payments from "./screens/drawnerScreens/Payments";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//inizialite

//top tabs

const TopTab = createMaterialTopTabNavigator()

function MyTopTabs (){
  return(
    <TopTab.Navigator
    screenOptions={{
      tabBarLabelStyle: {
        textTransform: 'capitalize',
        fontWeight: 'bold'
        
      },
      tabBarIndicatorStyle:{
        height: 5,
        backgroundColor: '#1DA1F2',
        borderRadius: 5
      }
    }}>
      <TopTab.Screen name="Main" component={Feed} />
      <TopTab.Screen name="Following" component={Payments} />
      <TopTab.Screen name="Profile" component={Payments} />
    </TopTab.Navigator>
  )
}

//drawer
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    /* screenOptions={{headerShown:false}} */
    
    >
      <Drawer.Screen
        name="StackGroup"
        component={MyStackNavigator}
        //header show false - drawer false
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Payments" component={Payments} />
    </Drawer.Navigator>
  );
}
//stack

const Stack = createNativeStackNavigator();
function MyStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabGroup"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ presentation: "modal", headerTitle: "Details" }}
        name="TweetDetailScreen"
        component={TweetDetails}
      />
    </Stack.Navigator>
  );
}

//tabs menu
const Tab = createBottomTabNavigator();
function MyTabs() {
  const { colorScheme } = useColorScheme();

  return (
    //routes
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "ios-settings-sharp";
          } else if (route.name === "Notifications") {
            iconName = focused ? "ios-notifications" : "notifications-outline";
          } else if (route.name === "Products") {
            iconName = focused ? "ios-cart" : "ios-cart-outline";
          } else if (route.name === "Feed") {
            iconName = focused ? "ios-newspaper" : "ios-newspaper-outline";
          }
          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          );
        },
      })}
    >
      {/*   <Tab.Screen
        options={{
          tabBarLabel: "Home",
        }}
        name="Home"
        component={HomeScreen}
      /> */}
      <Tab.Screen name="Feed" component={MyTopTabs} />
      <Tab.Screen name="Products" component={Item} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const { colorScheme } = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <MyDrawer />
      {/* <MyStackNavigator /> */}
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
}
