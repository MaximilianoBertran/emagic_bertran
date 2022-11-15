import React from "react";
import { Button, TextInput, View } from "react-native";
import { styles } from "./styles";

const AddItem = ({ task, onHandleChange, onHandleTask }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            value={ task }
            onChangeText={ text => onHandleChange(text) }
            />
            <Button disabled={!task} title='Add' color='#9A848F' onPress={ onHandleTask } />
        </View>
    );
}

export default AddItem;