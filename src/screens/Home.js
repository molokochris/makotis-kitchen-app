import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
  Button,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import AppLogo from "../components/AppLogo";
import {
  Ionicons,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Octicons,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/compat/app";
import { getStorage, list, ref, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import PopularItems from "../components/PopularItems";
// import HomeSkeleton from "../components/HomeSkeleton";

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [startersMenu, setStartersMenu] = useState(null);
  const [dessertMenu, setDessertMenu] = useState(null);
  const [mainMenu, setMainMenu] = useState(null);
  const [sidesMenu, setSidesMenu] = useState(null);
  const [allMenu, setAllMenu] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showItems, setShowItems] = useState("Best");
  const [items, setItems] = useState([]);

  const [fontsLoaded] = useFonts({
    "Mansalva-Regular": require("../../assets/fonts/Mansalva/Mansalva-Regular.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter/static/Inter-Regular.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter/static/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../../assets/fonts/Inter/static/Inter-ExtraBold.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter/static/Inter-Medium.ttf"),
  });
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const docSnap = await firestore.collection("menu").doc("main").get();
        const querySnapshot = await firestore.collection("menu").get();
        const allMenuData = querySnapshot.docs.map((doc) => doc.data());

        const allMenu = docSnap.data();
        console.log(allMenuData);
        setAllMenu(allMenuData);
        setDessertMenu(allMenu.dessert);
        setMainMenu(allMenu.main);
        setSidesMenu(allMenu.sides);
        setStartersMenu(allMenu.starters);
        setCategories(Object.keys(allMenu));

        // Do something with the fetched data
      } catch (error) {
        console.error("Error fetching menu data:", error);
        // Handle the error appropriately (e.g., display an error message)
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  const handleLogout = () => {
    logout();
  };
  const handleCategoryPress = (category) => {
    // console.log(allMenu[0][`${category}`]);
    let food = [];
    Object.keys(allMenu[0][category]).forEach((item) => {
      food.push(allMenu[0][category][item]);
    });
    console.log(food);
    food.map((item) => {
      console.log(item.imageUrl);
    });
    setItems(food);
    setShowItems(category);
  };
  return isLoading ? (
    <View
      onLayout={onLayoutRootView}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size={"large"} color={"#212529"} />
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <ScrollView alwaysBounceHorizontal={true} style={{ flex: 1 }}>
        <StatusBar
          barStyle={"dark-content"}
          // backgroundColor={"#212529"}
          backgroundColor={"transparent"}
          translucent={false}
        />
        <View
          onLayout={onLayoutRootView}
          style={{ flex: 1, marginBottom: "2%" }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                // backgroundColor: "#212529",
                // flexDirection: "row",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 14,
                borderBottomStartRadius: 18,
                borderBottomEndRadius: 18,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                  width: "100%",
                }}
              >
                <View style={{ width: 40 }}></View>
                <AppLogo color={"#212529"} />
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: "#212529",
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 0.5,
                    borderColor: "gray",
                  }}
                >
                  {/* <Octicons name="bell" size={18} color="#212529" /> */}
                  <MaterialCommunityIcons
                    name="cart-outline"
                    size={18}
                    // color={"#212529"}
                    color={"whitesmoke"}
                  />
                  <Text
                    style={{
                      color: "whitesmoke",
                      width: 12,
                      height: 12,
                      fontSize: 9,
                      borderRadius: 100,
                      backgroundColor: "tomato",
                      justifyContent: "center",
                      alignItems: "center",
                      fontFamily: "Inter-Medium",
                      position: "absolute",
                      top: 0,
                    }}
                  >
                    9+
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 9,
                // backgroundColor: "yellow",
                // paddingHorizontal: 10,
              }}
            >
              <View style={{ paddingHorizontal: 4 }}>
                <ImageBackground
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/makotis-kitchen.appspot.com/o/20231228_014040.jpg?alt=media&token=6d4516a6-0835-4b1d-ab43-191854bea7b4",
                  }}
                  style={{
                    width: "100%",
                    // backgroundColor: "#212529",
                    height: 120,
                    // flex: 1,
                    borderRadius: 8,
                    marginBottom: 10,
                  }}
                  resizeMode="cover"
                  imageStyle={{
                    borderRadius: 8,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "rgba(1,1,1,.3)",
                      width: "100%",
                      borderRadius: 8,
                      padding: 10,
                      justifyContent: "center",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontFamily: "Inter-Bold",
                          color: "whitesmoke",
                          fontSize: 28,
                        }}
                      >
                        Good Food.
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Inter-Bold",
                          color: "whitesmoke",
                          fontSize: 28,
                        }}
                      >
                        Fast delivery.
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <View style={{ marginVertical: 4, marginLeft: 4 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Pressable
                    style={{
                      backgroundColor:
                        showItems == "Best" ? "rgba(0,0,0,.1)" : "whitesmoke",
                      padding: 10,
                      marginRight: 4,
                      // paddingHorizontal: 15,
                      // paddingVertical: 10,
                      width: 70,
                      borderRadius: 6,
                      borderWidth: showItems == "Best" ? 0.5 : 0,
                      borderColor: "#343A40",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                    onPress={() => setShowItems("Best")}
                  >
                    <FontAwesome6
                      name="bowl-food"
                      size={22}
                      color="#343A40"
                      style={{
                        backgroundColor: "white",
                        borderRadius: 100,
                        // padding: 2,
                      }}
                    />
                    <Text
                      style={{
                        color: "#343A40",
                        fontFamily: "Inter-Medium",
                        fontSize: 12,
                        marginLeft: 3,
                      }}
                    >
                      Best
                    </Text>
                  </Pressable>
                  {categories.map((item, index) => {
                    return (
                      <Pressable
                        style={{
                          backgroundColor:
                            showItems == item ? "rgba(0,0,0,.1)" : "whitesmoke",
                          padding: 10,
                          marginRight: 4,
                          // paddingHorizontal: 15,
                          // paddingVertical: 10,
                          width: 70,
                          borderRadius: 6,
                          borderWidth: showItems == item ? 0.5 : 0,
                          borderColor: "#343A40",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexDirection: "column",
                        }}
                        onPress={() => handleCategoryPress(item)}
                        key={index}
                      >
                        {item == "dessert" ? (
                          <MaterialCommunityIcons
                            name="cupcake"
                            size={22}
                            color="#343A40"
                            style={{
                              backgroundColor: "white",
                              borderRadius: 100,
                              // padding: 2,
                            }}
                          />
                        ) : item == "sides" ? (
                          <MaterialCommunityIcons
                            name="food-variant"
                            size={22}
                            color="#343A40"
                            style={{
                              backgroundColor: "white",
                              borderRadius: 100,
                              // padding: 2,
                            }}
                          />
                        ) : item == "main" ? (
                          <MaterialCommunityIcons
                            name="food-steak"
                            size={22}
                            color="#343A40"
                            style={{
                              backgroundColor: "white",
                              borderRadius: 100,
                              // padding: 2,
                            }}
                          />
                        ) : item == "drinks" ? (
                          <Entypo
                            name="drink"
                            size={22}
                            color="#343A40"
                            style={{
                              backgroundColor: "white",
                              borderRadius: 100,
                              // padding: 2,
                            }}
                          />
                        ) : (
                          <Ionicons
                            name="fast-food-outline"
                            size={22}
                            color="#343A40"
                            style={{
                              backgroundColor: "white",
                              borderRadius: 100,
                              // padding: 2,
                            }}
                          />
                        )}
                        <Text
                          style={{
                            color: "#343A40",
                            fontFamily: "Inter-Regular",
                            fontSize: 12,
                            marginLeft: 3,
                          }}
                        >
                          {item}
                        </Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              </View>
              {showItems == "Best" ? (
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      marginVertical: 10,
                      marginLeft: 10,
                      fontFamily: "Inter-Bold",
                    }}
                  >
                    Popular now
                  </Text>
                  <PopularItems allMenu={allMenu} />
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    paddingHorizontal: 4,
                  }}
                >
                  {items.map((item, index) => {
                    return (
                      <ImageBackground
                        style={{
                          width: "49%",
                          height: 200,
                          borderRadius: 18,
                          backgroundColor: "red",
                          marginBottom: 4,
                          elevation: 5,
                          shadowColor: "#666666",
                        }}
                        imageStyle={{
                          resizeMode: "cover",
                          borderRadius: 18,
                          width: "100%",
                        }}
                        key={index}
                        source={{ uri: item.imageUrl }}
                      >
                        <View
                          style={{
                            flex: 1,
                            width: "100%",
                            borderRadius: 18,
                            backgroundColor: "rgba(1,1,1,.4)",
                            padding: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: "whitesmoke",
                              borderRadius: 25,
                              paddingLeft: 10,
                              // paddingVertical: 4,
                              justifyContent: "space-evenly",
                              alignItems: "center",
                              flexDirection: "row",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "Inter-Bold",
                                color: "whitesmoke",
                              }}
                            >
                              R {item.price}
                            </Text>
                            <MaterialIcons
                              name="add-circle"
                              size={25}
                              color={"whitesmoke"}
                            />
                          </View>
                        </View>
                      </ImageBackground>
                    );
                  })}
                </View>
              )}
            </View>
            <ImageBackground
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/makotis-kitchen.appspot.com/o/20231228_014328.jpg?alt=media&token=def1a435-e665-464a-9075-e2f26c1b347f",
              }}
              style={{
                flex: 1,
                backgroundColor: "#212529",
                marginTop: 4,
                marginBottom: "8%",
              }}
              imageStyle={{ resizeMode: "cover" }}
            >
              <View
                style={{
                  backgroundColor: "rgba(1,1,1,.8)",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    color: "whitesmoke",
                    fontFamily: "Inter-Bold",
                    marginBottom: 10,
                  }}
                >
                  Come experience our five star cousine
                </Text>
                <Image
                  source={require("../../assets/images/Logo.png")}
                  style={{
                    width: 50,
                    height: 100,
                    resizeMode: "center",
                    borderWidth: 1,
                    borderColor: "yellow",
                  }}
                />
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
