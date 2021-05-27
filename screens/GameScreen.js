import React, {useState}from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import NumberComponent from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomeBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomeBetween(min, max, exclude);
    }else{
        return rndNum; 
    }
}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomeBetween(1,100, props.useChoise));
    
    return(
        <View>
            <Text>Guess</Text>
            <NumberComponent>{currentGuess}</NumberComponent>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={() => {}}/>
                <Button title="Greater" onPress={() => {}}/>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    scree:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        maxWidth:'80%'
    }
});

export default GameScreen;