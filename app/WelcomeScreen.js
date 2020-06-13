import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../app/assets/Logo.jpg")} />
        <Text style={styles.logoText}>needWork</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 100,
  },
  logoText: {
    fontFamily: "PlayfairDisplay-Bold",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "dodgerblue",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#2D8EFF",
  },
});

export default WelcomeScreen;
