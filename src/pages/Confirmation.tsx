import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate("PlantSelect");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😁</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.start}>
          <Button disabled={false} title="Começar" onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 25,
    color: colors.heading,
    textAlign: "center",
    paddingVertical: 10,
  },
  start: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 50,
  },
});
