import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const TareaScreen = () => {
    const [backgroundImage, setBackgroundImage] = useState(require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/fondoPantalla.jpg')); // Imagen de fondo inicial

    const backgroundsGreen = [
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/atardecer01.jpg'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/atardecer02.jpg'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/atardecer03.png'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/atardecer04.jpg'),
    ];

    const setGreenBackground = () => {
      const randomIndex = Math.floor(Math.random() * backgroundsGreen.length);
      setBackgroundImage(backgroundsGreen[randomIndex]);
    };

    const backgroundsPlum = [
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/lila.jpg'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/azul.jpg'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/rosa.png'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/verde.jpg'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/fondoPantalla.jpg'),
    ];

    const setPlumBackground = () => {
      const randomIndex = Math.floor(Math.random() * backgroundsPlum.length);
      setBackgroundImage(backgroundsPlum[randomIndex]);
    };

    const backgroundsBlue = [
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/fondo.webp'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/fondo2.png'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/fondo3.png'),
      require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/fondo4.png'),
    ];

    const setBlueBackground = () => {
      const randomIndex = Math.floor(Math.random() * backgroundsBlue.length);
      setBackgroundImage(backgroundsBlue[randomIndex]);
    };

    return (
        <View style={styles.container}>
            <Image
                source={backgroundImage}
                resizeMode="cover"
                style={[styles.imageBackground, { flex: 1 }]}
            />
            <TouchableOpacity
                style={styles.cajaAtardeceres}
                onPress={setGreenBackground}
            />
            <TouchableOpacity
                style={styles.cajaColores}
                onPress={setPlumBackground}
            />
            <TouchableOpacity
                style={styles.cajaBordes}
                onPress={setBlueBackground}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1000,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    cajaAtardeceres: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: 50,
        top: 240,
        borderColor: 'black',
        backgroundColor: 'transparent',
        alignSelf: 'flex-start',
    },
    cajaColores: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'black',
        top: -50,
        backgroundColor: 'transparent',
    },
    cajaBordes: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: 50,
        top: 240,
        borderColor: 'black',
        backgroundColor: 'transparent',
        alignSelf: 'flex-start',
    },
});