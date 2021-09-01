import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Alert } from 'react-native';
import Atividades from '../../../componets/contexct';
import CardLayout from '../CardLayout';

function CardTarefa({ nome, desc, feito, id}){
    const { tarefas, setTarefas } = useContext(Atividades);

    const acao = () => {
        const i = tarefas.findIndex((item) => item.id === id);
        let aux = tarefas;
        aux[i].feito = true;
        setTarefas([...aux])
    }

    const deletar = async () => {
        const i = tarefas.findIndex((item) => item.id === id);
        let aux = tarefas;
        aux.splice(i,1);
        try {
            const dataKey = "@todolist:tarefas";
            await AsyncStorage.setItem(dataKey, JSON.stringify(aux));
            setTarefas([...aux]);
          } catch (error) {
            console.log(error);
            Alert.alert("Não foi possivel deletar a Tarefa");
          }
    }

    return <CardLayout nome={nome} desc={desc} feito={feito} acao={acao} deletar={deletar} id={id}/>
}

export default CardTarefa;