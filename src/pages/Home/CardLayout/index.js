import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Branco,
  Laranja,
  Laranja_Claro,
  Verde_Escuro,
  Vermelho_Escuro,
} from "../../../styles/cores";
import BotaoNotOk from "../BotaoNotOk";
import BotaoOk from "../BotaoOk";
import BotaoDelete from "../BotaoDelete";

function CardLayout({ nome, desc, feito, meta, acao, deletar, disabled, onLongPress }) {
  const [espandir, setEspandir] = useState(false);
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
        <TouchableOpacity
          style={styles.areaPress}
          activeOpacity={0.5}
          onPress={() => setEspandir(!espandir)}
          onLongPress={onLongPress}
        >
          <Text style={styles.texto}> {nome} </Text>
        </TouchableOpacity>
        {disabled ? null : meta && !feito ? <BotaoNotOk acao={acao} /> : <BotaoOk acao={acao} />}
      </View>
      {espandir &&
        (desc ? (
          <View style={styles.containerExpand}>
            <Text style={styles.textoDesc}> {desc} </Text>
            <BotaoDelete meta={meta} acao={deletar} />
          </View>
        ) : (
          <BotaoDelete meta={meta} acao={deletar} />
        ))}
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
    flexDirection: "row",
  },
  areaPress: {
    flex: 1,
  },
  texto: {
    fontSize: 24,
    paddingTop: 4,
    paddingLeft: 8,
    color: Branco,
    textShadowColor: "#000000",
    textShadowRadius: 16,
    fontFamily: 'Lobster_400Regular'
  },
  containerExpand: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textoDesc: {
    fontSize: 18,
    fontWeight: "700",
    color: Branco,
    textShadowColor: "#000000",
    textShadowRadius: 16,
  },
});

export default CardLayout;
