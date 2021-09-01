import React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Delete from '../../../assets/delete_forever_white_24dp.svg';
import { Vermelho } from '../../../styles/cores';

function BotaoDelete({acao, meta}){
    function notificacao(){
        Alert.alert(
            `Deletar ${meta ? 'Meta' : 'Tarefa'}?`,
            `Tem certeza que deseja deletar ${meta ? 'Meta' : 'Tarefa'}`,
            [
              {
                text: "Cancelar",
                onPress: () => {},
                style: "cancel"
              },
              { 
                text: "Deletar",
                onPress: () => acao() }
            ]
          );
    }
    return <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={notificacao}>
        <Delete height='80%' width='80%'/>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: Vermelho,
        borderRadius: 20,
        alignSelf: 'flex-end'
    }
})

export default BotaoDelete;