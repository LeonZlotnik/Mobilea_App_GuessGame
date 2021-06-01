import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOver = props => {
    return(
        <Views style={styles.screens}>
            <Text>The Game is Over</Text>
        </Views>
    )
};

const styles = StyleSheet.create({
    screens:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOver;