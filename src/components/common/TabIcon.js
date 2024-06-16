import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import defaultStyles from "../../configurations/styles";

const TabIcon = ({ focused, name, size }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={name}
        color={
          focused
            ? defaultStyles.COLORS.darkGreen
            : defaultStyles.COLORS.lightLime
        }
        size={size}
      />
      {focused && <View style={styles.line}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 80,
  },
  line: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: defaultStyles.COLORS.darkGreen,
  },
});

export default TabIcon;
