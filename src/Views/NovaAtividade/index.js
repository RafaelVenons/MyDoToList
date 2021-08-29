import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Switch, View } from "react-native";
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

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
      <Selecao toggle={toggle} setToggle={setToggle}/>
      <EntradaText
        style={styles.input}
        titulo={toggle ? "Nome da Tarefa" : "Nome da Meta"}
        value={nome}
        onChangeText={setNome}
        valido={nomeValida}
        validacao={setNomeValida}
      />
      {!toggle && <Frequencia
        style={styles.input}
        dias={dias}
        setDias={setDias}
        valido={freqValida}
        validacao={setFreqValida}
      />}
      <EntradaText
        style={styles.input}
        titulo="Descrição"
        multiline
        value={desc}
        onChangeText={setDesc}
      />
      <Enviar style={styles.input} valido={(nome !== "")&&(freqValida || toggle)}>
        {toggle ? 'Criar Tarefa' : 'Criar Meta'}
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
