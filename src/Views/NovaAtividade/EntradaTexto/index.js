import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Lobster from "../../../componets/Lobster";
import { Azul, Azul_Escuro, Branco, Vermelho } from "../../../styles/cores";

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
      if(texto.match(/^\s/)) return;
      onChangeText(texto); 
  }

  function verifica(){
    if(value === ""){
        validacao(false);
    }else{
        validacao(true);
    }
    if(value.match(/\s$/)){
      let aux = value.replace(/([^\s]+)(\s+)$/, '$1');
      onChangeText(aux);
    }
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.containerTexto}>
        <Lobster style={styles.title}>{titulo}</Lobster>
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

const dinamicStyles = (valido) => StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: valido ? Azul : Vermelho,
    paddingBottom: 8,
    paddingHorizontal: 16,
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
  input: {
    fontSize: 16,
  },
});

export default EntradaText;
