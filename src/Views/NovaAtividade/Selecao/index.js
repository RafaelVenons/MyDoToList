import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { Azul_Claro, Azul_Escuro } from '../../../styles/cores';
import Atalho from '../Atalho';

function Selecao({toggle, setToggle}){
    const toggleSwitch = () => setToggle((previousState) => !previousState);
  const toggleMeta = () => setToggle(false);
  const toggleTarefa = () => setToggle(true);

    return <View style={styles.container}>
    <Atalho texto="Meta" action={toggleMeta} ativo={!toggle} />
    <Switch
      trackColor={{ false: Azul_Claro, true: Azul_Claro }}
      thumbColor={Azul_Escuro}
      onValueChange={toggleSwitch}
      value={toggle}
    />
    <Atalho texto="Tarefa" action={toggleTarefa} ativo={toggle} />
  </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }
})

export default Selecao;