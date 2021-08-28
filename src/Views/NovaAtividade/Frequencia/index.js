import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Lobster from "../../../componets/Lobster";
import {
  Azul,
  Azul_Escuro,
  Branco,
  Vermelho,
} from "../../../styles/cores";
import Botao from "../Botao";

function Frequencia({ style, valido, validacao, dias, setDias }) {
  let styles = dinamicStyles(valido);
  const lista = ["D", "S", "T ", "Q", "Q", "S", "S"];

  useEffect(() => {
    validacao(dias.reduce((item, acumulado) => item||acumulado, false));
  },[dias]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.containerTexto}>
        <Lobster style={styles.title}>Frequencia</Lobster>
      </View>
      <View style={styles.botoes}>
        {lista.map((item, i) => {
          return (
            <Botao key={i} i={i} dias={dias} setDias={setDias}>
              {item}
            </Botao>
          );
        })}
      </View>
    </View>
  );
}

const dinamicStyles = (valido) =>
  StyleSheet.create({
    container: {
      borderWidth: 2,
      borderRadius: 16,
      borderColor: valido ? Azul : Vermelho,
      paddingBottom: 8,
      paddingHorizontal: 8,
      marginTop: 12,
    },
    containerTexto: {
      marginTop: -14,
      marginLeft: 8,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    title: {
      paddingHorizontal: 8,
      fontSize: 18,
      backgroundColor: Branco,
      color: valido ? Azul_Escuro : Vermelho,
    },
    botoes: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  });

export default Frequencia;
