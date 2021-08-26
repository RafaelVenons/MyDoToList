import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/componets/Cabecalho";
import Home from "./src/Views/Home";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Cabecalho/>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
