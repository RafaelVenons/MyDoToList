import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Lobster from "../../../componets/Lobster";
import {
  Branco,
  Laranja,
} from "../../../styles/cores";
import BotaoNotOk from "../BotaoNotOk";
import BotaoOk from "../BotaoOk";

function CardLayout({nome, desc, feito, meta, acaoOk, acaoNotOk}) {
  const [espandir, setEspandir] = useState(false);
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[feito ? "#28F700" : "#FD0018", '#FF8E00', Laranja]}
    >
      <View style={styles.info}>
        <TouchableOpacity
          style={styles.areaPress}
          activeOpacity={0.5}
          onPress={() => desc ? setEspandir(!espandir) : null}
        >
          <Lobster style={styles.texto}>{nome}</Lobster>
        </TouchableOpacity>
        {meta ? (
          <View style={styles.containerBotoes}>
            <BotaoNotOk acao={acaoNotOk}/>
            <BotaoOk acao={acaoOk} />
          </View>
        ) : (
          <BotaoOk acao={acaoOk} />
        )}
      </View>
      {espandir && <Text style={styles.textoDesc}>{desc}</Text>}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 32,
    marginBottom: 16,
    borderRadius: 16,
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
    color: Branco,
  },
  containerBotoes: {
    flexDirection: "row",
    margin: 0,
    padding: 0,
    justifyContent: "space-between",
    width: 88,
  },
  textoDesc: {
    fontSize: 18,
    fontWeight: "700",
    color: Branco
  },
});

export default CardLayout;
