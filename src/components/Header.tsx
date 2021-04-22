import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import colors from "../styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Olá,</Text>
        <Text>Juliane!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: colors.red,
    marginTop: getStatusBarHeight(),
  },
});
