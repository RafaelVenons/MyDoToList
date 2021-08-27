import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Views/Home';
import NovaAtividade from '../Views/NovaAtividade';
import Estatisticas from '../Views/Estatisticas/Index';
import HomeSVG from '../assets/home_white_24dp.svg';
import NovaAtividadeSVG from '../assets/add_circle_white_24dp.svg';
import EstatisticasSVG from '../assets/equalizer_white_24dp.svg';

const Tab = createBottomTabNavigator();

function Rotas(){
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="cuzcuz2" component={Home}/>
            <Tab.Screen name="cuzcuz1" component={Estatisticas}/>
            <Tab.Screen name="cuzcuz3" component={NovaAtividade}/>
        </Tab.Navigator>
    </NavigationContainer>
}

export default Rotas;