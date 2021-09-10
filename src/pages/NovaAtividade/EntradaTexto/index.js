import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Azul, Azul_Escuro, Branco, Vermelho_Claro } from "../../../styles/cores";

function EntradaText({
  titulo,
  style,
  multiline,
  value,
  onChangeText,
  valido = true,
  validacao = () => {},
}) {
  const styles = dinamicStyles(valido);

  function atualiza(texto) {
    if (texto.match(/^\s/)) return;
    onChangeText(texto);
  }

  function verifica() {
    if (value === "") {
      validacao(false);
    } else {
      validacao(true);
    }
    if (value.match(/\s$/)) {
      let aux = value.replace(/([^\s]+)(\s+)$/, "$1");
      onChangeText(aux);
    }
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.containerTexto}>
        <Text style={styles.title}>{titulo}</Text>
      </View>
      <TextInput
        style={styles.input}
        multiline={multiline}
        value={value}
        onChangeText={(texto) => atualiza(texto)}
        onBlur={verifica}
      />
    </View>
  );
}

const dinamicStyles = (valido) =>
  StyleSheet.create({
    container: {
      borderWidth: 2,
      borderRadius: 28,
      borderColor: valido ? Azul : Vermelho_Claro,
      paddingBottom: 8,
      paddingHorizontal: 16,
      marginTop: 12,
    },
    containerTexto: {
      marginTop: -14,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    title: {
      paddingHorizontal: 8,
      fontSize: 18,
      backgroundColor: Branco,
      color: valido ? Azul_Escuro : Vermelho_Claro,
      fontFamily: "Lobster_400Regular",
    },
    input: {
      fontSize: 16,
    },
  });

export default EntradaText;
