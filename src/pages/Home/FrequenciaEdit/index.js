import React from 'react';
import { StyleSheet, View } from 'react-native';
import Botao from '../../../componets/Botao';

function FrequenciaEdit({dias, setDias}){
    const semana = [' D ',' S ',' T ',' Q ',' Q ',' S ',' S '];
    return <View style={styles.container}>
        {semana.map((dia, i) => <Botao key={i} i={i} dias={dias} setDias={setDias}>{dia}</Botao>)}
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default FrequenciaEdit;