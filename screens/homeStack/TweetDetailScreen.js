import { useNavigation, useRoute } from "@react-navigation/native";
import React, {  useLayoutEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import TweetContent from "../../src/components/TweetContent";

export default function TweetDetailScreen () {
  const {
    params: { tweet },
  } = useRoute();
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: tweet.author.name + ' @' + tweet.author.screenName   
    })
  },[])
  return (
    <View testID="TweetDetailScreen" style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
