import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, PaperProvider, TextInput, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigator = useNavigation();
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>Log in</Text>
        <TextInput mode="outlined" label={"Username"} />
        <TextInput mode="outlined" label={"Password"} />

        <Button>Log in</Button>
        <SafeAreaView>
          <Text>
            Not a member?{" "}
            <Button
              onPress={() => {
                navigator.navigate("RegisterScreen");
              }}
            >
              Sign up now
            </Button>
          </Text>
        </SafeAreaView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default LoginScreen;
