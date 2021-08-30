import React, { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Switch, View } from "react-native";
import Atividades from "../../componets/contexct";
import EntradaText from "./EntradaTexto";
import Enviar from "./Enviar";
import Frequencia from "./Frequencia";
import Selecao from "./Selecao";

function NovaAtividade() {
  const [toggle, setToggle] = useState(false);
  const [nome, setNome] = useState("");
  const [nomeValida, setNomeValida] = useState(true);
  const [dias, setDias] = useState([
    false,
    true,
    true,
    true,
    true,
    true,
    false,
  ]);
  const [freqValida, setFreqValida] = useState(true);
  const [desc, setDesc] = useState("");
  const [valido, setValido] = useState(nome !== "" && (freqValida || toggle));
  const { tarefas, setTarefas, metas, setMetas, goHome } = useContext(Atividades);

  useEffect(() => {
    setValido(nome !== "" && (freqValida || toggle));
  }, [nome, freqValida, toggle]);

  const Adiciona = () => {
    if (!valido) {
      return;
    } else if (toggle) {
      let novaTarefa = {};
      novaTarefa.nome = nome;
      novaTarefa.desc = desc;
      novaTarefa.feito = false;
      novaTarefa.id = `${tarefas.length}-${nome}`;
      setTarefas([novaTarefa, ...tarefas]);
      goHome();
    } else {
      let novaMeta = {};
      novaMeta.nome = nome;
      novaMeta.dias = dias;
      novaMeta.desc = desc;
      novaMeta.feito = [false];
      novaMeta.id = `${metas.length}-${nome}`;
      setMetas([novaMeta, ...metas]);
      goHome();
    }
  }

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
      <Enviar
        style={styles.input}
        Adiciona={Adiciona}
        valido={valido}
      >
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
