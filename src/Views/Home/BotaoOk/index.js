import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import OK from '../../../assets/task_alt_white_24dp.svg';
import { Branco, Verde } from '../../../styles/cores';

function BotaoOk(){
    return <View style={styles.container}><OK/></View>
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
        backgroundColor: Verde,
        borderRadius: 8
    }
})

export default BotaoOk;