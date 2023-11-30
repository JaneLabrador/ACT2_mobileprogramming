import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FormStyle } from "../Styles/FormStyle";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigator = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          navigator.navigate("LoginScreen");
        }}
      >
        Log out
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
