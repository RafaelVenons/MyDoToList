import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Switch,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Atividades from "../../componets/contexct";
import EntradaText from "./EntradaTexto";
import Frequencia from "./Frequencia";
import Selecao from "./Selecao";
import Enviar from "./Enviar";

function NovaAtividade() {
  const [toggle, setToggle] = useState(false);
  const [nome, setNome] = useState("");
  const [nomeValida, setNomeValida] = useState(true);
  const [dias, setDias] = useState([false, true, true, true, true, true, false]);
  const [freqValida, setFreqValida] = useState(true);
  const [desc, setDesc] = useState("");
  const [valido, setValido] = useState(nome !== "" && (freqValida || toggle));
  const { tarefas, setTarefas, metas, setMetas, goHome } =
    useContext(Atividades);

  useEffect(() => {
    setValido(nome !== "" && (freqValida || toggle));
  }, [nome, freqValida, toggle]);

  const Adiciona = async () => {
    if (!valido) return;
    if (toggle) {
      let novaTarefa = {
        nome: nome,
        desc: desc,
        feito: false,
        id: `tarefa-${tarefas.length}-${nome}`,
      };
      try {
        const dataKey = "@todolist:tarefas";
        const data = [novaTarefa, ...tarefas];
        await AsyncStorage.setItem(dataKey, JSON.stringify(data));
        setTarefas(data);
        goHome();
      } catch (error) {
        console.log(error);
        Alert.alert("Não foi possivel cadastrar nova Tarefa");
      }
    } else {
      let novaMeta = {
        nome: nome,
        dias: dias,
        desc: desc,
        feito: [false],
        porcent: 0,
        total: 1,
        id: `meta-${metas.length}-${nome}`,
      };
      try {
        const dataKey = "@todolist:metas";
        const data = [novaMeta, ...metas];
        await AsyncStorage.setItem(dataKey, JSON.stringify(data));
        setMetas(data);
        goHome();
      } catch (error) {
        console.log(error);
        Alert.alert("Não foi possivel cadastrar nova Meta");
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <Selecao toggle={toggle} setToggle={setToggle} />
      <EntradaText
        style={styles.input}
        titulo={toggle ? "Nome da Tarefa" : "Nome da Meta"}
        value={nome}
        onChangeText={setNome}
        valido={nomeValida}
        validacao={setNomeValida}
      />
      {!toggle && (
        <Frequencia
          style={styles.input}
          dias={dias}
          setDias={setDias}
          valido={freqValida}
          validacao={setFreqValida}
        />
      )}
      <EntradaText
        style={styles.input}
        titulo="Descrição"
        multiline
        value={desc}
        onChangeText={setDesc}
      />
      <Enviar style={styles.input} Adiciona={Adiciona} valido={valido}>
        {toggle ? "Criar Tarefa" : "Criar Meta"}
      </Enviar>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 16,
  },
});

export default NovaAtividade;
