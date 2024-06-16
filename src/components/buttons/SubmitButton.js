import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "./AppButton";

import defaultStyles from "../../configurations/styles";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} onPress={handleSubmit} style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: defaultStyles.COLORS.lightGreen,
  },
});

export default SubmitButton;
