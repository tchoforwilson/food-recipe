import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../components/texts";

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <AppText>Login screen</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
