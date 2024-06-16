import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AppText } from "../texts";

import defaultStyles from "../../configurations/styles";

const CategoryCard = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <Image source={category.image} resizeMode="cover" style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.name}>{category.name}</AppText>
        <AppText
          style={styles.duration}
        >{`${category.duration} | ${category.serving} serving`}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: defaultStyles.THEMES.SIZES.radius,
    backgroundColor: defaultStyles.COLORS.gray2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: defaultStyles.THEMES.SIZES.radius,
  },
  details: {
    width: "65%",
    paddingHorizontal: 20,
  },
  name: {
    flex: 1,
    ...defaultStyles.THEMES.FONTS.headingSecondary,
  },
  duration: {
    color: defaultStyles.COLORS.gray,
    ...defaultStyles.THEMES.FONTS.body4,
  },
});

export default CategoryCard;
