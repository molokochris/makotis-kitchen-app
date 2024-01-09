import React, { useContext, useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  Octicons,
  Fontisto,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import { AuthContext } from "../context/AuthContext";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";

export default function Main({ route }) {
  const Tab = createBottomTabNavigator();
  const { logout } = useContext(AuthContext);

  // useEffect(() => {
  //   logout();
  // });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#212529",
          borderTopWidth: 0,
          borderColor: "black",
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          // left: "1%",
          // width: "98%",
          // alignSelf: "center",
          // borderRadius: 18,
          borderTopEndRadius: 15,
          borderTopStartRadius: 15,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "whitesmoke",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Octicons name="home" size={18} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Octicons name="search" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Octicons name="heart" size={18} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="user-o" size={18} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
