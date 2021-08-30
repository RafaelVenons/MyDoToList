import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Lobster from "../../../componets/Lobster";
import {
  Azul_Escuro,
  Branco,
  Laranja,
  Laranja_Claro,
} from "../../../styles/cores";
import BotaoNotOk from "../BotaoNotOk";
import BotaoOk from "../BotaoOk";

function CardLayout({nome, desc, feito, meta, acao}) {
  const [espandir, setEspandir] = useState(false);
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[ meta ? (feito ? "#28F700" : "#FD0018") : Laranja_Claro, Laranja, Laranja]}
    >
      <View style={styles.info}>
        <TouchableOpacity
          style={styles.areaPress}
          activeOpacity={0.5}
          onPress={() => desc ? setEspandir(!espandir) : null}
        >
          <Lobster style={styles.texto}>{nome}</Lobster>
        </TouchableOpacity>
        {meta && !feito ? (
          <BotaoNotOk acao={acao}/>
        ) : (
          <BotaoOk acao={acao} />
        )}
      </View>
      {espandir && <Text style={styles.textoDesc}>{desc}</Text>}
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
    textShadowColor: '#000000',
    textShadowRadius: 8,
  },
  textoDesc: {
    fontSize: 18,
    fontWeight: "700",
    color: Branco,
    textShadowColor: '#000000',
    textShadowRadius: 4,
  },
});

export default CardLayout;
