import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import React from 'react';
import { StyleSheet,View, Text, TextInput } from 'react-native';
import Lobster from '../../../componets/Lobster';
import { Azul, Azul_Escuro, Branco} from '../../../styles/cores';

function EntradaText({titulo, style, multiline, value, onChangeText}){
    return <View style={[styles.container, style]}>
        <View style={styles.containerTexto}>
            <Lobster style={styles.title}>{titulo}</Lobster>
        </View>
        <TextInput style={styles.input} multiline={multiline} value={value} onChangeText={onChangeText}/>
    </View>
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderRadius: 16,
        borderColor: Azul,
        paddingBottom: 8,
        paddingHorizontal: 16,
        marginTop: 12
    },
    containerTexto: {
        marginTop: -14,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        paddingHorizontal: 8,
        fontSize: 18,
        backgroundColor: Branco,
        color: Azul_Escuro
    },
    input: {
        fontSize: 16,
    }
})

export default EntradaText;