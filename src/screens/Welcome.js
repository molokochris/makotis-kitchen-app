import { useCallback, useEffect } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import AppLogo from "../components/AppLogo";

SplashScreen.preventAutoHideAsync();

export default function Welcome({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Mansalva-Regular": require("../../assets/fonts/Mansalva/Mansalva-Regular.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter/static/Inter-Regular.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter/static/Inter-Bold.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter/static/Inter-Medium.ttf"),
  });
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("Login"); // Replace 'Login' with the actual name of your login screen
    }, 2000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#212529",
        flexDirection: "column",
      }}
    >
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {/* <Text style={{ fontFamily: "Mansalva-Regular", color: "whitesmoke" }}>
        Welcome
      </Text> */}
      <Image
        source={require("../../assets/images/Logo.png")}
        style={{ height: 120, resizeMode: "center" }}
      />
      <AppLogo color={"whitesmoke"} size={20} />
    </View>
  );
}
