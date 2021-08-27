import React from 'react';
import Titulo from '../../componets/Titulo';
import CardTarefa from './CardTarefa';
import CardMeta from './CardMeta';
import { StyleSheet, Dimensions, View } from 'react-native';

function Home(){
    return <View>
    <Titulo>Tarefas</Titulo>
    <CardTarefa/>
    <Titulo>Metas</Titulo>
    <CardMeta/>
    </View>
}

export default Home;