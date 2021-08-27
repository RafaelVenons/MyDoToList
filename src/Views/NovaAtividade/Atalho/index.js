import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import Lobster from '../../../componets/Lobster';
import { Azul_Claro, Azul_Escuro } from '../../../styles/cores';

function Atalho({texto, action, ativo}){
    return <TouchableOpacity style={styles.container} onPress={action} activeOpacity={1}>
  {ativo ? (
    <Lobster style={styles.textoSelecionado}>{texto}</Lobster>
  ) : (
    <Lobster style={styles.textoOpaco}>{texto}</Lobster>
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
      },
      textoOpaco: {
        fontSize: 18,
        color: Azul_Claro,
      }
})

export default Atalho;