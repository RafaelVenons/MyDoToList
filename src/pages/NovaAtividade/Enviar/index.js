import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Branco, Laranja, Laranja_Claro } from "../../../styles/cores";

function Enviar({ children, Adiciona, valido, style }) {
  const styles = dinamicStyles(valido);

  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.5} onPress={Adiciona}>
      <Text style={styles.texto}>{children}</Text>
    </TouchableOpacity>
  );
}

const dinamicStyles = (valido) =>
  StyleSheet.create({
    container: {
      backgroundColor: valido ? Laranja : Laranja_Claro,
      borderRadius: 28,
      height: 56,
      marginTop: 16,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: valido ? 4 : 0
    },
    texto: {
        color: Branco,
        fontSize: 24,
        fontFamily: 'Lobster_400Regular'
    }
  });

export default Enviar;
