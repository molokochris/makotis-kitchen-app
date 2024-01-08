import { View, Text, TextInput } from "react-native";
import React, { useCallback, useEffect } from "react";
import { StyleSheet } from "react-native";

export default function InputForm(props) {
  return (
    <View
      style={[
        style.inputFieldContainer,
        { width: props.width, marginBottom: 10 },
        props.style,
      ]}
    >
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#686868"
        cursorColor="whitesmoke"
        style={style.text}
        value={props.value}
        editable={props.editable}
        onChangeText={props.onChangeText}
        keyboardType={
          props.placeholder === "Email Address"
            ? "email-address"
            : props.placeholder === "Contact Numbers" ||
              props.placeholder === "Code"
            ? "phone-pad"
            : "default"
        }
      />
    </View>
  );
}
const style = StyleSheet.create({
  inputFieldContainer: {
    backgroundColor: "whitesmoke",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 6,
    justifyContent: "center",
    height: 45,
    borderWidth: 0.5,
    borderColor: "#808080",
  },
  inputBoxContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    // marginBottom: 20,
  },
  inputField: {
    marginBottom: 5,
  },
  text: {
    color: "black",
    fontFamily: "Inter-Regular",
    fontSize: 10,
  },
});
