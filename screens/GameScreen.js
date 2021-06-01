import React, {useState, useRef, useEffect}from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

import NumberContainer from '../components/NumberContainer';
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

    const [currentGuess, setCurrentGuess] = useState(generateRandomeBetween(1,100, useChoise));
    const [rounds, setRounds] = useState(0);

    const currentHigh = useRef(100)
    const currentLow = useRef(1)

    const {useChoise, onGameOver} = props

    useEffect(() => {
        if(currentGuess === useChoise){
            onGameOver(rounds);
        }
    }, [useChoise, currentGuess, onGameOver])

    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < useChoise) || (direction === 'greater' && currentGuess > useChoise)){
                Alert.alert('Do not lie', 'You know this is wrong...', [{text: 'Sorry', style: 'cancel'}]);
                return;
            };
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomeBetween(currentLow.current, currentHigh.current , currentGuess); 
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    }
    
    return(
        <View style={styles.screen}>
            <Text>Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')}/>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        maxWidth:'100%'
    }
});

export default GameScreen;