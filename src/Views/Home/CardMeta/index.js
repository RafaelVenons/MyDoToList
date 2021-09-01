import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Alert } from 'react-native';
import Atividades from '../../../componets/contexct';
import CardLayout from '../CardLayout';

function CardMeta({ nome, dias, desc, feito, id}){
    const { metas, setMetas } = useContext(Atividades);

    const acao = () => {
        const i = metas.findIndex((item) => item.id === id);
        let aux = metas;
        const tam = aux[i].feito.length-1;
        aux[i].feito[tam] = !aux[i].feito[tam];
        setMetas([...aux]);
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

    return <CardLayout nome={nome} desc={desc} feito={feito[feito.length-1]} acao={acao} deletar={deletar} meta/>
}

export default CardMeta;