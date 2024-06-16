import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AppButton } from "../components/buttons";
import defaultStyles from "../configurations/styles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <ImageBackground
          source={defaultStyles.IMAGES.loginBackground}
          style={styles.image}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[
              defaultStyles.COLORS.transparent,
              defaultStyles.COLORS.black,
            ]}
            style={styles.gradient}
          >
            <Text style={styles.title}>Cooking a Delicious Food Easily</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      {/**Details section */}
      <View style={styles.details}>
        <Text style={styles.description}>
          Discover more than 1200 food recipes in your hands and cooking it
          easily!
        </Text>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("Home")}
            textColor={defaultStyles.COLORS.white}
            bgColors={[
              defaultStyles.COLORS.darkGreen,
              defaultStyles.COLORS.lime,
            ]}
            style={styles.button}
          />
          <AppButton
            title="Sign Up"
            onPress={() => navigation.navigate("Home")}
            textColor={defaultStyles.COLORS.white}
            style={[styles.button, styles.signupButton]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.COLORS.black,
  },
  header: {
    height: defaultStyles.THEMES.SIZES.height > 700 ? "65%" : "60%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  gradient: {
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: defaultStyles.THEMES.SIZES.padding,
  },
  title: {
    width: "80%",
    color: defaultStyles.COLORS.white,
    ...defaultStyles.THEMES.FONTS.largeTitle,
    lineHeight: 45,
  },
  details: {
    flex: 1,
    paddingHorizontal: defaultStyles.THEMES.SIZES.padding,
  },
  description: {
    marginTop: defaultStyles.THEMES.SIZES.radius,
    color: defaultStyles.COLORS.gray,
    ...defaultStyles.THEMES.FONTS.textTertiary,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    paddingVertical: 18,
    borderRadius: 20,
    borderWidth: 1,
  },
  signupButton: {
    marginTop: defaultStyles.THEMES.SIZES.radius,
    borderColor: defaultStyles.COLORS.darkLime,
  },
});

export default WelcomeScreen;
