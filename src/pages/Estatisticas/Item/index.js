import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Titulo from "../../../componets/Titulo";
import { Branco } from "../../../styles/cores";
import Grafico from "../Grafico";

function Item({ nome, dias, desc, feito, porcent }) {
  const [espandir, setEspandir] = useState(false);
  const tam = dias.reduce((acumulado, item) => item ? acumulado+1 : acumulado);
  const feitoSemana = feito.slice(0,tam);
  const feitoMes = feito.slice(0,4*tam);

  return (
    <>
      <TouchableOpacity
        style={styles.areaPress}
        activeOpacity={0.85}
        onPress={() => (desc ? setEspandir(!espandir) : null)}
      >
        <Titulo>{nome}</Titulo>
        <View style={styles.containerGrafico}>
          <Grafico feito={feitoSemana} subtitle={"Semana"} />
          <Grafico feito={feitoMes} subtitle={"Mês"} />
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
