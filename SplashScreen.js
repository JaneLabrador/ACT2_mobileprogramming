// Import necessary components and modules
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

// Define the SplashScreen component
const SplashScreen = ({ navigation }) => {
  // useEffect is a Hook that runs after the component renders
  useEffect(() => {
    // Simulate a delay (e.g., 2000 milliseconds) before navigating to the main screen
    const timer = setTimeout(() => {
      navigation.replace("Main"); // Replace 'Main' with the name of your main screen
    }, 2000);

    // Clear the timeout when the component is unmounted to avoid memory leaks
    return () => clearTimeout(timer);
  }, [navigation]); // The effect depends on the navigation prop

  // Return the JSX representing the splash screen
  return (
    <View style={styles.container}>
      {/* Add your splash screen image */}
      <Image
        source={require("./path/to/your/splash-image.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

// Define styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Set the background color of the splash screen
  },
  logo: {
    width: 200,
    height: 200,
  },
});

// Export the SplashScreen component
export default SplashScreen;
