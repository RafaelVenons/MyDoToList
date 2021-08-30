import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import OK from '../../../assets/task_alt_white_24dp.svg';
import { Verde } from '../../../styles/cores';

function BotaoOk({acao}){
    return <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={acao}>
        <OK height='80%' width='80%'/>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: Verde,
        borderRadius: 8
    }
})

export default BotaoOk;