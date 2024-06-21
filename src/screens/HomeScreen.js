import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AppScreen } from "../layout";

import defaultStyles from "../configurations/styles";
import data from "../configurations/data";
import { CategoryCard, TrendingRecipeCard } from "../components/cards";
import { AppText } from "../components/texts";
import { AppTextInput } from "../components/inputs";
import { Icon } from "../components/common";

const HomeScreen = ({ navigation }) => {
  /**
   * @details header
   * @returns
   */
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <AppText style={styles.greetings}>Hello Wilson</AppText>
          <AppText style={styles.question}>
            What do you want to cook today?
          </AppText>
        </View>
        {/** TODO: This should navigate to user profile screen */}
        <TouchableOpacity onPress={() => console.log("profile")}>
          <Image
            source={defaultStyles.IMAGES.profile}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  /**
   * Search bar
   */

  const renderSearchBar = () => {
    return (
      <View style={styles.searchBar}>
        <Icon color={defaultStyles.COLORS.gray} name="magnify" size={30} />
        <AppTextInput
          placeholder="Search Recipes"
          style={styles.searchInput}
          placeholderTextColor={defaultStyles.COLORS.gray}
        />
      </View>
    );
  };

  /**
   *
   * @breif Recipe card
   */
  const renderRecipeCard = () => {
    return (
      <View style={styles.recipeCard}>
        <View style={styles.imageContainer}>
          <Image
            source={defaultStyles.IMAGES.recipe}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View style={styles.recipeText}>
          <AppText
            style={{ width: "70%", ...defaultStyles.THEMES.FONTS.body4 }}
          >
            You have 12 recipes that you haven't tried yet
          </AppText>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => console.log("See Recipes")}
          >
            <AppText
              style={{
                color: defaultStyles.COLORS.darkGreen,
                textDecorationLine: "underline",
                ...defaultStyles.THEMES.FONTS.h4,
              }}
            >
              See Recipes
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  /**
   * @breif Trending section
   */

  const renderTrendingSection = () => {
    return (
      <View style={{ marginTop: defaultStyles.THEMES.SIZES.padding }}>
        <AppText style={{ ...defaultStyles.THEMES.FONTS.headingSecondary }}>
          Trending Recipe
        </AppText>
        <FlatList
          data={data.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TrendingRecipeCard
              containerStyle={{
                marginLeft: index == 0 ? defaultStyles.THEMES.SIZES.padding : 0,
              }}
              recipe={item}
              onPress={navigation.navigate("Recipe", { recipe: item })}
            />
          )}
        />
      </View>
    );
  };

  const renderCategoryHeader = () => {
    return (
      <View style={styles.categoryHeaderContainer}>
        <AppText
          style={{ flex: 1, ...defaultStyles.THEMES.FONTS.headingSecondary }}
        >
          Categories
        </AppText>
        <TouchableOpacity>
          <AppText
            style={{
              color: defaultStyles.COLORS.gray,
              ...defaultStyles.THEMES.FONTS.body4,
            }}
          >
            View All
          </AppText>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderSearchBar()}
            {renderRecipeCard()}
            {renderTrendingSection()}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            onPress={() => navigation.navigate("Recipe", { recipe: item })}
          />
        )}
        ListFooterComponent={<View style={{ marginBottom: 100 }} />}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginHorizontal: defaultStyles.THEMES.SIZES.padding,
    alignItems: "center",
    height: 80,
  },
  greetings: {
    color: defaultStyles.COLORS.darkGreen,
    ...defaultStyles.THEMES.FONTS.headingSecondary,
  },
  question: {
    marginTop: 3,
    color: defaultStyles.COLORS.gray,
    ...defaultStyles.THEMES.FONTS.textTertiary,
  },
  searchBar: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    paddingHorizontal: defaultStyles.THEMES.SIZES.radius,
    borderRadius: 10,
    backgroundColor: defaultStyles.COLORS.lightGray,
  },
  searchInput: {
    marginLeft: defaultStyles.THEMES.SIZES.radius,
  },
  recipeCard: {
    flexDirection: "row",
    marginTop: defaultStyles.THEMES.SIZES.padding,
    borderRadius: 10,
    backgroundColor: defaultStyles.COLORS.lightGreen,
  },
  imageContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  recipeText: {
    flex: 1,
    paddingVertical: defaultStyles.THEMES.SIZES.radius,
  },
  categoryHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});

export default HomeScreen;
