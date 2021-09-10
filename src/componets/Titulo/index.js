import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Branco, Azul_Escuro } from '../../styles/cores';

function Titulo({children}){
    return <>
    <View style={styles.separador}/>
    <View style={styles.containerTexto}>
        <Text style={styles.texto}>{children}</Text>
    </View>
    </>
};

const styles = StyleSheet.create({
    separador: {
        margin: 32,
        borderBottomWidth: 2,
        borderColor: Azul_Escuro
    },
    containerTexto: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -58
    },
    texto: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Branco,
        fontSize: 24,
        color: Azul_Escuro,
        fontFamily: 'Lobster_400Regular'
    }
})

export default Titulo;