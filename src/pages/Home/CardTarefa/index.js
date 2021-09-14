import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import Atividades from "../../../contexct";
import CardEdit from "../CardEdit";
import CardLayout from "../CardLayout";

function CardTarefa({ nome, desc, feito, id }) {
  const [edit, setEdit] = useState(false);
  const { tarefas, setTarefas } = useContext(Atividades);

  const acao = async () => {
    const i = tarefas.findIndex((item) => item.id === id);
    let aux = tarefas;
    aux.splice(i, 1);
    try {
      await AsyncStorage.setItem("@todolist:tarefas", JSON.stringify(aux));
      setTarefas([...aux]);
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel atualizar a Tarefa");
    }
  };

  const deletar = async () => {
    const i = tarefas.findIndex((item) => item.id === id);
    let aux = tarefas;
    aux.splice(i, 1);
    try {
      const dataKey = "@todolist:tarefas";
      await AsyncStorage.setItem(dataKey, JSON.stringify(aux));
      setTarefas([...aux]);
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel deletar a Tarefa");
    }
  };

  return (
    <TouchableOpacity onLongPress={() => setEdit(true)} activeOpacity={1}>
      {edit ? (
        <CardEdit
          nome={nome}
          desc={desc}
          cancelar={() => setEdit(false)}
          acao={() => setEdit(false)}
          vetor={tarefas}
          setVetor={setTarefas}
          id={id}
        />
      ) : (
        <CardLayout
          nome={nome}
          desc={desc}
          feito={feito}
          acao={acao}
          deletar={deletar}
          onLongPress={() => setEdit(true)}
          id={id}
        />
      )}
    </TouchableOpacity>
  );
}

export default CardTarefa;
