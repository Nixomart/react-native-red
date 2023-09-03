import React from "react";
import { View, Switch } from "react-native";
import { useColorScheme } from "nativewind";

export default function SettingScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View>
      <View className="">
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
    </View>
  );
}
