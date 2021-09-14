import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Error from "../../../assets/error_white_24dp.svg";
import NovaAtividade from "../../../assets/add_circle_white_24dp.svg";
import { Azul, Vermelho } from "../../../styles/cores";

function NotFound({ goNewTask }) {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Error height="80" width="80" fill={Vermelho} />
        <Text style={styles.textoAlerta}>Nenhuma Meta encontrada</Text>
      </View>
      <TouchableOpacity
        style={styles.subcontainer}
        onPress={goNewTask}
        activeOpacity={0.5}
      >
        <NovaAtividade height="80" width="80" fill={Azul} />
        <Text style={styles.textoNovaMeta}>Adicionar nova Meta?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - 247,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textoAlerta: {
    fontFamily: "Lobster_400Regular",
    color: Vermelho,
    fontSize: 24,
  },
  textoNovaMeta: {
    fontFamily: "Lobster_400Regular",
    color: Azul,
    fontSize: 24,
  },
  subcontainer: {
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default NotFound;
