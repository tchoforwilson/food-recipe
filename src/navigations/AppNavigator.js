import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedNavigator from "./FeedNavigator";
import { TabIcon } from "../components/common";
import defaultStyles from "../configurations/styles";
import { LoginScreen } from "../screens";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarOptions,
      }}
    >
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <TabIcon focused={focused} name="home" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <TabIcon focused={focused} name="magnify" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <TabIcon focused={focused} name="bookmark" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <TabIcon focused={focused} name="settings" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarOptions: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: defaultStyles.COLORS.white,
    borderTopColor: "transparent",
    height: 100,
  },
});

export default AppNavigator;
