import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Cabecalho from "../../componets/Cabecalho";
import Home from "../../pages/Home";
import Estatisticas from "../../pages/Estatisticas";
import NovaAtividade from "../../pages/NovaAtividade";
import Navegacao from "../../componets/Navegacao";
import { Branco } from "../../styles/cores";

function Main() {

  const [page, setPage] = useState("Home");

  function goHome() {
    setPage("Home");
  }

  function goNewTask() {
    setPage("NovaAtividade");
  }

  const paginas = {
    Home: <Home />,
    Estatisticas: <Estatisticas goNewTask={goNewTask}/>,
    NovaAtividade: <NovaAtividade goHome={goHome}/>,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <Cabecalho />
          {paginas[page]}
        <Navegacao page={page} setPage={setPage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Branco
  },
});

export default Main;