import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from "react-native";

import { AppText } from "../texts";

import defaultStyles from "../../configurations/styles";

const TrendingRecipeCard = ({ recipe, onPress, containerStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Image source={recipe.image} resizeMode="cover" style={styles.image} />
      <View style={styles.details}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 250,
    marginTop: defaultStyles.THEMES.SIZES.radius,
    marginRight: 20,
    borderRadius: defaultStyles.THEMES.SIZES.radius,
  },
  image: {
    width: 250,
    height: 350,
    borderRadius: defaultStyles.THEMES.SIZES.radius,
  },
  details: {
    position: "absolute",
    top: 20,
    left: 15,
    paddingHorizontal: defaultStyles.THEMES.SIZES.radius,
    paddingVertical: 5,
    backgroundColor: defaultStyles.COLORS.transparentGray,
    borderRadius: defaultStyles.THEMES.SIZES.radius,
  },
});

export default TrendingRecipeCard;
