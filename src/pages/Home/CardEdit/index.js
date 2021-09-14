import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Branco,
  Laranja,
  Laranja_Claro,
  Laranja_Escuro,
  Vermelho_Escuro,
} from "../../../styles/cores";
import BotaoOk from "../BotaoOk";
import BotaoNotOk from "../BotaoNotOk";
import FrequenciaEdit from "../FrequenciaEdit";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CardEdit({
  nome,
  desc,
  dias,
  feito,
  meta,
  cancelar,
  disabled,
  id,
  vetor,
  setVetor,
  acao
}) {
  const [novoNome, setNome] = useState(nome);
  const [novaDesc, setDesc] = useState(desc ? desc : "Descrição");
  const [semana, setSemana] = useState(dias ? [...dias] : [true]);
  const [valido, setValido] = useState(true);

  useEffect(() => {
    if(novoNome === "" || !semana.reduce((item, acumulado) => item||acumulado, false)){
      setValido(false);
    } else {
      setValido(true);
    }
  })

  const atualiza = async() => {
    if(!valido) return;
    const i = vetor.findIndex((item) => item.id === id);
    let aux = vetor;
    aux[i].nome = novoNome;
    aux[i].desc = novaDesc;
    if(meta) aux[i].dias = semana;
    try {
      const key = meta ? "@todolist:metas" : "@todolist:tarefas";
      await AsyncStorage.setItem(key, JSON.stringify(aux));
      setVetor([...aux]);
      acao();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel Atualizar");
    }
  }

  const notificacao = () => {
    Alert.alert(
        `Atualizar ${meta ? 'Meta' : 'Tarefa'}?`,
        `Tem certeza que deseja atualizar a ${meta ? 'Meta' : 'Tarefa'}?`,
        [
          {
            text: "Cancelar",
            onPress: () => {},
            style: "cancel"
          },
          { 
            text: "Atualizar",
            onPress: () => atualiza() }
        ]
      );
}

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={
        disabled
          ? [Laranja_Claro, Laranja_Claro]
          : [
              meta ? (feito ? Verde_Escuro : Vermelho_Escuro) : Laranja_Claro,
              Laranja,
              Laranja,
            ]
      }
    >
      <View style={styles.info}>
        <TextInput
          style={styles.texto}
          value={novoNome}
          onChangeText={setNome}
        />
        <BotaoOk style={valido ? styles.botao : styles.opaco} acao={notificacao} fill={Branco} />
        <BotaoNotOk style={styles.botao} acao={cancelar} fill={Branco} />
      </View>
      {meta ? <FrequenciaEdit dias={semana} setDias={setSemana}/> : null}
        <TextInput
          style={styles.textoDesc}
          value={novaDesc}
          onChangeText={setDesc}
          multiline
        />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 8,
    marginHorizontal: 32,
    marginBottom: 16,
    borderRadius: 28,
    elevation: 4,
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texto: {
    flex: 1,
    fontSize: 24,
    paddingTop: 4,
    paddingLeft: 8,
    color: Branco,
    textShadowColor: "#000000",
    textShadowRadius: 16,
    fontFamily: "Lobster_400Regular",
    backgroundColor: Laranja_Escuro,
    borderRadius: 20,
    marginBottom: 4,
  },
  textoDesc: {
    width: '100%',
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: Branco,
    textShadowColor: "#000000",
    textShadowRadius: 16,
    backgroundColor: Laranja_Escuro,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  botao: {
    marginLeft: 4
  },
  opaco: {
    opacity: 0.5,
    marginLeft: 4
  },
});

export default CardEdit;
