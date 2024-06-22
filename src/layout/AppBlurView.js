import React from "react";
import { View, Platform } from "react-native";
import { BlurView } from "expo-blur";
import PropTypes from "prop-types";

/**
 * @breif Render a blu view
 * @param {JSX} children Children components or items
 * @param {Object} style Container style which applies to both Android and Ios
 * @param {String} bgColor Background color for Android
 * @returns {JSX}
 */
const AppBlurView = ({ children, style, bgColor, ...otherProps }) => {
  return Platform.OS === "ios" ? (
    <BlurView style={style} {...otherProps}>
      {children}
    </BlurView>
  ) : (
    <View style={[style, { backgroundColor: bgColor }]}>{children}</View>
  );
};

AppBlurView.protoTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default AppBlurView;
