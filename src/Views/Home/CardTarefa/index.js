import React, { useContext } from 'react';
import Atividades from '../../../componets/contexct';
import CardLayout from '../CardLayout';

function CardTarefa({ nome, desc, feito, id}){
    const { tarefas, setTarefas } = useContext(Atividades);

    const acaoOk = () => {
        const i = tarefas.findIndex((item) => item.id === id);
        let aux = tarefas;
        aux[i].feito = true;
        setTarefas([...aux])
    }

    return <CardLayout nome={nome} desc={desc} feito={feito} acaoOk={acaoOk}/>
}

export default CardTarefa;