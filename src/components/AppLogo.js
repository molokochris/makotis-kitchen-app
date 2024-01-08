import { View, Text } from "react-native";
import React from "react";

export default function AppLogo(props) {
  return (
    <Text
      style={{
        fontFamily: "Mansalva-Regular",
        fontSize: props.size,
        color: props.color,
      }}
    >
      {`Makoti's
Kitchen`}
    </Text>
  );
}
