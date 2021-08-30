import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Cabecalho from "./src/componets/Cabecalho";
import Home from "./src/Views/Home";
import Estatisticas from "./src/Views/Estatisticas";
import NovaAtividade from "./src/Views/NovaAtividade";
import Navegacao from "./src/componets/Navegacao";
import Atividades from "./src/componets/contexct";

export default function App() {

  let mockTarefas = [
    {
      desc: "",
      feito: true,
      id: "4-Tarefa",
      nome: "Quarta Tarefa",
    },
    {
      desc: "Descricao doida",
      feito: false,
      id: "3-Tarefa",
      nome: "Terceira Tarefa",
    },
    {
      desc: "Descricao doida",
      feito: true,
      id: "2-Tarefa",
      nome: "Segunda Tarefa",
    },
    {
      desc: "",
      feito: false,
      id: "1-Tarefa",
      nome: "Primeira Tarefa",
    },
  ];

  let mockMetas = [
    {
      desc: "",
      dias: [false, true, true, true, true, true, false],
      feito: [true],
      id: "4-Meta",
      nome: "Quarta Meta",
    },
    {
      desc: "Descricao doida",
      dias: [false, true, true, true, true, true, false],
      feito: [false],
      id: "3-Meta",
      nome: "Terceira Meta",
    },
    {
      desc: "Descricao doida",
      dias: [false, true, true, true, true, true, false],
      feito: [true],
      id: "2-Meta",
      nome: "Segunda Meta",
    },
    {
      desc: "",
      dias: [false, true, true, true, true, true, false],
      feito: [false],
      id: "1-Meta",
      nome: "Primeira Meta",
    },
  ];

  const [page, setPage] = useState("Home");
  const [tarefas, setTarefas] = useState(mockTarefas);
  const [metas, setMetas] = useState(mockMetas);

  function goHome() {
    setPage("Home");
  }

  const paginas = {
    Home: <Home />,
    Estatisticas: <Estatisticas />,
    NovaAtividade: <NovaAtividade />,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Cabecalho />
        <Atividades.Provider
          value={{ tarefas, setTarefas, metas, setMetas, goHome }}
        >
          {paginas[page]}
        </Atividades.Provider>
        <Navegacao page={page} setPage={setPage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
