import React from "react";
import {  FlatList, Text, View } from "react-native";
import { productos } from "../../data";
import Product from "./Product";
export default function Item() {
  return (
      <FlatList  data={productos} keyExtractor={(product) => product.id } renderItem={({item})=> <Product {...item} />} />
  );
}
