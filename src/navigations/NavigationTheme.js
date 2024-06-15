import { DefaultTheme } from "@react-navigation/native";
import colors from "../configurations/styles/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.black,
    background: colors.lightGray,
  },
};
