import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Cabecalho from "./src/componets/Cabecalho";
import Rotas from "./src/Rotas";

export default function App() {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <StatusBar style="auto"/>
      <Cabecalho/>
      <Rotas/>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000'
  }
})