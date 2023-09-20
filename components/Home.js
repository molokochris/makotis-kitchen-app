import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import logo from "../assets/images/logo/Logo.png";
import searchIcon from "../assets/images/logo/Search.png";
import starters from "../assets/images/logo/starters.jpg";
import main from "../assets/images/menu/boroso.jpg";
import dessert from "../assets/images/menu/desert.jpg";
import Notification from "../assets/images/logo/Notification.png";
import styles from "../assets/styles/Home";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, { flex: 1 }]}>
      <StatusBar style="light" backgroundColor="#212529" translucent={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: "10%", backgroundColor: "#212529" }}>
          <Image source={logo} style={styles.image} />
        </View>
        <View>
          <View style={styles.head}>
            <View>
              <Text style={styles.locationText}>Location</Text>
              <Text style={styles.locationSubText}>Mankweng, Unit-E</Text>
            </View>
            <View style={styles.bell}>
              <Image style={{ width: 20, height: 20 }} source={Notification} />
              <View style={styles.numNotification}>
                <Text style={{ color: "#212529" }}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.searchInput}>
            <Image source={searchIcon} style={{ width: 30, height: 30 }} />
            <TextInput
              style={{ flex: 1, paddingVertical: 5 }}
              placeholder="feed your cravings.."
              multiline={false}
              maxLength={15}
              selectionColor="#212529"
            />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.tab}>
            <Image source={starters} style={styles.pillImage} />
            <Pressable
              style={styles.pill}
              onPress={() =>
                navigation.navigate("Layout", { name: "Starters" })
              }
            >
              <Text style={styles.pillText}>Starters</Text>
            </Pressable>
          </View>
          <View style={styles.tab}>
            <Image source={main} style={styles.pillImage} />
            <Pressable
              style={styles.pill}
              onPress={() => navigation.navigate("Layout", { name: "Main" })}
            >
              <Text style={styles.pillText}>Main</Text>
            </Pressable>
          </View>
          <View style={styles.tab}>
            <Image source={dessert} style={styles.pillImage} />
            <Pressable
              style={styles.pill}
              onPress={() => navigation.navigate("Layout", { name: "Dessert" })}
            >
              <Text style={styles.pillText}>Dessert</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
