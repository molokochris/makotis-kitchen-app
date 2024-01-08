import React, { createContext } from "react";
import { useEffect, useState } from "react";
import { Auth } from "../firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Alert } from "react-native";
import { deleteData, getData, saveData } from "../db/SecureStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // const login = async (email, password) => {
  const login = () => {
    try {
      setIsLoading(true);
      // const userData = await Auth.signInWithEmailAndPassword(email, password);
      // setUserInfo(userData.user);
      // saveData("userInfo", JSON.stringify(userData));

      // const userid = userData.user.uid;
      // const user = firebase.auth().currentUser;
      // if (user) {
      //   const token = await user.getIdToken(); // Fetches the JWT token
      //   setUserToken(token);
      setUserToken("token");

      //   AsyncStorage.setItem("userToken", token);
      // saveData("userToken", token);
      saveData("userToken", "token");

      //   console.log("User's JWT token:", token);
      // } else {
      //   console.log("User is not authenticated");
      // }
      // console.log(userData);
      Alert.alert("Login successful");
      setIsLoading(false);
    } catch (error) {
      console.error("Login error: ", error);
      const errorMessage = getFirebaseErrorMessage(error);
      // Alert.alert(errorMessage);
    } finally {
    }
    // setIsLoading(false);

    // Function to get user-friendly error message based on the Firebase error code
    const getFirebaseErrorMessage = (error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          return "This email is already registered. Please use a different email.";
        case "auth/invalid-email":
          return "Invalid email address. Please enter a valid email.";
        case "auth/weak-password":
          return "Password is too weak. Please choose a stronger password.";
        case "auth/user-not-found":
        case "auth/wrong-password":
          return "Invalid email or password. Please try again.";
        default:
          return "An unexpected error occurred. Please try again later.";
      }
    };
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);

    deleteData("userToken");
    // deleteData("userInfo");

    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await getData("userToken");
      // let userInfo = await getData("userInfo");
      // userInfo = JSON.parse(userInfo);

      // if (userInfo) {
      setUserToken(userToken);
      //   setUserInfo(userInfo);
      // }
      setIsLoading(false);
    } catch (error) {
      console.log(`isLogged in error: ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ login, logout, userToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
