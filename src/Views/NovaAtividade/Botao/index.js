import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Lobster from "../../../componets/Lobster";
import { Branco, Verde, Vermelho } from "../../../styles/cores";

function Botao({ children, i, dias, setDias }) {
  const styles = dinamicStyles(dias[i]);
  const teste = () => {
    let aux = dias;
    aux[i] = !aux[i];
    setDias([...aux]);
  };
  return (
    <TouchableOpacity style={styles.botao} activeOpacity={0.5} onPress={teste}>
      <Lobster style={styles.texto}>{children}</Lobster>
    </TouchableOpacity>
  );
}

const dinamicStyles = (ativo) =>
  StyleSheet.create({
    botao: {
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 40,
      backgroundColor: ativo ? Verde : Vermelho,
      borderRadius: 8,
    },
    texto: {
      fontSize: 24,
      color: Branco,
      paddingTop: 6,
    },
  });

export default Botao;
