import React from "react";
import { StyleSheet, Platform, ScrollView } from "react-native";

const KeyboardAvoidingView = ({ children, style }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={[styles.content, style]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
  content: {
    flex: 1,
    width: "100%",
  },
});

export default KeyboardAvoidingView;
