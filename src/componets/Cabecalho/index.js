import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Azul } from '../../styles/cores';

function Cabecalho(){
    return  <View style={styles.container}>
        <Image style={styles.imagem} source={require('../../assets/splash.png')}/>
        </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 187,
        width: '100%',
        backgroundColor: Azul,
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16
    },
    imagem: {
        resizeMode: 'center',
        width: '80%',
    }
})

export default Cabecalho;