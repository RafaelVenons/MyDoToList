import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import Atividades from "../../../contexct";
import { atualizaPorcentagem } from "../../../Utils";
import CardEdit from "../CardEdit";
import CardLayout from "../CardLayout";

function CardMeta({ nome, dias, desc, feito, id, disabled }) {
  const [edit, setEdit] = useState(false);
  const { metas, setMetas } = useContext(Atividades);

  const acao = async () => {
    const i = metas.findIndex((item) => item.id === id);
    let aux = metas;
    aux[i].feito[0] = !aux[i].feito[0];
    aux[i].porcent = atualizaPorcentagem(
      aux[i].porcent,
      aux[i].total,
      aux[i].feito[0]
    );
    try {
      await AsyncStorage.setItem("@todolist:metas", JSON.stringify(aux));
      setMetas([...aux]);
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel atualizar a Meta");
    }
  };

  const deletar = async () => {
    const i = metas.findIndex((item) => item.id === id);
    let aux = metas;
    aux.splice(i, 1);
    try {
      const dataKey = "@todolist:metas";
      await AsyncStorage.setItem(dataKey, JSON.stringify(aux));
      setMetas([...aux]);
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel deletar a Meta");
    }
  };

  return (
    <TouchableOpacity onLongPress={() => setEdit(true)} activeOpacity={1}>
      {edit ? (
        <CardEdit
          nome={nome}
          desc={desc}
          disabled={disabled}
          dias={dias}
          cancelar={() => setEdit(false)}
          acao={() => setEdit(false)}
          vetor={metas}
          setVetor={setMetas}
          id={id}
          meta
        />
      ) : (
        <CardLayout
          nome={nome}
          desc={desc}
          feito={feito[0]}
          acao={acao}
          deletar={deletar}
          disabled={disabled}
          onLongPress={() => setEdit(true)}
          meta
        />
      )}
    </TouchableOpacity>
  );
}

export default CardMeta;
