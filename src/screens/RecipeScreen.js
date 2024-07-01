import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import PropTypes from "prop-types";

import { AppBlurView, AppScreen } from "../layout";
import { AppText } from "../components/texts";
import { Icon } from "../components/common";
import defaultStyles from "../configurations/styles";

const HEADER_HEIGHT = 350;

const IngredientItem = ({ recipe }) => {
  return (
    <View style={styles.ingredientContainer}>
      <View style={styles.ingredientIcon}>
        <Image source={recipe.icon} style={styles.ingredientImage} />
      </View>
      <View style={styles.ingredientDescription}>
        <AppText style={{ ...defaultStyles.THEMES.FONTS.textTertiary }}>
          {recipe.description}
        </AppText>
      </View>
      <View style={styles.ingredientQuantity}>
        <AppText style={{ ...defaultStyles.THEMES.FONTS.textTertiary }}>
          {recipe.quantity}
        </AppText>
      </View>
    </View>
  );
};

const RecipeCreatorCardInfo = ({ recipe }) => {
  return (
    <AppBlurView
      blurType="dark"
      bgColor={defaultStyles.COLORS.transparentBlack9}
      style={{ flex: 1, borderRadius: defaultStyles.THEMES.SIZES.radius }}
    >
      <View style={styles.creatorContainer}>
        <View style={styles.creatorImgContainer}>
          <Image
            source={recipe?.author?.profilePic}
            style={styles.creatorImg}
          />
        </View>
        <View style={styles.creatorLabel}>
          <AppText
            style={{
              color: defaultStyles.COLORS.lightGray2,
              ...defaultStyles.THEMES.FONTS.body4,
            }}
          >
            Recipe by:
          </AppText>
          <AppText
            style={{
              color: defaultStyles.COLORS.white,
              ...defaultStyles.THEMES.FONTS.headingTertiary,
            }}
          >
            {recipe?.author?.name}
          </AppText>
        </View>
        <TouchableOpacity
          style={styles.creatorBtn}
          onPress={() => console.log("View Profile")}
        >
          <Icon
            name="chevron-right"
            size={15}
            color={defaultStyles.COLORS.lightGreen1}
          />
        </TouchableOpacity>
      </View>
    </AppBlurView>
  );
};

// IngredientItem.propTypes = {
//   item: PropTypes.object({
//     icon: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     quantity: PropTypes.string.isRequired,
//   }),
// };

const RecipeScreen = ({ navigation, route }) => {
  const [recipe, setRecipe] = useState(null);

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let { recipe } = route.params;
    setRecipe(recipe);
  }, []);

  const renderHeaderBar = () => {
    return <View style={{}}></View>;
  };

  const renderRecipeCardHeader = () => {
    return (
      <View style={styles.recipeHeader}>
        <Animated.Image
          source={recipe?.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: "200%",
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
        <Animated.View
          style={[
            styles.recipeCreator,
            {
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, 170, 250],
                    outputRange: [0, 0, 100],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}
        >
          <RecipeCreatorCardInfo recipe={recipe} />
        </Animated.View>
      </View>
    );
  };

  const HeaderComponentItem = ({ recipe }) => {
    return <View>{renderRecipeCardHeader()}</View>;
  };

  return (
    <AppScreen style={styles.screen}>
      <Animated.FlatList
        data={recipe?.ingredients}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HeaderComponentItem recipe={recipe} />}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => <IngredientItem recipe={item} />}
      />

      {renderHeaderBar()}
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  ingredientContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginVertical: 5,
  },
  ingredientIcon: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: defaultStyles.COLORS.lightGray,
  },
  ingredientImage: {
    height: 40,
    width: 40,
  },
  ingredientDescription: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  ingredientQuantity: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  recipeHeader: {
    alignItems: "center",
    overflow: "hidden",
    marginTop: -1000,
    paddingTop: 1000,
  },
  recipeCreator: {
    position: "absolute",
    bottom: 10,
    left: 30,
    right: 30,
    height: 80,
  },
  creatorContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  creatorImgContainer: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
  creatorImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  creatorLabel: {
    flex: 1,
    marginHorizontal: 20,
  },
  creatorBtn: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: defaultStyles.COLORS.lightGreen1,
  },
});

export default RecipeScreen;
