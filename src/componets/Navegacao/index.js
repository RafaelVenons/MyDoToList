import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import { Azul, Branco, Laranja } from "../../styles/cores";
import EstatisticasSVG from "../../assets/equalizer_white_24dp.svg";
import HomeSVG from "../../assets/home_white_24dp.svg";
import NovaAtividadeSVG from "../../assets/add_circle_white_24dp.svg";

function Navegacao({ page, setPage }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={() => setPage("Estatisticas")} activeOpacity={0.5}>
        <EstatisticasSVG
          height="100%"
          width="100%"
          fill={page === "Estatisticas" ? Laranja : Branco}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => setPage("Home")} activeOpacity={0.5}>
        <HomeSVG
          height="100%"
          width="100%"
          fill={page === "Home" ? Laranja : Branco}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => setPage("NovaAtividade")} activeOpacity={0.5}>
        <NovaAtividadeSVG
          height="100%"
          width="100%"
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
    borderTopEndRadius: 28,
    borderTopStartRadius: 28,
    elevation: 4
  },
  botao: {
    paddingBottom: 66,
    paddingTop: 12,
    alignItems: 'center',
    flex: 1
  }
});

export default Navegacao;
