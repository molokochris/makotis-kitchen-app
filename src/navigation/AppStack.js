import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Main";

export default function AppStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Main} />
      {/* <Stack.Screen
        name="cart"
        component={Cart}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "whitesmoke",
          },
          headerTitleStyle: {
            color: "#000000",
          },
          headerTitle: "",
          headerTitleAlign: "center",
        }}
      /> */}
    </Stack.Navigator>
  );
}
