import React, { useContext } from "react";
import Titulo from "../../componets/Titulo";
import CardTarefa from "./CardTarefa";
import CardMeta from "./CardMeta";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import Atividades from "../../contexct";
import moment from "moment";

function Home() {
  const { tarefas, metas } = useContext(Atividades);
  const dayWeek = moment().day();
  return (
    <ScrollView style={styles.container}>
      {tarefas.filter((item) => !item.feito).length !== 0 && (
        <Titulo>Tarefas</Titulo>
      )}
      {tarefas
        .filter((item) => !item.feito)
        .map((item) => (
          <CardTarefa key={item.id} {...item} />
        ))}
      <Titulo>Metas</Titulo>
      {metas
        .filter((item) => item.dias[dayWeek])
        .map((item) => (
          <CardMeta key={item.id} {...item} />
        ))}
      {metas
        .filter((item) => !item.dias[dayWeek])
        .map((item) => (
          <CardMeta key={item.id} {...item} disabled />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - 247,
  },
});

export default Home;

/*
      <FlatList
        data={tarefas.filter(item => !item.feito)}
        renderItem={({item}) => <CardTarefa {...item}/>}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Titulo>Tarefas</Titulo>}
      />
      <FlatList
        data={tarefas.filter(item => item.feito)}
        renderItem={({item}) => <CardTarefa {...item}/>}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={metas.filter(item => !item.feito[item.feito.length-1])}
        renderItem={({item}) => <CardMeta {...item}/>}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Titulo>Metas</Titulo>}
      />
      <FlatList
        data={metas.filter(item => item.feito[item.feito.length-1])}
        renderItem={({item}) => <CardMeta {...item}/>}
        keyExtractor={(item) => item.id}
      />
*/
