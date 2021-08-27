import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Azul, Branco, Laranja } from "../../styles/cores";
import EstatisticasSVG from "../../assets/equalizer_white_24dp.svg";
import HomeSVG from "../../assets/home_white_24dp.svg";
import NovaAtividadeSVG from "../../assets/add_circle_white_24dp.svg";

function Navegacao({ page, setPage }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={() => setPage("Estatisticas")}>
        <EstatisticasSVG
          height="50%"
          width="50%"
          fill={page === "Estatisticas" ? Laranja : Branco}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => setPage("Home")}>
        <HomeSVG
          height="50%"
          width="50%"
          fill={page === "Home" ? Laranja : Branco}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => setPage("NovaAtividade")}>
        <NovaAtividadeSVG
          height="50%"
          width="50%"
          fill={page === "NovaAtividade" ? Laranja : Branco}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 120,
    width: "100%",
    backgroundColor: Azul,
    position: "absolute",
    top: Dimensions.get("window").height - 60,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  botao: {
    paddingTop: 24,
    alignItems: 'center',
    flex: 1
  }
});

export default Navegacao;
