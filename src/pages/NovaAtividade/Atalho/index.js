import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Azul_Claro, Azul_Escuro } from '../../../styles/cores';

function Atalho({texto, action, ativo}){
    return <TouchableOpacity style={styles.container} onPress={action} activeOpacity={1}>
  {ativo ? (
    <Text style={styles.textoSelecionado}>{texto}</Text>
  ) : (
    <Text style={styles.textoOpaco}>{texto}</Text>
  )}
</TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%'
    },
    textoSelecionado: {
        fontSize: 24,
        color: Azul_Escuro,
        fontFamily: 'Lobster_400Regular'
      },
      textoOpaco: {
        fontSize: 18,
        color: Azul_Claro,
        fontFamily: 'Lobster_400Regular'
      }
})

export default Atalho;