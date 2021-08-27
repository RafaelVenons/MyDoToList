import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import { Azul_Claro, Azul_Escuro } from "../../styles/cores";
import Atalho from "./Atalho";
import EntradaText from "./EntradaTexto";

function NovaAtividade() {
  const [nome, setNome] = useState("");
  const [toggle, setToggle] = useState(false);
  const toggleSwitch = () => setToggle((previousState) => !previousState);
  const toggleMeta = () => setToggle(false);
  const toggleTarefa = () => setToggle(true);

  return (
    <View>
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
        <EntradaText style={styles.input} titulo={toggle ? 'Nome da Tarefa' : 'Nome da Meta'} value={nome} onChangeText={setNome}/>
        <EntradaText style={styles.input} titulo='Descrição' multiline value={nome} onChangeText={setNome}/>
    </View>
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
    marginHorizontal: 16
  }
});

export default NovaAtividade;
