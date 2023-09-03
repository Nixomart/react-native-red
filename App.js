import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import Navigation from './Navigation'
import Item from "./src/components/Items";
export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (

    <Navigation />
 /*    <SafeAreaView className='dark:bg-black '>
      <View className="">
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
        </View>
        <Item />
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  */ );
}
