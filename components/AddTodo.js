import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = val => {
        setText(val);
    }

    return(
        <View>
            <TextInput
                placeholder='new todo...'
                onChangeText={changeHandler}
                style={styles.input}
            />
            <Button onPress={() => submitHandler(text)} title='Add Todo' color='coral' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        marginHorizontal: 8,
        marginVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})