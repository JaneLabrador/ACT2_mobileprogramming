import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider, Text, Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Forms/Header";
import UserName from "../components/Forms/UserName";
import Password from "../components/Forms/Password";
import { FormStyle } from "../Styles/FormStyle";
import { KeyboardAvoidingView } from "react-native";
const RegisterScreen = () => {
  const navigator = useNavigation();
  return (
    <PaperProvider>
      <SafeAreaView style={FormStyle.formContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={FormStyle.formContainer}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}
        >
          <Header />
          <Text variant="headlineMedium" style={{ marginTop: 5 }}>
            {" "}
            Register
          </Text>
          <UserName />
          <TextInput
            style={FormStyle.input_style}
            mode="outlined"
            label="Phone number"
            placeholder="Enter your mobile number"
            inputMode="numeric"
          />
          <Password />
          <Button
            style={FormStyle.button_style}
            mode="contained-tonal"
            icon="account-plus"
            onPress={() => alert("Logged in")}
          >
            Register
          </Button>
          <SafeAreaView
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Already have an account?</Text>
            <Button
              onPress={() => {
                navigator.navigate("LoginScreen");
              }}
            >
              Login now
            </Button>
          </SafeAreaView>
          <Button
            mode="text"
            onPress={() => {
              navigator.navigate("LandingScreen");
            }}
          >
            go back
          </Button>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default RegisterScreen;
