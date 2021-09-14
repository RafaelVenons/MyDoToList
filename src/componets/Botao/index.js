import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Branco, Preto, Verde, Vermelho } from "../../styles/cores";

function Botao({ children, i, dias, setDias }) {
  const styles = dinamicStyles(dias[i]);
  const teste = () => {
    let aux = dias;
    aux[i] = !aux[i];
    setDias([...aux]);
  };
  return (
    <TouchableOpacity style={styles.botao} activeOpacity={0.5} onPress={teste}>
      <Text style={styles.texto}>{children}</Text>
    </TouchableOpacity>
  );
}

const dinamicStyles = (ativo) =>
  StyleSheet.create({
    botao: {
      marginTop: -7,
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 40,
      backgroundColor: ativo ? Verde : Vermelho,
      borderRadius: 20,
    },
    texto: {
      fontSize: 24,
      color: Branco,
      paddingTop: 6,
      textShadowColor: Preto,
      textShadowRadius: 8,
      fontFamily: 'Lobster_400Regular'
    },
  });

export default Botao;
