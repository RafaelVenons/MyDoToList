import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Verde_Escuro, Vermelho_Escuro } from "../../../styles/cores";

function Touchable({ children, disabled }) {
  return (
    <View>
      {disabled ? (
        <View>{children}</View>
      ) : (
        <LinearGradient
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[
            meta ? (feito ? Verde_Escuro : Vermelho_Escuro) : Laranja_Claro,
            Laranja,
            Laranja,
          ]}
        >
          {children}
        </LinearGradient>
      )}
    </View>
  );
}

export default Touchable;
