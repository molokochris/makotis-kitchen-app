import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile({ navigation }) {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Profile</Text>
      <Button title="logout" color={"tomato"} onPress={handleLogout} />
    </View>
  );
}
