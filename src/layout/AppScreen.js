import React from "react";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

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
    backgroundColor: "#fff",
    padding: 24,
    paddingTop: Constants.statusBarHeight,
  },
});

export default AppScreen;
