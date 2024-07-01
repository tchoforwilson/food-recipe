import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { AppText } from "../texts";
import defaultStyles from "../../configurations/styles";
import { Icon } from "../common";
import { AppBlurView } from "../../layout";

const RecipeCardDetails = ({ recipe }) => {
  return (
    <View style={styles.recipeDetailsContainer}>
      <View style={styles.recipeDetails}>
        <AppText style={styles.recipeDetailsName}>{recipe.name}</AppText>
        <Icon
          style={styles.recipeDetailsIcon}
          name={recipe.isBookmark ? "bookmark" : "bookmark-empty"}
          color={defaultStyles.COLORS.darkGreen}
          size={20}
        />
      </View>

      <AppText
        style={styles.recipeDetailsText}
      >{`${recipe.duration} | ${recipe.serving} Serving`}</AppText>
    </View>
  );
};

const RecipeCardInfo = ({ recipe }) => {
  return (
    <AppBlurView
      style={styles.blurContainer}
      bgColor={defaultStyles.COLORS.transparentDarkGray}
      tint="dark"
    >
      <RecipeCardDetails recipe={recipe} />
    </AppBlurView>
  );
};

const TrendingRecipeCard = ({ recipe, onPress, containerStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Image source={recipe.image} resizeMode="cover" style={styles.image} />
      <View style={styles.details}>
        <AppText
          style={{
            color: defaultStyles.COLORS.white,
            ...defaultStyles.THEMES.FONTS.h4,
          }}
        >
          {recipe.category}
        </AppText>
      </View>
      <AppText style={styles.text}>{recipe.category}</AppText>

      {/** Card Info */}
      <RecipeCardInfo recipe={recipe} />
    </TouchableOpacity>
  );
};

const recipeValidation = {
  name: PropTypes.string.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  serving: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

RecipeCardDetails.propTypes = {
  recipe: {
    ...recipeValidation,
  },
};

RecipeCardInfo.propTypes = {
  recipe: {
    ...recipeValidation,
  },
};

TrendingRecipeCard.propTypes = {
  recipe: { ...recipeValidation },
  onPress: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
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
  text: {
    color: defaultStyles.COLORS.white,
    ...defaultStyles.THEMES.FONTS.h4,
  },
  blurContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: defaultStyles.THEMES.SIZES.radius,
    paddingHorizontal: defaultStyles.THEMES.SIZES.base,
    borderRadius: defaultStyles.THEMES.SIZES.radius,
  },
  recipeDetailsContainer: {
    flex: 1,
  },
  recipeDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recipeDetailsName: {
    width: "70%",
    color: defaultStyles.COLORS.white,
    ...defaultStyles.THEMES.FONTS.textTertiary,
    fontSize: 18,
  },
  recipeDetailsIcon: {
    marginRight: defaultStyles.THEMES.SIZES.base,
  },
  recipeDetailsText: {
    color: defaultStyles.COLORS.lightGray,
    ...defaultStyles.THEMES.FONTS.body4,
  },
});

export default TrendingRecipeCard;
