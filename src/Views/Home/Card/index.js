import React from 'react';
import { StyleSheet, View } from 'react-native';
import Lobster from '../../../componets/Lobster';
import { Branco, Laranja } from '../../../styles/cores';
import BotaoOk from '../BotaoOk';

function Card(){
    return <View style={styles.container}>
        <Lobster estilo={styles.texto}>Task</Lobster>
        <BotaoOk/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 32,
        marginBottom: 16,
        backgroundColor: Laranja,
        borderRadius: 16,
    },
    texto: {
        fontSize: 24,
        color: Branco
    }
})

export default Card;