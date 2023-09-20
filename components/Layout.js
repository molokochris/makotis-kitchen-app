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

export default function Layout({ navigation, route }) {
  return (
    <SafeAreaView
      style={[styles.container, { flex: 1, backgroundColor: "#212529" }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar />
        <View style={{ paddingTop: "10%", flex: 1 }}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={layoutStyles.peel}>
          <View style={layoutStyles.topBar}>
            <View style={{ width: "40%" }}>
              <Pressable onPress={() => navigation.navigate("Home")}>
                <Image
                  source={require("../assets/images/menu/back.png")}
                  style={layoutStyles.image}
                />
              </Pressable>
            </View>
            <Text style={layoutStyles.nameLayout}>{route.params.name}</Text>
          </View>
          <Text>This is the text</Text>
          <Pressable
            style={layoutStyles.floatBar}
            // onPress={() => navigation.goBack()}
            // onPress={() => navigation.navigate("Layout", { name: "Orders" })}
          >
            <Text
              style={{
                color: "whitesmoke",
                fontSize: 25,
                paddingLeft: 10,
                fontWeight: "bold",
                flex: 1,
                // backgroundColor: "gray",
              }}
            >
              Orders{" "}
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
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
