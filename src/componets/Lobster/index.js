import React from 'react';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { StyleSheet, Text } from 'react-native';

function Lobster({children, style}){
    let [fontsLoaded] = useFonts({Lobster_400Regular});
    if(fontsLoaded){
        return <Text style={[styles.texto, style]}>{children}</Text>
    }else{
        return <Text style={style}>{children}</Text>
    }

}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'Lobster_400Regular'
    }
})

export default Lobster;