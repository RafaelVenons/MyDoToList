import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Cabecalho from "./src/componets/Cabecalho";
import Home from './src/Views/Home';
import Estatisticas from "./src/Views/Estatisticas";
import NovaAtividade from "./src/Views/NovaAtividade";
import Navegacao from "./src/componets/Navegacao";

export default function App() {
  const [page, setPage] = useState('Home');

  paginas = {
    "Home": <Home/>,
    "Estatisticas": <Estatisticas/>,
    "NovaAtividade": <NovaAtividade/>
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto"/>
      <View style={styles.container}>
      <Cabecalho/>
      {paginas[page]}
      <Navegacao page={page} setPage={setPage}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
})