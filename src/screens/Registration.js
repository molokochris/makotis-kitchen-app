import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import InputForm from "../components/InputForm";
import AppLogo from "../components/AppLogo";

export default function Registration({ navigation }) {
  function handleRegistration() {
    navigation.navigate("Login");
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212529",
      }}
    >
      <StatusBar
        translucent={false}
        barStyle={"light-content"}
        backgroundColor={"#212529"}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "#E9ECEF",
          paddingTop: 18,
          paddingHorizontal: 10,
          width: "100%",
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <AppLogo color={"#212529"} size={20} />
        <View
          style={{
            marginTop: "8%",
            flex: 1,
            // justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-Regular",
              alignSelf: "flex-start",
              fontSize: 12,
              marginBottom: 10,
              color: "#212529",
            }}
          >
            Full Names
          </Text>
          <InputForm placeholder={"Full Names"} width={"100%"} />
          <Text
            style={{
              fontFamily: "Inter-Regular",
              alignSelf: "flex-start",
              fontSize: 12,
              marginBottom: 10,
              color: "#212529",
            }}
          >
            Contact Numbers
          </Text>
          <InputForm placeholder={"Contact Numbers"} width={"100%"} />

          <Text
            style={{
              fontFamily: "Inter-Regular",
              alignSelf: "flex-start",
              fontSize: 12,
              marginBottom: 10,
              color: "#212529",
            }}
          >
            Email Address
          </Text>
          <InputForm placeholder={"Email Address"} width={"100%"} />
          <Text
            style={{
              fontFamily: "Inter-Regular",
              alignSelf: "flex-start",
              fontSize: 12,
              marginBottom: 10,
              color: "#212529",
            }}
          >
            Password
          </Text>
          <InputForm placeholder={"Password"} width={"100%"} />
          {/* <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
            > */}
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 10,
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 12,
                color: "navy",
              }}
            >
              Login instead
            </Text>
          </Pressable>
          {/* </View> */}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#212529",
            position: "absolute",
            bottom: 0,
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            zIndex: 1,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "whitesmoke", fontFamily: "Mansalva-Regular" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
