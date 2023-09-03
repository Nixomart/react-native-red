import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
/* import {AntDesign} from '@expo/vector-icon'
 */ import { useColorScheme } from "nativewind";
export default function Product({
  image,
  name,
  category,
  price,
  offert,
  offert_price,
}) {
  const [count, setount] = useState(1);

  const { colorScheme } = useColorScheme();
  return (
    <View className="w-11/12 self-center shadow-md p-5 mb-3 rounded-lg  bg-white  dark:bg-slate-700 ">
      <View className="rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72 object-contain "
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View>
        <Text className="text-2xl font-semibold mb-3 text-gray-400 dark:text-gray-400">
          {category}
        </Text>
          <Text className="text-2xl font-semibold dark:text-white">{name}</Text>
        <View className="">
          {offert ? (
            <View>
              <Text className="text-2xl text line-through  dark:text-white">
                ${price}
              </Text>
              <Text className="text-4xl  dark:text-white">
                ${offert_price}
              </Text>
            </View>
          ) : (
            <Text className="text-2xl  dark:text-white">
              ${price}
            </Text>
          )}
        </View>
        <TouchableOpacity className='bg-black p-5 rounded-3xl'>
            <Text className='text-white text-center text-lg'>
                Add To Cart
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
