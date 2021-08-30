import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import NotOK from '../../../assets/highlight_off_white_24dp.svg';
import { Vermelho } from '../../../styles/cores';

function BotaoNotOk({acao}){
    return <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={acao}>
        <NotOK height='80%' width='80%'/>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: Vermelho,
        borderRadius: 8
    }
})

export default BotaoNotOk;