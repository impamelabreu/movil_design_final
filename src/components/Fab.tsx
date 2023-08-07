import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet, TouchableNativeFeedback, Platform} from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ onPress, position = 'br'}: Props ) => {

    const leftImage = require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/izquierda.png');
    const rightImage = require('C:/Users/HP.HP-PC/Desktop/c/RN-HolaMundo-Contador-0.5.0/img/derecha.png');

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                activeOpacity={ 0.75 }
                style={[ 
                    styles.fabLocation,  
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
            >
                <View style={ styles.fab }>
                <Image source={(position === 'bl') ? leftImage : rightImage}
                            style={styles.image}/>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[ 
                    styles.fabLocation,  
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30 ) }
                >
                    <View style={ styles.fab }>
                    <Image source={(position === 'bl') ? leftImage : rightImage}
                            style={styles.image}/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 250,
    },
    right: {
        right: 80
    },
    left: {
        left: 80
    },
    fab: {
        width: 100,
        height: 120,
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    },
})