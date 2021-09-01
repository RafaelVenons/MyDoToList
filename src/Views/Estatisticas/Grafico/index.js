import React from "react";
import { StyleSheet, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import Lobster from "../../../componets/Lobster";
import { Branco, Verde, Vermelho } from "../../../styles/cores";

function Grafico({ feito, porcentagem, largura, subtitle }) {
  const styles = dinamicStyle(largura);
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0,
    color: () => `rgba(255, 255, 255, 0)`,
    barPercentage: 0.5,
  };
  if (porcentagem) {
    const data = [
      {
        name: "Feito",
        population: porcentagem,
        color: Verde,
        legendFontColor: "#FFFFFF",
        legendFontSize: 1,
      },
      {
        name: "Não Feito",
        population: 100 - porcentagem,
        color: Vermelho,
        legendFontColor: "#FFFFFF",
        legendFontSize: 1,
      },
    ];
    return (
      <View style={styles.areaGrafico}>
        <PieChart
          data={data}
          width={largura}
          height={largura}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          hasLegend={false}
          center={[largura / 4, 0]}
        />
        <Lobster style={styles.porcentagem}> {porcentagem}% </Lobster>
        <Lobster style={styles.info}> {subtitle} </Lobster>
      </View>
    );
  } else {
    const ok = feito.reduce(
      (acumulado, item) => (item ? acumulado + 1 : acumulado),
      0
    );
    const notOk = feito.length - ok;
    const porcent = Math.round((100 * ok) / feito.length);
    const data = [
      {
        name: "Feito",
        population: ok,
        color: Verde,
        legendFontColor: "#FFFFFF",
        legendFontSize: 1,
      },
      {
        name: "Não Feito",
        population: notOk,
        color: Vermelho,
        legendFontColor: "#FFFFFF",
        legendFontSize: 1,
      },
    ];
    return (
      <View style={styles.areaGrafico}>
        <PieChart
          data={data}
          width={largura}
          height={largura}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          hasLegend={false}
          center={[largura / 4, 0]}
        />
        <Lobster style={styles.porcentagem}> {porcent}% </Lobster>
        <Lobster style={styles.info}> {subtitle} </Lobster>
      </View>
    );
  }
}

const dinamicStyle = (largura) =>
  StyleSheet.create({
    areaGrafico: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    porcentagem: {
      fontSize: 36,
      color: Branco,
      marginTop: (-largura * 5) / 7,
      textShadowColor: "#0000FF",
      textShadowRadius: 12,
    },
    info: {
      fontSize: 24,
      color: Branco,
      textShadowColor: "#0000FF",
      textShadowRadius: 12,
    },
  });

export default Grafico;
