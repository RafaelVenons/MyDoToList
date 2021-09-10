import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Azul,
  Azul_Escuro,
  Branco,
  Vermelho_Claro,
} from "../../../styles/cores";
import Botao from "../Botao";

function Frequencia({ style, valido, validacao, dias, setDias }) {
  const styles = dinamicStyles(valido);
  const semana = [" D ", " S ", " T  ", " Q ", " Q ", " S ", " S "];
  useEffect(() => {
    validacao(dias.reduce((item, acumulado) => item||acumulado, false));
  },[dias]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.containerTexto}>
        <Text style={styles.title}>Frequencia</Text>
      </View>
      <View style={styles.botoes}>
        {semana.map((item, i) => {
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
      height: 56,
      borderWidth: 2,
      borderRadius: 28,
      borderColor: valido ? Azul : Vermelho_Claro,
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
      color: valido ? Azul_Escuro : Vermelho_Claro,
      fontFamily: 'Lobster_400Regular'
    },
    botoes: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  });

export default Frequencia;
