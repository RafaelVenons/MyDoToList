import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Lobster from "../../../componets/Lobster";
import { Azul, Azul_Claro, Branco, Laranja, Laranja_Claro } from "../../../styles/cores";

function Enviar({ children, valido, style }) {
  const styles = dinamicStyles(valido);
  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.5}>
      <Lobster style={styles.texto}>{children}</Lobster>
    </TouchableOpacity>
  );
}

const dinamicStyles = (valido) =>
  StyleSheet.create({
    container: {
      backgroundColor: valido ? Laranja : Laranja_Claro,
      borderRadius: 16,
      height: 56,
      marginTop: 16,
      justifyContent: 'center',
      alignItems: 'center'
    },
    texto: {
        color: Branco,
        fontSize: 24
    }
  });

export default Enviar;
