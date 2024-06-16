import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ color, name, size }) => {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
};

export default Icon;
