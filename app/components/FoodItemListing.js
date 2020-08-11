import React from "react";
import { FlatList } from "react-native";

import FoodItemCollapsible from "./FoodItemCollapsible";

function FoodItemListing({ data2, ...otherProps }) {
  return (
    <FlatList
      data={["Snacks", "Veg", "NonVeg"]}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <FoodItemCollapsible category={item} foods={data2} />
      )}
      {...otherProps}
    />
  );
}

export default FoodItemListing;
