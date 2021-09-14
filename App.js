import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import Main from "./src/pages/Main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Atividades from "./src/contexct";
import { diaPassados, inicioDia, novaPorcentagem } from "./src/Utils";
import moment from "moment";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [metas, setMetas] = useState([]);
  const [isRead, setIsRead] = useState(false);
  let [fontsLoaded] = useFonts({ Lobster_400Regular });

  async function loadData() {
    const dataTarefasJSON = await AsyncStorage.getItem("@todolist:tarefas");
    const dataMetasJSON = await AsyncStorage.getItem("@todolist:metas");
    const ultimoDiaJSON = await AsyncStorage.getItem("@todolist:dia");
    const dataTarefas = dataTarefasJSON ? JSON.parse(dataTarefasJSON) : [];
    const dataMetasAnt = dataMetasJSON ? JSON.parse(dataMetasJSON) : [];
    const ultimoDia = ultimoDiaJSON ? JSON.parse(ultimoDiaJSON) : inicioDia();
    const dias = diaPassados(ultimoDia);
    let dataMetas = [];
    if (dias > 0) {
      dataMetas = dataMetasAnt.map((meta) => {
        for (let i = 1; i <= dias; i++) {
          const dayWeek = moment(ultimoDia).add(i, 'days').day();
          if (meta.dias[dayWeek]) {
            meta.feito = [false, ...meta.feito].slice(0, 28);
            meta.porcent = novaPorcentagem(meta.porcent, meta.total);
            meta.total = meta.total + 1;
          }
        }
        return meta;
      });
    } else {
      dataMetas = dataMetasAnt;
    }
    setTarefas(dataTarefas);
    setMetas(dataMetas);
    try {
      await AsyncStorage.setItem("@todolist:metas", JSON.stringify(dataMetas));
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel atualizar as Metas");
    }
    try {
      await AsyncStorage.setItem("@todolist:dia", JSON.stringify(inicioDia()));
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel salvar o dia");
    }
  }

  if (isRead && fontsLoaded) {
    return (
      <Atividades.Provider value={{ tarefas, setTarefas, metas, setMetas }}>
        <Main />
      </Atividades.Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadData}
        onFinish={() => setIsRead(true)}
        onError={console.warn}
      />
    );
  }
}
