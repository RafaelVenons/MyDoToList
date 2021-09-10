import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
            meta ? (feito ? "#28F700" : "#FD0018") : Laranja_Claro,
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
