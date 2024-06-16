import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
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
    color: defaultStyles.COLORS.black,
    fontSize: defaultStyles.THEMES.SIZES.base,
  },
});

export default AppText;
