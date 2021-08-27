import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Branco, Font_Azul } from '../../styles/cores';
import Lobster from '../Lobster';

function Titulo({children}){
    return <>
    <View style={styles.separador}/>
    <View style={styles.containerTexto}>
        <Lobster estilo={styles.texto}>{children}</Lobster>
    </View>
    </>
};

const styles = StyleSheet.create({
    separador: {
        margin: 32,
        borderBottomWidth: 2,
        borderColor: Font_Azul
    },
    containerTexto: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -66
    },
    texto: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Branco,
        fontSize: 24,
        color: Font_Azul
    }
})

export default Titulo;