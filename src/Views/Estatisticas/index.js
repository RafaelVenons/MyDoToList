import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import Lobster from "../../componets/Lobster";
import Titulo from "../../componets/Titulo";
import { Azul_Escuro, Branco, Laranja, Verde, Vermelho } from "../../styles/cores";

const x = Dimensions.get("window").width * 0.3;

function Estatisticas() {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: Verde,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: Vermelho,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: Laranja,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const teste = [1, 2, 3];
  return (
    <View>
      <Titulo>Meta 1</Titulo>
      <View style={styles.containerGrafico}>
        <View style={styles.areaGrafico}>
            <PieChart
            data={data}
            width={x}
            height={x}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            hasLegend={false}
            center={[x/4,0]}
            />
            <Lobster style={styles.porcentagem}> 42% </Lobster>
            <Lobster style={styles.info}> Semana </Lobster>
        </View>
        <View style={styles.areaGrafico}>
            <PieChart
            data={data}
            width={x}
            height={x}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            hasLegend={false}
            center={[x/4,0]}
            />
            <Lobster style={styles.porcentagem}> 42% </Lobster>
            <Lobster style={styles.info}> Mês </Lobster>
        </View>
        <View style={styles.areaGrafico}>
            <PieChart
            data={data}
            width={x}
            height={x}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            hasLegend={false}
            center={[x/4,0]}
            />
            <Lobster style={styles.porcentagem}> 42% </Lobster>
            <Lobster style={styles.info}> Total </Lobster>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGrafico: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  areaGrafico: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  porcentagem: {
    fontSize: 36,
    color: Branco,
    marginTop: -x/1.4,
    textShadowColor: '#0000FF',
    textShadowRadius: 12
  },
  info: {
    fontSize: 24,
    color: Branco,
    textShadowColor: '#0000FF',
    textShadowRadius: 12
  }
});

export default Estatisticas;
