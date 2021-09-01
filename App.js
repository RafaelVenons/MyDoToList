import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Cabecalho from "./src/componets/Cabecalho";
import Home from "./src/Views/Home";
import Estatisticas from "./src/Views/Estatisticas";
import NovaAtividade from "./src/Views/NovaAtividade";
import Navegacao from "./src/componets/Navegacao";
import Atividades from "./src/componets/contexct";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Branco } from "./src/styles/cores";

export default function App() {

  let mockTarefas = [
    {
      desc: "Descricao doida",
      feito: false,
      id: "2-Tarefa",
      nome: 'Segunda Tarefa',
    },
    {
      desc: "",
      feito: false,
      id: "1-Tarefa",
      nome: `${moment(1618781876406).fromNow()}`,
    },
  ];

  let mockMetas = [
    {
      desc: "",
      dias: [true, false, true, true, true, true, true],
      feito: [true, true, false, false, false, false, true, false],
      total: 8,
      porcent: 42,
      id: "4-Meta",
      nome: "Quarta Meta",
    },
    {
      desc: "Descricao doida",
      dias: [true, false, false, true, true, true, true],
      feito: [true, true, true, true, false, false, false, false],
      total: 8,
      porcent: 42,
      id: "3-Meta",
      nome: "Terceira Meta",
    },
    {
      desc: "Descricao doida",
      dias: [true, false, true, false, true, true, true],
      feito: [true, true, true, true, false, false, true, false],
      total: 8,
      porcent: 42,
      id: "2-Meta",
      nome: "Segunda Meta",
    },
    {
      desc: "",
      dias: [true, false, true, true, false, true, true],
      feito: [true, true, true, true, true, true, false, false],
      total: 8,
      porcent: 42,
      id: "1-Meta",
      nome: "Primeira Meta",
    },
  ];

  const [page, setPage] = useState("Home");
  const [tarefas, setTarefas] = useState([]);
  const [metas, setMetas] = useState([]);

  function goHome() {
    setPage("Home");
  }

  const paginas = {
    Home: <Home />,
    Estatisticas: <Estatisticas />,
    NovaAtividade: <NovaAtividade />,
  };

  useEffect(() => {
    async function loadData(){
      const dataTarefasKey = '@todolist:tarefas';
      const dataMetasKey = '@todolist:metas';
      const dataTarefasJSON = await AsyncStorage.getItem(dataTarefasKey);
      const dataMetasJSON = await AsyncStorage.getItem(dataMetasKey);
      const dataTarefas = (dataTarefasJSON ? JSON.parse(dataTarefasJSON) : []);
      const dataMetas = (dataMetasJSON ? JSON.parse(dataMetasJSON) : []);
      setTarefas(dataTarefas);
      setMetas(dataMetas);
    }
    loadData();
  },[])

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
    flex: 1,
    backgroundColor: Branco
  },
});
