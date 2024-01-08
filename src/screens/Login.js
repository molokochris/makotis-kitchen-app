import {
  View,
  Text,
  StatusBar,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext } from "react";
import AppLogo from "../components/AppLogo";
import InputForm from "../components/InputForm";
import { AuthContext } from "../context/AuthContext";

export default function Login({ navigation }) {
  const { login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
  };
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={{ height: 140, resizeMode: "center" }}
        />
      </View>
      <View
        style={{
          flex: 2,
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
        {/* <AppLogo color={"#00000"} size={20} /> */}
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
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 12,
                // color: "#212529",
                color: "tomato",
              }}
            >
              Forgot Password?
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 12,
                  color: "navy",
                }}
              >
                Register an account
              </Text>
            </Pressable>
          </View>
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
          onPress={handleLogin}
        >
          <Text style={{ color: "whitesmoke", fontFamily: "Mansalva-Regular" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
