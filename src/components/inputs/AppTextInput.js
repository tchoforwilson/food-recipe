import React from "react";
import { StyleSheet, TextInput } from "react-native";
import defaultStyles from "../../configurations/styles";

const AppTextInput = ({
  placeholder,
  width = "100%",
  style,
  ...otherProps
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.input, style]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    ...defaultStyles.THEMES.FONTS.textTertiary,
  },
});

export default AppTextInput;
