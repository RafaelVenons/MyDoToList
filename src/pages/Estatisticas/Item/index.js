import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Titulo from "../../../componets/Titulo";
import { Branco } from "../../../styles/cores";
import Grafico from "../Grafico";

function Item({ nome, dias, desc, feito, porcent }) {
  const [espandir, setEspandir] = useState(false);
  const feitoSemana = feito.slice(0,7);
  const tamSemana = Math.min(feito.length, dias.reduce((acumulado, item) => item ? acumulado+1 : acumulado));
  const semanas = Math.ceil(feito.length/7);
  const tamMes = Math.min(feito.length, semanas*tamSemana);

  return (
    <>
      <TouchableOpacity
        style={styles.areaPress}
        activeOpacity={0.85}
        onPress={() => (desc ? setEspandir(!espandir) : null)}
      >
        <Titulo>{nome}</Titulo>
        <View style={styles.containerGrafico}>
          <Grafico feito={feitoSemana} tam={tamSemana} subtitle={"Semana"} />
          <Grafico feito={feito} tam={tamMes} subtitle={"Mês"} />
          <Grafico porcentagem={porcent} subtitle={"Total"} />
        </View>
      </TouchableOpacity>
      {espandir && <Text style={styles.textoDesc}>{desc}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  containerGrafico: {
    marginTop: -16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textoDesc: {
    fontSize: 18,
    fontWeight: "700",
    color: Branco,
    textAlign: 'center',
    textShadowColor: '#0000FF',
    textShadowRadius: 16
  },
});

export default Item;
