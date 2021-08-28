import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Switch, View } from "react-native";
import { Azul_Claro, Azul_Escuro } from "../../styles/cores";
import Atalho from "./Atalho";
import EntradaText from "./EntradaTexto";
import Enviar from "./Enviar";
import Frequencia from "./Frequencia";

function NovaAtividade() {
  const [toggle, setToggle] = useState(false);
  const toggleSwitch = () => setToggle((previousState) => !previousState);
  const toggleMeta = () => setToggle(false);
  const toggleTarefa = () => setToggle(true);

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
      <View style={styles.containerSelecao}>
        <Atalho texto="Meta" action={toggleMeta} ativo={!toggle} />
        <Switch
          trackColor={{ false: Azul_Claro, true: Azul_Claro }}
          thumbColor={Azul_Escuro}
          onValueChange={toggleSwitch}
          value={toggle}
        />
        <Atalho texto="Tarefa" action={toggleTarefa} ativo={toggle} />
      </View>
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
  containerSelecao: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  switch: {
    padding: 8,
  },
  input: {
    marginHorizontal: 16,
  },
});

export default NovaAtividade;
