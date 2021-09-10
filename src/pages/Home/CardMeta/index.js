import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Alert } from 'react-native';
import Atividades from '../../../contexct';
import { atualizaPorcentagem } from '../../../Utils';
import CardLayout from '../CardLayout';

function CardMeta({ nome, dias, desc, feito, id, disabled}){
    const { metas, setMetas } = useContext(Atividades);

    const acao = async () => {
        const i = metas.findIndex((item) => item.id === id);
        let aux = metas;
        aux[i].feito[0] = !aux[i].feito[0];
        aux[i].porcent = atualizaPorcentagem(aux[i].porcent, aux[i].total, aux[i].feito[0]);
        try {
          await AsyncStorage.setItem("@todolist:metas", JSON.stringify(aux));
          setMetas([...aux]);
        } catch (error) {
          console.log(error);
          Alert.alert("Não foi possivel atualizar a Meta");
        }
    }

    const deletar = async () => {
        const i = metas.findIndex((item) => item.id === id);
        let aux = metas;
        aux.splice(i,1);
        try {
            const dataKey = "@todolist:metas";
            await AsyncStorage.setItem(dataKey, JSON.stringify(aux));
            setMetas([...aux]);
          } catch (error) {
            console.log(error);
            Alert.alert("Não foi possivel deletar a Meta");
          }
    }

    return <CardLayout nome={nome} desc={desc} feito={feito[0]} acao={acao} deletar={deletar} meta disabled={disabled}/>
}

export default CardMeta;