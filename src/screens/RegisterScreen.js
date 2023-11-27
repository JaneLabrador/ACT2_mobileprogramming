import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider, TextInput, Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigator = useNavigation();
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>Sign Up now!</Text>
        <TextInput />
        <TextInput />
        <TextInput />
        <TextInput />
        <SafeAreaView>
          <Text>
            Already have an account?{" "}
            <Button
              onPress={() => {
                navigator.goBack();
              }}
            >
              Login now
            </Button>
          </Text>
        </SafeAreaView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default RegisterScreen;
