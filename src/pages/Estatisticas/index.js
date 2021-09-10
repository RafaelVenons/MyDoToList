import React, { useContext } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Atividades from "../../contexct";
import { inicioDia } from "../../Utils";
import Item from "./Item";

function Estatisticas() {
  
  const teste = `${inicioDia()}`;
  const {metas} = useContext(Atividades);
  return <View>
    <ScrollView style={styles.containerScroll}>
    {metas.length !== 0 ? metas.map((item) => <Item key={item.id} {...item}/>) : <Text>{teste}</Text>}
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  containerScroll: {
    height: Dimensions.get("window").height - 247
  }
});

export default Estatisticas;
