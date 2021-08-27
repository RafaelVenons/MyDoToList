import React from 'react';
import { StyleSheet, View } from 'react-native';
import Lobster from '../../../componets/Lobster';
import { Branco, Laranja } from '../../../styles/cores';
import BotaoNotOk from '../BotaoNotOk';
import BotaoOk from '../BotaoOk';

function CardMeta(){
    return <View style={styles.container}>
        <Lobster style={styles.texto}>Meta</Lobster>
        <View style={styles.containerBotoes}>
            <BotaoNotOk/>
            <BotaoOk/>
        </View>
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
        elevation: 4
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
        width: 88
    }
})

export default CardMeta;