import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import logo from "../assets/images/logo/Logo.png";
import styles from "../assets/styles/Home";
import layoutStyles from "../assets/styles/LayoutStyle";
import { Ionicons } from "@expo/vector-icons";

export default function Layout({ navigation, route }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#212529" }}>
      <StatusBar translucent={false} />
      <View
        style={{
          // flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          // paddingVertical: "8%",
          padding: 10,
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={30}
            color="whitesmoke"
          />
        </Pressable>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "whitesmoke", fontWeight: "500" }}>
            {route.params.name}
          </Text>
          {/* <Image source={logo} style={styles.image} /> */}
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "whitesmoke",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 10,
        }}
      >
        <View style={{ flex: 9, paddingBottom: "25%" }}>
          <View
            style={{
              width: "100%",
              height: 60,
              backgroundColor: "tomato",
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
          >
            <Text>Item</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          // flex: 1,
          alignSelf: "center",
          borderRadius: 20,
          zIndex: 2,
          backgroundColor: "#212529",
          position: "absolute",
          bottom: 20,
          // alignSelf: "baseline",
          width: "98%",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          paddingVertical: "3%",
          paddingHorizontal: 10,
        }}
      >
        {/* <Pressable
          style={layoutStyles.floatBar}
          // onPress={() => navigation.goBack()}
          // onPress={() => navigation.navigate("Layout", { name: "Orders" })} 
        >*/}
        <Text
          style={{
            color: "whitesmoke",
            fontSize: 24,
            paddingLeft: 10,
            fontWeight: "500",
            flex: 1,
            // backgroundColor: "gray",
          }}
        >
          Orders
          {/* <View
                style={{
                  flex: 1,
                  // height: 20,
                  // width: 20,
                  // backgroundColor: "yellow",
                  borderRadius: 100,
                  padding: 20,
                }}
              >
                <Text style={{ fontSize: 20, color: "whitesmoke" }}>5</Text>
              </View> */}
        </Text>
        <Text style={layoutStyles.price}>R 0, 00</Text>
        {/* </Pressable> */}
      </View>
    </SafeAreaView>
  );
}
