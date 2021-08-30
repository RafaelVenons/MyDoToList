import React, { useContext } from 'react';
import Atividades from '../../../componets/contexct';
import CardLayout from '../CardLayout';

function CardMeta({ nome, dias, desc, feito, id}){
    const { metas, setMetas } = useContext(Atividades);

    const acaoOk = () => {
        const i = metas.findIndex((item) => item.id === id);
        let aux = metas;
        const tam = aux[i].feito.length-1;
        aux[i].feito[tam] = true;
        setMetas([...aux])
    }

    const acaoNotOk = () => {
        const i = metas.findIndex((item) => item.id === id);
        let aux = metas;
        const tam = aux[i].feito.length-1;
        aux[i].feito[tam] = false;
        setMetas([...aux])
    }

    return <CardLayout nome={nome} desc={desc} feito={feito[feito.length-1]} acaoOk={acaoOk} acaoNotOk={acaoNotOk} meta/>
}

export default CardMeta;