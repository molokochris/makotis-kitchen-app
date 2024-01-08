import { View, Text, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../context/AuthContext";
import AppStack from "./AppStack";

export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  useEffect(() => {
    console.log(`userToken: ${userToken}`);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#808080" />
      </View>
    );
  }
  return (
    // <Provider store={store}>
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
    // {/* </Provider> */}
  );
}
