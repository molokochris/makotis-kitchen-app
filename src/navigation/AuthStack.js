import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import ProfileInfo from "../screens/ProfileInfo";
import Registration from "../screens/Registration";

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Registration} />
      <Stack.Screen name="UserInfo" component={ProfileInfo} />
    </Stack.Navigator>
  );
}
