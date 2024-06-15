import React from "react";
import { StyleSheet, Text } from "react-native";
import defaultStyles from "../../configurations/styles";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: defaultStyles.COLORS.white,
    fontSize: defaultStyles.THEMES.SIZES.base,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
