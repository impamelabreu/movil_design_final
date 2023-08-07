import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(0);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: { contador }
            </Text>
            <Text style={ styles.text }>
                Pamela Abreu 2020-0671
            </Text>

            <Fab 
                title="+1"
                onPress={ () => setContador( contador + 1 ) }
            />

            <Fab 
                title="-1"
                position="bl"
                onPress={ () => setContador( contador - 1 ) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        top: -200,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    text: {
        fontSize: 20,
        top: -80,
        textAlign: 'center',
        fontFamily: 'cursive'
    }
})
