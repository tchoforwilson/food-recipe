import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppText } from "../texts";

import defaultStyles from "../../configurations/styles";

const AppButton = ({
  title,
  onPress,
  textColor = defaultStyles.COLORS.white,
  bgColors = [],
  ...otherProps
}) => {
  return bgColors.length > 0 ? (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={bgColors}
        {...otherProps}
      >
        <AppText style={[styles.text, { color: textColor }]}>{title}</AppText>
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress} {...otherProps}>
      <AppText style={[styles.text, { color: textColor }]}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    ...defaultStyles.THEMES.FONTS.textTertiary,
  },
});

export default AppButton;
