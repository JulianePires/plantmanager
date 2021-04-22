import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled: boolean;
}

export function Button({ title, disabled, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, disabled ? { opacity: 0.5 } : { opacity: 1 }]}
      activeOpacity={0.7}
      disabled={disabled}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading,
  },
});
