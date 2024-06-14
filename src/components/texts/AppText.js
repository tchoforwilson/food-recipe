import React from "react";
import { Text } from "react-native";

const AppText = ({ children, style, ...otherProps }) => {
  return <Text style={[style]}>{children}</Text>;
};

export default AppText;
