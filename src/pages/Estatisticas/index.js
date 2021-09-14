import React, { useContext } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Atividades from "../../contexct";
import Item from "./Item";
import NotFound from "./NotFound";

function Estatisticas({goNewTask}) {
  const {metas} = useContext(Atividades);
  return <View>
    <ScrollView style={styles.containerScroll}>
    {metas.length !== 0 ? metas.map((item) => <Item key={item.id} {...item}/>) : <NotFound goNewTask={goNewTask}/>}
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  containerScroll: {
    height: Dimensions.get("window").height - 247
  }
});

export default Estatisticas;
