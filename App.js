import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import * as Font from "expo-font";
import AppNavigator from "./AppNavigator";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();

    NavigationBar.setBackgroundColorAsync("#E8E8E8");
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
