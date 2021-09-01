import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Titulo from "../../../componets/Titulo";
import { Azul_Escuro, Branco } from "../../../styles/cores";
import Grafico from "../Grafico";

const largura = Dimensions.get("window").width * 0.3;

function Item({ nome, dias, desc, feito }) {
  const [espandir, setEspandir] = useState(false);
  let feitoSemana = [true];
  feito.length <= 7 ? (feitoSemana = feito) : (feitoSemana = feito.slice(-7));
  const tam = dias.reduce((acumulado, item) => item ? acumulado+1 : acumulado);

  return (
    <>
      <TouchableOpacity
        style={styles.areaPress}
        activeOpacity={0.85}
        onPress={() => (desc ? setEspandir(!espandir) : null)}
      >
        <Titulo>{nome}</Titulo>
        <View style={styles.containerGrafico}>
          <Grafico feito={feitoSemana} largura={largura} subtitle={"Semana"} />
          <Grafico feito={feito} largura={largura} subtitle={"Mês"} />
          <Grafico porcentagem={5} largura={largura} subtitle={"Total"} />
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
