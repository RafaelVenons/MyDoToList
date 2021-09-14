import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Branco, Verde, Vermelho } from "../../../styles/cores";

function Grafico({ feito, porcentagem, subtitle }) {
  const largura = Dimensions.get("window").width * 0.3;
  const styles = dinamicStyle(largura);
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0,
    color: () => `rgba(255, 255, 255, 0)`,
    barPercentage: 0.5,
  };
  if (porcentagem || porcentagem === 0) {
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
        <Text style={styles.porcentagem}> {Math.round(porcentagem)}% </Text>
        <Text style={styles.info}> {subtitle} </Text>
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
        <Text style={styles.porcentagem}> {porcent}% </Text>
        <Text style={styles.info}> {subtitle} </Text>
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
      marginTop: -largura *.7,
      textShadowColor: "#0000FF",
      textShadowRadius: 16,
      fontFamily: 'Lobster_400Regular'
    },
    info: {
      fontSize: 24,
      color: Branco,
      textShadowColor: "#0000FF",
      textShadowRadius: 16,
      fontFamily: 'Lobster_400Regular'
    },
  });

export default Grafico;
