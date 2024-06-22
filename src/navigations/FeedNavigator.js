import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, RecipeScreen } from "../screens";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
