import React from 'react';
import { StyleSheet, View } from 'react-native';
import Lobster from '../../../componets/Lobster';
import { Branco, Laranja } from '../../../styles/cores';
import BotaoNotOk from '../BotaoNotOk';
import BotaoOk from '../BotaoOk';

function CardTarefa(){
    return <View style={styles.container}>
        <Lobster estilo={styles.texto}>Task</Lobster>
        <BotaoOk/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 32,
        marginBottom: 16,
        backgroundColor: Laranja,
        borderRadius: 16,
    },
    texto: {
        flex: 1,
        paddingTop: 8,
        fontSize: 24,
        color: Branco
    },
    containerBotoes: {
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        justifyContent: 'space-between',
        width: 96
    }
})

export default CardTarefa;