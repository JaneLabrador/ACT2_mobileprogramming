import React from "react";
import { SafeAreaView, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Button, PaperProvider, TextInput, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FormStyle } from "../Styles/FormStyle";
import UserName from "../components/Forms/UserName";
import Header from "../components/Forms/Header";
import Password from "../components/Forms/Password";
import fetchServices from "../services/fetchServices";
import { useState } from "react";

const LoginScreen = () => {
  const navigator = useNavigation();
  const [TextPassword, setTextPassword] = useState("");
  const [HideEntry, setHideEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    try {
      if (email === "") {
        setErrors({ email: true });
      }
      if (password === "") {
        setErrors({ email: true });
      }
      const result = await fetchServices(url, data);
    } catch (error) {
      console.debug(error.toString());
    }
  };
  // password copied

  const toggleSecureEntry = () => {
    setHideEntry(!HideEntry);
  };

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
            Login
          </Text>
          <SafeAreaView style={{ gap: 7 }}>
            {/* <UserName />
            <Password /> */}
            <TextInput
              style={FormStyle.input_style}
              mode="outlined"
              label="Username"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              mode="outlined"
              style={FormStyle.input_style}
              label="Password"
              placeholder="Enter your password"
              value={TextPassword}
              onChangeText={setTextPassword}
              secureTextEntry={HideEntry}
              right={
                <TextInput.Icon
                  onPress={toggleSecureEntry}
                  icon={!HideEntry ? "eye" : "eye-off"}
                />
              }
            />
            <Button
              onPress={() => {
                navigator.navigate("AccountRecoveryScreen");
              }}
            >
              Forgot password?
            </Button>
          </SafeAreaView>
          <Button
            style={FormStyle.button_style}
            mode="contained-tonal"
            icon="login"
            onPress={() => {
              alert("Logged in");
              navigator.navigate("HomeScreen");
            }}
          >
            Log in
          </Button>

          <SafeAreaView
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Not a member?</Text>
            <Button
              mode="text"
              onPress={() => {
                navigator.navigate("RegisterScreen");
              }}
            >
              Sign up now
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

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  inputContainerStyle: {
    marginBottom: 16,
  },
  fontSize: {
    fontSize: 18,
  },
});
