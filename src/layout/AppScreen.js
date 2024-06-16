import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

import defaulStyles from "../configurations/styles";

const AppScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: defaulStyles.COLORS.white,
    padding: 24,
    paddingTop: Constants.statusBarHeight,
  },
});

export default AppScreen;
