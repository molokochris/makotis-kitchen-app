import { View, Text, ScrollView, ImageBackground } from "react-native";
import React from "react";

export default function PopularItems(props) {
  return (
    <ScrollView horizontal={true}>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          marginLeft: 4,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ImageBackground
          source={{ uri: props.allMenu[0].dessert.pudding.imageUrl }}
          style={{
            width: 180,
            height: 200,
            backgroundColor: "red",
            borderRadius: 12,
            // padding: 10,
            marginRight: 10,
          }}
          imageStyle={{
            resizeMode: "cover",
            borderRadius: 12,
          }}
        />
        <ImageBackground
          source={{ uri: props.allMenu[0].main.beef.imageUrl }}
          style={{
            width: 180,
            height: 200,
            backgroundColor: "red",
            borderRadius: 12,
            padding: 10,
            marginRight: 10,
          }}
          imageStyle={{ resizeMode: "cover", borderRadius: 12 }}
        />
        <ImageBackground
          source={{ uri: props.allMenu[0].starters.biltong.imageUrl }}
          style={{
            width: 180,
            height: 200,
            backgroundColor: "red",
            borderRadius: 12,
            padding: 10,
            marginRight: 10,
          }}
          imageStyle={{ resizeMode: "cover", borderRadius: 12 }}
        />
        <ImageBackground
          source={{ uri: props.allMenu[0].sides.chakalaka.imageUrl }}
          style={{
            width: 180,
            height: 200,
            backgroundColor: "red",
            borderRadius: 12,
            padding: 10,
            marginRight: 10,
          }}
          imageStyle={{ resizeMode: "cover", borderRadius: 12 }}
        />
        <ImageBackground
          source={{ uri: props.allMenu[0].drinks.mocktail.imageUrl }}
          style={{
            width: 180,
            height: 200,
            backgroundColor: "red",
            borderRadius: 12,
            padding: 10,
            marginRight: 10,
          }}
          imageStyle={{ resizeMode: "cover", borderRadius: 12 }}
        />
      </View>
    </ScrollView>
  );
}
